require('dotenv').config();
const { Sequelize } = require('sequelize');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connected successfully!');
    await sequelize.sync();  
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();


app.get('/', (req, res) => res.send('Backend running with PostgreSQL!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
