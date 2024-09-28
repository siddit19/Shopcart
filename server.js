import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan'
import authRoutes from './routes/authRoutes.js'
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from 'cors'

dotenv.config()
connectDB();
const app=express()

// app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

//midlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/category',categoryRoutes)
app.use("/api/v1/product", productRoutes);



app.get('/',(req,res)=>{
    res.send({
        message:'Welcome to ecommerce app'
    })
})

const PORT=process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})