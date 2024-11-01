// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
// const doctorRoutes = require('./routes/doctorRoutes');
// const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
// app.use('/api/doctor', doctorRoutes);
// app.use('/api', authRoutes);

// Database Sync and Server Start
sequelize.sync().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  });
}).catch((error) => {
  console.error('Database sync failed:', error);
});
