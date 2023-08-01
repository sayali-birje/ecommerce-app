import  express  from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoute.js'
import cors from 'cors'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import path from 'path'
//configure
dotenv.config()

//databse
connectDB();

//rest obj
const app=express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'./client/build')))


//routes
app.use('/auth',authRoutes)
app.use('/category',categoryRoutes)
app.use('/product',productRoutes)

//rest api
// app.get('/',(req,res)=>{
//    res.send(
//    '<h1>Welcome to ecommerce app</h1>'
//    )
// })
app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

//port
const PORT = process.env.PORT || 8080;

//run
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`.bgCyan.white)
})