const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const contactController = require("../controllers/contact.controller");

router.get("/", contactController.get);
router.get("/maps/api/js", contactController.getGoogleMapsScript);

// Route to process the form sending
router.post(
  "/",
  [
    check("name", "El nombre es requerido").notEmpty(),
    check("phone", "El teléfono es requerido").notEmpty(),
    check("email", "El correo electrónico es requerido").notEmpty(),
    check("email", "El correo electrónico no es válido").isEmail(),
    check("service", "Por favor escoge un servicio").notEmpty(),
    check("message", "El mensaje es requerido").notEmpty(),
  ],
  contactController.sendEmail
);

module.exports = router;
