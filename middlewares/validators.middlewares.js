const { body, validationResult } = require("express-validator");

// Utils
const { AppError } = require("../utils/appError.util");

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // [{ ..., msg }] -> [msg, msg, ...] -> 'msg. msg. msg. msg'
    const errorMessages = errors.array().map((err) => err.msg);

    const message = errorMessages.join(". ");

    return next(new AppError(message, 400));
  }

  next();
};

const createUserValidators = [

  body("name")
    .isString()
    .withMessage("name must be a string")
    .notEmpty()
    .withMessage("name cannot be empty")
    .isLength({ min: 3 })
    .withMessage("name must be at least 3 characters"),
  body("CC").notEmpty().withMessage("CC cannot be empty"),
  body("birthDate").notEmpty().withMessage("birthDate cannot be empty"),
  body("profession")
    .isString()
    .withMessage("profession must be a string")
    .notEmpty()
    .withMessage("profession cannot be empty"),
  body("phone").isNumeric().withMessage("phone Must provide a number"),
  checkValidations,
  body("gender").notEmpty().withMessage("gender cannot be empty"),
  checkValidations,
  body("city").notEmpty().withMessage("city cannot be empty"),
  checkValidations,
  body("state").notEmpty().withMessage("state cannot be empty"),
  checkValidations,
];

const createVehicleValidators = [
  body("type")
    .isString()
    .withMessage("type must be a string")
    .notEmpty()
    .withMessage("type cannot be empty"),
  body("brand")
    .isString()
    .withMessage("brand must be a string")
    .notEmpty()
    .withMessage("brand cannot be empty"),
  body("year").notEmpty().withMessage("year cannot be empty"),
];

module.exports = { createUserValidators,createVehicleValidators };
