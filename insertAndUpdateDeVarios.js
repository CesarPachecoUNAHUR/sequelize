const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'  /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



class Cars extends Sequelize.Model {}
Cars.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING
}, { sequelize, modelName: 'users' });


//inserta registro y actualiza los registros que corresponda.

sequelize.sync()
  .then(() => Cars.create({
    firstName: 'Pedro',
    lastName: 'Picapiedra'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  })
  .then(() => User.update({ 
    firstName: "Jose"},{
    where:{
      lastName: 'Picapiedra'
    }
    }))
    .then(() => {
      console.log("Done");
    });