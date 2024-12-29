import express from 'express';
import { connect } from 'http2';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

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
    console.log('server is running on port 3000');
});