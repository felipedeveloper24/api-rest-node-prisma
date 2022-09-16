const express = require("express");
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(express.json())

app.listen(3000,()=>{
    console.log("El servidor está corriendo");
});

app.get("/",(req,res)=>{
    res.send("Hola mundo");
});

//Crear un registro
app.post("/post",async(req,res)=>{
    const {title,content} = req.body
    const result = await prisma.post.create({
        data :{
            title,content
        }
    });
    res.json(result);
});

//Mostrar todos los registros

app.get("/posts",async(req,res)=>{
    const result = await prisma.post.findMany()
    res.json(result);
});