// contact.controller.js
require('dotenv').config();
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const { validationResult } = require("express-validator");



exports.get = (req, res) => {
  const errors = req.query.errors;
  res.render('contact', {
    title: "Contacto",
    errors,
    success_msg: req.query.success,
  });
};

// Configura el transporter de Nodemailer con las credenciales de Mailgun
const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mg(auth));

exports.sendEmail = async (req, res) => {
  try {
    
    // Get validation errors
    const errors = validationResult(req);

    // Verify if there are errors in validation
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.render("contact", {
        title: "Contacto",
        errors: errors.mapped(),
      })
    }

    // If there's no errors continue with the process
    const { name, phone, service, email, message } = req.body;

    // Sets data for emails
    const mailOptions = {
      from: "test@gmail.com",
      to: "darioernesto.roca@gmail.com",
      subject: "Mensaje de Tienda Virtual | Once Once",
      html: `
          <p>Nombre: ${name}</p>
          <p>Teléfono: ${phone}</p>
          <p>Correo electrónico: ${email}</p>
          <p>Servicio requerido: ${service}</p>
          <p>Mensaje: ${message}</p>
        `,
    };


    // Sends the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Mensaje enviado: ", info.messageId);
    res.render("contact", {
      title: "Contacto",
      errors: errors.mapped(),
      success_msg: "*Su mensaje ha sido enviado",
    });
  } catch (error) {
    console.log(error);
    res.render("contact", { errors: error, title: "Contacto"});
  }
};


exports.getGoogleMapsScript = async (req, res) => {
  console.log('Coming from getGoogleMapScript');
  const { default: fetch } = await import('node-fetch');
  const googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&callback=initMap&libraries=maps,marker&v=beta`;

  try {
    const response = await fetch(googleMapsUrl);
    const body = await response.text();
    res.send(body);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred while fetching Google Maps script.');
  }
};


