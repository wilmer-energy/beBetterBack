// Models
const { User } = require('./user.model');
const { Vehicle } = require('./vehicle.model');

const initModels = () => {};
 // 1 User <----> 1 Vehicle
 User.hasOne(Vehicle, { foreignKey: "userId" });
 Vehicle.belongsTo(User);

module.exports = { initModels };
