const mongoose = require('mongoose');
const NewsSchema = mongoose.Schema({
    header: String,
    text: String,
    category: {
        ref: 'Categories',
        type: mongoose.SchemaTypes.ObjectId
    }
})
const News = mongoose.model('News', NewsSchema);
module.exports = News;