const express = require('express')
const {girls} = require('./temp-data.js')
const Girl = require('./models/Girl')
const cors  = express('cors')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/assets',express.static(path.join(__dirname,'../assets')))
app.use(express.static(path.resolve(__dirname,'../dist'),{maxAge:'1y',etag:false}))

app.get('/api/hello',(req,res)=>{
	res.send('Hello World Folks')
})

app.get('/api/girls',async(req,res)=>{
	const girls = await Girl.findAll()
	res.json(girls)
})

app.get('/api/girls/:id',async(req,res)=>{
	const girl = await Girl.findByPk(req.params.id)
	res.json(girl)
})

app.post('/api/girls',async(req,res)=>{
	const newGirl = {
		name: req.body.name,
		pic: req.body.pic
	}
	const girl = await Girl.create(newGirl);
	console.log(girl)
	res.redirect('/api/girls')
})

app.put('/api/girls/:id',async(req,res)=>{
	const girl = await Girl.findByPk(req.params.id)
	if(girl){
		girl.name = req.body.name;
		girl.pic = req.body.pic;
		await girl.save()
		res.redirect('/api/girls')
	}
})

app.delete('/api/girls/:id',async(req,res)=>{
	const girl = await Girl.findByPk(req.params.id)
	if(girl) {
		girl.destroy()
		res.redirect('/api/girls')
	}
})

app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname,'../dist/index.html'))
})

const PORT = process.env.MYSQLPORT || 15708

app.listen(PORT,()=>console.log(`server is on ${PORT}`))