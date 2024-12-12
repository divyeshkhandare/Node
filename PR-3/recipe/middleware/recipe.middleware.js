const validation = (req, res, next) => {
  const {
    name,
    description,
    preparationTime,
    cookingTime,
    imageUrl,
    country,
    veg,
  } = req.body;

  if (
    !name ||
    !description ||
    !preparationTime ||
    !cookingTime ||
    !imageUrl ||
    !country ||
    !veg
  ) {
    return res.status(400).send("All fields are required.");
  }
  next();
};

module.exports = validation;
