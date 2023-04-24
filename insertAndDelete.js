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


sequelize.sync().then(() => {
  console.log('Model table created successfully!');
   
  class Cars extends Sequelize.Model {}
  Cars.init({
    firstName: Sequelize.STRING,
    lastName:Sequelize.STRING
  },{ sequelize, modelName: 'users' });

  const Model = Sequelize.Model;
  class User extends Model {}
  
  User.init({
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    modelName: 'user'
  })
  /* crea usuario y elimina todos los usarios con con lastName = Pepe */
  sequelize.sync()
    .then(() => Cars.create({
      firstName: 'Sosa',
      lastName: 'Pepe'
    }))
    .then(jane => {
      console.log(jane.toJSON());
    })
    .then(() => User.destroy({
      where: {
        lastName: 'Pepe'
      }}))
      .then(() => {
        console.log("Elimine Registro");
      })
  }).catch((error) => {
    console.error('Unable to create table : ', error);
}); 



  


 