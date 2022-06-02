const mongoose = require('mongoose')
const CommentSchema = mongoose.Schema({

commentsName: String,
textComment: String,
newsId:{
    ref: "News",
    typeof: mongoose.SchemaTypes.ObjectId
}
})
const Comments = mongoose.model('Comments', CommentSchema)
module.exports = Comments