const Comments = require("../Models/Commenst.model");

module.exports.commentsController = {
  postCommentsByNews: (req, res) => {
    Comments.create({
   commentsName: req.params.id,
   textComment: req.params.id,
      newsId: req.params.id
    })

  },
  deleteComments: (req,res)=>{
      Comments.findByIdAndRemove().then()
  },
  getCommentsNews: (req,res)=>{
      Comments.create({
        commentsName: req.params.id,
        textComment: req.params.id,
           newsId: req.params.id
      })
  },

};
