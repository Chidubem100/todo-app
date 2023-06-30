module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      done: {
        type: Sequelize.BOOLEAN
      },
    
    });
    return Tutorial;
  
};
  