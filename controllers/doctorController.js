const Doctor = require('../models/Doctor');

const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении списка докторов', error });
  }
};

const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Доктор не найден' });
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении данных доктора', error });
  }
};

const getDoctorsForHomepage = async (req, res) => {
  try {
    const doctors = await Doctor.find({ type: 'homepage' }, 'name profession photo');
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении данных для главной страницы', error });
  }
};

const getDoctorsForDoctorpage = async (req, res) => {
  try {
    const doctors = await Doctor.find({ type: 'doctorpage' }, 'name profession photo description skills experience');
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении данных для страницы докторов', error });
  }
};

const createDoctor = async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(400).json({ message: 'Ошибка при создании доктора', error });
  }
};

const updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDoctor) return res.status(404).json({ message: 'Доктор не найден' });
    res.json(updatedDoctor);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при обновлении данных доктора', error });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Доктор не найден' });
    res.json({ message: 'Доктор удален' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при удалении доктора', error });
  }
};

module.exports = { 
  getDoctors, getDoctorById, getDoctorsForHomepage, getDoctorsForDoctorpage, 
  createDoctor, updateDoctor, deleteDoctor 
};
