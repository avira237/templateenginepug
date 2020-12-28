const express =require('express')
const app=express()

const pug=require('pug')

app.set('view engine','pug')

app.get('/',(req,res)=>
{
    res.render('sample',{title:'Express pug',url:"http://www.tutorialspoint.com"})
})

app.listen(400)