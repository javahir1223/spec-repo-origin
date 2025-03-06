const Doctor = require('../models/Doctor');

const getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};

const getDoctorById = async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  res.json(doctor);
};

const getDoctorsForHomepage = async (req, res) => {
  const doctors = await Doctor.find({ type: 'homepage' }, 'name profession photo');
  res.json(doctors);
};

const getDoctorsForDoctorpage = async (req, res) => {
  const doctors = await Doctor.find({ type: 'doctorpage' }, 'name profession photo description skills experience');
  res.json(doctors);
};

const createDoctor = async (req, res) => {
  const newDoctor = new Doctor(req.body);
  await newDoctor.save();
  res.status(201).json(newDoctor);
};

const updateDoctor = async (req, res) => {
  const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedDoctor);
};

const deleteDoctor = async (req, res) => {
  await Doctor.findByIdAndDelete(req.params.id);
  res.json({ message: 'Доктор удален' });
};

module.exports = { 
  getDoctors, getDoctorById, getDoctorsForHomepage, getDoctorsForDoctorpage, 
  createDoctor, updateDoctor, deleteDoctor 
};
