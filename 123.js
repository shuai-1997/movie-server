var mongo = require("mongoose")
mongo.connect("mongodb://127.0.0.1/xiaolai",{ useNewUrlParser: true })
mongo.connection.on("connected",err=>{
	console.log("数据库连接成功")
})
mongo.connection.on("error",err=>{
	console.log("数据库连接失败")
})
var userHead = mongo.Schema({
	name:String,
	pwd:String,
	time:Date
//	time:{
//      type: Date,
//      default: Date.now
//  }
})
var user = mongo.model("user",userHead)
var one = new user({
	name:"帅",
	pwd:"123",
	time:"2019-06-24 09:00"
})
one.save()