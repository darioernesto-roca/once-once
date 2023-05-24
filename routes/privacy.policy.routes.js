const express = require('express');
const router = express.Router();

// Imports Legal terms controller
const privacyPolicyController = require('../controllers/privacy.policy.controller');

// Define route for Legal terms
router.get('/', privacyPolicyController.index);

// Exports the module
module.exports = router;