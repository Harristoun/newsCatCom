const News = require("../Models/News.model");

module.exports.newsController = {
  postNews: (req, res) => {
    News.create({
      header: req.body.header,
      text: req.body.text,
      category: req.body.category,
    }).then((data) => {
      res.json(data);
    });
  },
  deleteNews: (req, res) => {
    News.findByIdAndRemove(req.params.id).then((data) => {
      res.json(data);
    });
  },
  pathNews: (req, res) => {
    News.findByIdAndUpdate(req.params.id, {
      header: req.body.header,
      text: req.body.text,
      category: req.body.category,
    }).then((data) => {
      res.json(data);
    });
  },
  getSpecificNews: (req, res) => {
    News.findById(req, params.id).then((data) => {
      res.json(data);
    });
  },

  getAllNews: (req, res) => {
    News.find().then((data) => {
      res.json(data);
    });
  },
  getCatNews: (req, res) => {
    Categories.find({ category: req.params.id })
      .populate(category)
      .then((data) => {
        res.json(data);
      });
  },
};
