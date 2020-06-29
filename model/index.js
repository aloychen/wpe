var mongoClient = require('mongodb').MongoClient
const Sdk = require('@tencent/wuji-sdk');
var url = 'mongodb://localhost:27017'
var dbName = 'prol'

//数据库连接方法
function connect(callback) {
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log('数据库链接错误', err)
        } else {
            var db = client.db(dbName)
            callback && callback(db)
            client.close()
        }
    })
}

module.exports= {
    connect
}

