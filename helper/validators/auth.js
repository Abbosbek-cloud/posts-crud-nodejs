const authValidators = {
  registerValidator(req, res, next) {
    // check if name exist and has enough length
    req.check("name", "Name is required").notEmpty();
    req.check("name", "Name must be between 4 to 30 characters").isLength({
      min: 4,
      max: 30,
    });

    // check if email is valid
    req
      .check("email", "Email must be between 3 to 32 characters")
      .matches(/.+\@.+\..+/)
      .withMessage("Email must contain @")
      .isLength({
        min: 3,
        max: 32,
      });

    // check if password exist and has enough length
    req.check("password", "Password is required").notEmpty();
    req
      .check("password", "Password must be at least 6 characters long")
      .isLength({
        min: 6,
      });

    // check for errors
    const errors = req.validationErrors();

    // returns first error if error occurs
    if (errors) {
      const firstError = errors.map((error) => error.msg)[0];
      return res.status(400).json({ error: firstError });
    }

    // proceed to next middleware
    next();
  },
  loginValidator(req, res, next) {
    // check if email is valid
    req
      .check("email", "Email must be between 3 to 32 characters")
      .matches(/.+\@.+\..+/)
      .withMessage("Email must contain @")
      .isLength({
        min: 3,
        max: 32,
      });

    // check if password exist and has enough length
    req.check("password", "Password is required").notEmpty();
    req
      .check("password", "Password must be at least 6 characters long")
      .isLength({
        min: 6,
      });

    // check for errors
    const errors = req.validationErrors();

    // returns first error if error occurs
    if (errors) {
      const firstError = errors.map((error) => error.msg)[0];
      return res.status(400).json({ error: firstError });
    }

    // proceed to next middleware
    next();
  },
};

module.exports = authValidators;
