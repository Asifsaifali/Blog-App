const express=require("express");
const app=express();
const mongoose=require("mongoose")
const authRoute=require("./routes/auth")
const userRoute=require("./routes/users")
const postRoute=require("./routes/posts")
const CategRoute=require("./routes/Categories")
const multer=require("multer");

const dotenv=require("dotenv")

dotenv.config();
app.use(express.json())

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(console.log("Connected to mongodb")).catch((err)=>console.log(err))


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images");
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name)
    },
});

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json({message:"File has uploaded"})
})

       
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",CategRoute);



app.listen(8000,()=>{
    console.log("Server is Running")
});

