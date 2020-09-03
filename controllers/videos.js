const { videos } = require("../dbinit");

const getAllVideos = async (req, res, next) => {
  try {
    const data = await videos.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllVideos,
};
