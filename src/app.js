const express = require('express');
const app = express()
const hbs = require('hbs');
const weather = require('../functions/weather.js');

//get directory
const path = require('path');
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
//const partialPath = path.join(__dirname, '../templates/partials')

//static path inside express
app.use(express.static(publicPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
//hbs.registerPartials(partialPath)

app.get('', (req, res)=>{
   res.render('index', {
       title: "Weather App"
   })
})

app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/weather', (req, res)=>{
    if(!req.query.location){
        return res.send({
            error:'Location Required'
        })
    }
    
    weather(req.query.location, (error, data)=>{
        if(error!== undefined){
            return res.send({
                error
            })
        }
        else{
            return res.send({
                location: data.location.name,
                temp: data.current.temperature,
                icon: data.current.weather_icons[0],
                desc: data.current.weather_descriptions[0]
            })
        }
    })
})
//server 
app.listen(3000, ()=>{
    console.log("Server is up")
})
