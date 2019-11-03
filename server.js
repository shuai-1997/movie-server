let Koa=require("koa")
let {user,movie,cinema,order}=require("./mongoose.js")
let server=new Koa();
let cors=require("koa2-cors")
let static1=require("koa-static")

server.use(cors())
server.use(static1("./src"))

let Router=require("koa-router")
let router=new Router()
let body=require("koa-body")
server.use(body())
//验证
router.post("/verify" ,async (ctx,next)=>{
	let reg=ctx.request.body
	console.log(ctx.request.body)
	let res= await user.find({name:reg.name})
	if (res.length==0){
		let one =new user(reg) 
		await one.save() 
		console.log("succeed")
		ctx.body="succeed"
	}else{
		console.log("nameRepeat")
	 	ctx.body="nameRepeat"	
	}
})
//注册
router.post("/reg",async (ctx,next)=>{
		let reg=ctx.request.body
		let one =new user(reg) 
		await one.save() 
		console.log("succeed")
		ctx.body="succeed"
	
})
//登录
router.post("/login",async (ctx,next)=>{
	let reg=ctx.request.body
	console.log(reg)
	let res= await user.find({name:reg.name,pwd:reg.pwd})
	console.log(res)
		if(res.length==0){
			ctx.body="defeated"
		}else{
			ctx.body="succeed"
		}
})
//返回影片信息
router.get("/movie",async (ctx,next)=>{
	if(ctx.query.id){
		ctx.body= await movie.findOne({_id:ctx.query.id})
	}else{
		ctx.body= await movie.find()	
	}
})
//影院场次
router.get("/cinema",async (ctx,next)=>{
	
	if(ctx.query.id){
		ctx.body= await cinema.findOne({_id:ctx.query.id})
	}
	if (ctx.query.title) {
		ctx.body= await cinema.find({title:ctx.query.title}).sort({time: 1})	
	}

})
//提交座次
router.post("/seats",async (ctx,next)=>{
	let flag=await cinema.updateOne({_id:ctx.request.body.id},{"selected":ctx.request.body.seat})
	let one= new order(ctx.request.body.data)
	await one.save() 
	console.log(one)
	ctx.body="succeed"
})
//订单列表
router.get("/order" ,async (ctx,next)=>{
	console.log(ctx.query.user)
	console.log(await order.find({user:ctx.query.user}))
	ctx.body= await order.find({user:ctx.query.user})
})
server.use(router.routes())
server.listen(9000,err=>{
	console.log("启动在9000")
})
