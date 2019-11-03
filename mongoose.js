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
	pwd:String
})
var user = mongo.model("user",userHead)




let movieHeader = mongo.Schema({
	photo:String,
	title:String,
	category:Array,
	type:String,
	rank:Number,
	description:String,
	actor:Array,
	time:String
})
let movie = mongo.model("movie",movieHeader)

//var one = new movie({
//	photo:"img/movie.jpg",
//	title:"芳华",
//	category:["爱情","战争"],
//	type:"2D",
//	rank:9.2,
//	description:"本片讲述了上世纪七十到八十年代充满理想和激情的军队文工团，一群正值芳华的青春少年，经历着成长中的爱情萌发与充斥变数的人生命运。乐于助人、质朴善良的刘峰（黄轩 饰），和从农村来，屡遭文工团女兵歧视与排斥的何小萍（苗苗 饰），“意外”离开了浪漫安逸的文工团，卷入了残酷的战争，在战场上继续绽放着血染的芳华。他们感受着集体生活的痛与暖、故人的分别与重逢，还有时代变革之下，每个人的渺小脆弱和无力招架。而昔日的文工团战友萧穗子（钟楚曦 饰）、林丁丁（杨采钰 饰）、郝淑雯（李晓峰 饰）、陈灿（王天辰 饰）等人，在大时代的背景之下，每个人的命运大相径庭，拥有着出人意料的人生归宿……从来不需要想起，永远也不会忘记。",
//	actor:["黄轩","苗苗"],
//	time:"2017-12-15"
//})
//one.save()
//var one = new movie({
//	photo:"img/d1.jpg",
//	title:"侏罗纪世界",
//	category:["爱情","战争"],
//	type:"3D",
//	rank:9.2,
//	description:"本片讲述了上世纪七十到八十年代充满理想和激情的军队文工团，一群正值芳华的青春少年，经历着成长中的爱情萌发与充斥变数的人生命运。乐于助人、质朴善良的刘峰（黄轩 饰），和从农村来，屡遭文工团女兵歧视与排斥的何小萍（苗苗 饰），“意外”离开了浪漫安逸的文工团，卷入了残酷的战争，在战场上继续绽放着血染的芳华。他们感受着集体生活的痛与暖、故人的分别与重逢，还有时代变革之下，每个人的渺小脆弱和无力招架。而昔日的文工团战友萧穗子（钟楚曦 饰）、林丁丁（杨采钰 饰）、郝淑雯（李晓峰 饰）、陈灿（王天辰 饰）等人，在大时代的背景之下，每个人的命运大相径庭，拥有着出人意料的人生归宿……从来不需要想起，永远也不会忘记。",
//	actor:["黄轩","苗苗"],
//	time:"2014-12-15"
//})
//one.save()
//var one = new movie({
//	photo:"img/d3.jpg",
//	title:"明日世界",
//	category:["爱情","战争"],
//	type:"3D",
//	rank:8.8,
//	description:"本片讲述了上世纪七十到八十年代充满理想和激情的军队文工团，一群正值芳华的青春少年，经历着成长中的爱情萌发与充斥变数的人生命运。乐于助人、质朴善良的刘峰（黄轩 饰），和从农村来，屡遭文工团女兵歧视与排斥的何小萍（苗苗 饰），“意外”离开了浪漫安逸的文工团，卷入了残酷的战争，在战场上继续绽放着血染的芳华。他们感受着集体生活的痛与暖、故人的分别与重逢，还有时代变革之下，每个人的渺小脆弱和无力招架。而昔日的文工团战友萧穗子（钟楚曦 饰）、林丁丁（杨采钰 饰）、郝淑雯（李晓峰 饰）、陈灿（王天辰 饰）等人，在大时代的背景之下，每个人的命运大相径庭，拥有着出人意料的人生归宿……从来不需要想起，永远也不会忘记。",
//	actor:["黄轩","苗苗"],
//	time:"2017-12-15"
//})
//one.save()
//var one = new movie({
//	photo:"img/d2.jpg",
//	title:"末日崩塌",
//	category:["爱情","战争"],
//	type:"2D",
//	rank:9.2,
//	description:"本片讲述了上世纪七十到八十年代充满理想和激情的军队文工团，一群正值芳华的青春少年，经历着成长中的爱情萌发与充斥变数的人生命运。乐于助人、质朴善良的刘峰（黄轩 饰），和从农村来，屡遭文工团女兵歧视与排斥的何小萍（苗苗 饰），“意外”离开了浪漫安逸的文工团，卷入了残酷的战争，在战场上继续绽放着血染的芳华。他们感受着集体生活的痛与暖、故人的分别与重逢，还有时代变革之下，每个人的渺小脆弱和无力招架。而昔日的文工团战友萧穗子（钟楚曦 饰）、林丁丁（杨采钰 饰）、郝淑雯（李晓峰 饰）、陈灿（王天辰 饰）等人，在大时代的背景之下，每个人的命运大相径庭，拥有着出人意料的人生归宿……从来不需要想起，永远也不会忘记。",
//	actor:["黄轩","苗苗"],
//	time:"2017-12-15"
//})
//one.save()
let cinemaHeader = mongo.Schema({
	title:String,
	time:Date,
	price:Number,
	address:String,
	type:String,
	selected:Array,
	seat:Number
})
let cinema = mongo.model("cinema",cinemaHeader)
/*var one = new cinema({
	title:"芳华",
	time:"2019-06-25 09:00",
	price:45,
	address:"1号厅",
	type:"国语2D",
	selected:[[7,6],[7,7]],
	seat:120
})
one.save()
var one = new cinema({
	title:"芳华",
	time:"2019-06-25 15:30",
	price:45,
	address:"2号厅",
	type:"国语2D",
	selected:[[6,6][7,7]],
	seat:120
})
one.save()
var one = new cinema({
	title:"芳华",
	time:"2019-06-26 09:30",
	price:45,
	address:"3号厅",
	type:"国语2D",
	selected:[[6,6],[6,7],[7,6],[7,7]],
	seat:200
})
one.save()
var one = new cinema({
	title:"芳华",
	time:"2019-06-26 13:30",
	price:45,
	address:"4号厅",
	type:"国语2D",
	selected:[[6,6],[7,6],[7,7]],
	seat:120
})
one.save()
var one = new cinema({
	title:"芳华",
	time:"2019-06-27 09:30",
	price:45,
	address:"5号厅",
	type:"国语2D",
	selected:[[6,6],[6,7],[7,6],[7,7]],
	seat:120
})
one.save()
var one = new cinema({
	title:"芳华",
	time:"2019-06-27 17:30",
	price:45,
	address:"6号厅",
	type:"国语2D",
	selected:[[7,7]],
	seat:120
})
one.save()*/
var orderHeader = mongo.Schema({
	title:String,
	address:String,
	time:String,
	checked:Array,
	total:Number,
	user:String
})
var order = mongo.model("order",orderHeader)
module.exports = {user,movie,cinema,order}