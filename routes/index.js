var express = require('express');
var router = express.Router();
var model = require("../model")
var moment = require("moment")

/* GET home page. */
router.get('/', function (req, res, next) {
    var name = req.session.name
    model.connect(function (db) {
        db.collection('articles').find().toArray(function (err, docs) {
            // console.log('文章列表', docs)
            docs.map(function (ele, index) {
                ele['time'] = moment(ele.id).format('YYYY-MM-DD HH:mm:ss')
            })
            console.log('docs    ',docs)
            res.render('index', {
                title: 'Express',
                name: name,
                list: docs,
            });
        })
    })

});

//渲染注册页
router.get('/index/:title', function (req, res, next) {
    // let reqObj = req
    console.log('haha', req.params)
    res.render('index', {
        title: '首页'
    })
})

//渲染注册页
router.get('/layout', function (req, res, next) {
    res.render('layout', {})
})

//渲染注册页
router.get('/regist', function (req, res, next) {
    res.render('regist', {
        title: '注册页'
    })
})

//渲染登录页
router.get('/login', function (req, res, next) {
    res.render('login', {
        title: '登录页'
    })
})

//渲染写文章页面
router.get('/write', function (req, res, next) {
    var name = req.session.name
    console.log("写文章 name ", name)
    res.render('write', {
        title: '写文章',
        name: name
    })
})
module.exports = router;
