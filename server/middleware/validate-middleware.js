const validate = (schemas) => async (req, res, next) => {
  try {
    const parseBody = await schemas.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 422;
    const message = "fill the input properly";
    let extraDetails = "No additional details available"; // Default message

    if (
      err &&
      err.errors &&
      Array.isArray(err.errors) &&
      err.errors.length > 0
    ) {
      extraDetails = err.errors[0].message;
    }
    // console.log(message);
    // res.status(400).json({ msg: message });
    const error = {
      status,
      message,
      extraDetails,
    };

    console.log(error);

    next(error);
  }
};

module.exports = validate;
