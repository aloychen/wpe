var express = require('express');
var router = express.Router();

var model = require("../model")

/* GET users listing. */
router.post('/add',function (req,res,next) {
    var data = {
        title:req.body.title,
        content:req.body.content,
        id:Date.now(),
        username:req.session.name
    }
    console.log("article add  data" ,data)
    model.connect(function (db) {
        db.collection('articles').insertOne(data,function (err,ret) {
            if(err){
                console.log('文章发布失败')
                res.redirect('/write')
            }else{
                console.log('文章发布成功')
                res.redirect('/')
            }
        })
    })
})

module.exports = router;
