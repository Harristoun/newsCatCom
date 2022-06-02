const mongoose = require('mongoose')
const CategorySchema = mongoose.Schema({
    name: String
})
const Categories = mongoose.model('Categories', CategorySchema)
module.exports = Categories
 