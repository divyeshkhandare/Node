const isValid = (req, res, next) => {
  const { taskName, description, status } = req.body;
  if (!taskName || !description || !status) {
    return res.status(400).send("Invalid");
  } else {
    next();
  }
};

module.exports = isValid;
