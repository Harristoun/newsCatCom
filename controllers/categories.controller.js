const Categories = require('../Models/Categories.model')

module.exports.categoriesController  ={
postCategories: (req, res) =>{
    Categories.create({
        name: req.body.name
    }).then((data)=>{
        res.json(data)
    })
},

deleteCategories: (req,res)=>{
    Categories.findByIdAndRemove(req.params.id).then((data)=>{
        res.json(data)
    })
},
pathCategories: (req,res)=>{
    Categories.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    }).then((data)=>{
        res.json(data)
    })
},
getCategories: (res,res)=>{
    Categories.find().then((data)=>{
        res.json(data)
    })
},


}