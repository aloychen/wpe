var express = require('express');
var router = express.Router();
var model = require("../model")

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

//注册接口
router.post('/regist', function (req, res, next) {
    var data = {
        name: req.body.name,
        pwd: req.body.pwd,
        pwd2: req.body.pwd2,
    }
    //数据校验

    // console.log(data)
    model.connect(function (db) {
        db.collection('users').insertOne(data,function (err,ret) {
            if(err){
                console.log("注册失败")
                res.redirect('/regist')
            }else{
                // res.send(data)
                res.redirect('/login')
            }
        })
    })

})

//登录页面
router.post('/login', function (req, res, next) {
    var data = {
        name: req.body.name,
        pwd: req.body.pwd,
    }
    model.connect(function (db) {
        db.collection('users').find(data).toArray(function (err,docs) {
            if(err){
                console.log("登录失败")
                res.redirect('/login')
            }else{
                // res.send(data)
                if(docs.length>0){
                    //登录成功,进行session存储
                    console.log("req.session",req.session)
                    req.session.name=data.name
                    res.redirect('/')
                }else{
                    res.redirect('/login')
                }
            }
        })
    })

})

//退出登录
router.get('/logout',function (req,res,next) {
    req.session.name=null
    res.redirect('/login')
})

module.exports = router;
