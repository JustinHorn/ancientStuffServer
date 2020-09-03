const { stuff } = require("../dbinit");

const getAllStuff = async (req, res, next) => {
  try {
    const data = await stuff.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

const getStuff = async (req, res, next) => {
  const { type } = req.params;
  try {
    const data = await stuff.findAll({
      where: {
        type: type,
      },
    });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllStuff,
  getStuff,
};
