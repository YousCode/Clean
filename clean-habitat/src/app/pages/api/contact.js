// src/pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Créez un transporteur pour envoyer l'email
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Vous pouvez utiliser un autre service comme Mailgun ou SendGrid
        auth: {
          user: process.env.EMAIL_USER, // Remplacez par votre email
          pass: process.env.EMAIL_PASS, // Remplacez par votre mot de passe email
        },
      });

      // Configuration de l'email
      const mailOptions = {
        from: email,
        to: process.env.RECEIVER_EMAIL, // L'email du destinataire
        subject: `Nouveau message de ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      // Envoyez l'email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email envoyé avec succès!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email.' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}