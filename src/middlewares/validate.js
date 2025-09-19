 export default (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        message: 'Validation error',
        details: error.details.map((d) => d.message)
      });
    }
    req.validatedBody = value; // можно использовать дальше
    next();
  };
};
