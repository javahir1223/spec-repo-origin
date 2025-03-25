const express = require('express');
const { 
  getDoctors, getDoctorById, getDoctorsForHomepage, getDoctorsForDoctorpage, 
  createDoctor, updateDoctor, deleteDoctor 
} = require('../controllers/doctorController');
const { verifyAdmin } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/get-all', getDoctors);
router.get('/get/:id', getDoctorById);
router.get('/get-homepage', getDoctorsForHomepage);
router.get('/get-doctorpage', getDoctorsForDoctorpage);
router.post('/create-doctor', createDoctor,);
router.put('/update-doctor/:id', updateDoctor);
router.delete('/delete-doctor/:id', deleteDoctor);

module.exports = router;
