const express = require('express');
const app= express();
app.use(express.json());
const port = process.env.PORT || 3000;

const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const cors= require("cors");
const corsOptions={
    origin: "http://localhost:8081"
}
app.use(cors(corsOptions));

app.get("/",async(req,res)=>{
    res.json({mesage:"Here"});
});

app.get(port,()=>{
    console.log(`Listering Port: ${port}`);
});

