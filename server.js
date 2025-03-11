require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerDocs = require('./swagger.js');

const doctorRoutes = require('./routes/doctorRoutes.js');
const productRoutes = require('./routes/shopProductsRoutes.js');
const blogRoutes = require('./routes/blogRoutes.js');
const authRoutes = require('./routes/authRoutes.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/doctors', doctorRoutes);
app.use('/products', productRoutes);
app.use('/blogs', blogRoutes);
app.use('/auth', authRoutes);

swaggerDocs(app);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
