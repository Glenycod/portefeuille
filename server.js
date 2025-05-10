// // //////////e-commerce///////

//  const express = require('express');
// const mongoose = require('mongoose');
//  const cors = require('cors');
//  require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connexion à MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB connecté'))
// .catch(err => console.error(err));

// // Routes
// const produitsRoutes = require('./routes/produits');
// app.use('/api/produits', produitsRoutes);

// // Démarrage du serveur
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Serveur démarré sur le port ${PORT}`);
// });







// /////////Galerie photo////////
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Route pour recevoir un message de contact
const nodemailer = require('nodemailer');

app.post('/api//portofolioLS', async (req, res) => {
  const { nom, email, tel, message } = req.body;

  if (!nom || !email ||!tel || !message) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  // Affichage dans le terminal
  console.log('Nouveau message reçu :');
  console.log('Nom:', nom);
  console.log('Email:', email);
  console.log('Tel:', tel);
  console.log('Message:', message);

  // Configuration pour l'envoi d'email
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'glennfrrdy@gmail.com', // Remplace par ton email
      pass: 'zvtbdtbbysnwzrus' // Spécial, je t'explique
    }
  });

  let mailOptions = {
    from: email, // Expéditeur = l'email de la personne qui t'a contacté
    to: 'glennfrrdy@gmail.com', // Destinataire = ton email
    subject: 'Nouveau message de contact',
    text:` Nom: ${nom}\nEmail: ${email}\nTel: ${tel}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email envoyé avec succès.');
    return res.status(200).json({ message: "Message envoyé avec succès !" });
  } catch (error) {
    console.error('Erreur en envoyant l\'email:', error);
    return res.status(500).json({ message: "Erreur lors de l'envoi de l'email." });
  }
});

// Lancer le serveur
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
