import express from 'express';
import { connect } from 'http2';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();

const app = express();
app.use(express.json());

main()
.then(()=>{
    console.log("connected successfuly");
})
.catch((err) =>{
     console.log(err)
    }
);

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mern-blog');
}

app.listen(3000 , ()=>{
    console.log('server is running on port 3000' );
});

app.use('/api/user' , userRoutes);
app.use('/api/auth', authRoutes);