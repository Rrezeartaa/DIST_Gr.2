
{ idS, name, prindi, data, vendi, adresa, numri, gjinia, email, password} 

module.exports = (sequelize, Sequelize) => {
	const Student = sequelize.define('student', {	
	  id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },
	  idS: {
			type: Sequelize.STRING
	  },
	  name: {
		  type: Sequelize.STRING
  	},
	  prindi: {
			type: Sequelize.STRING
	  },
	  data: {
			type: Sequelize.DATE
    },
    vendi: {
        type: Sequelize.STRING
    },
    adresa: {
        type: Sequelize.STRING
    },
    numri: {
        type: Sequelize.STRING
    },
    gjinia: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    
	});
	
	return Customer;
}