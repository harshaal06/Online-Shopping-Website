import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

import Mobile from "./models/Mobile.js";
import Laptop from "./models/Laptop.js";
import Tablet from "./models/Tablet.js";

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async()=>{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Database connected");
}
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/health",(req, res) => {
    res.json({
        success: true,
        message: "Server is running",
        data: null
    })
})

// MOBILE

app.post("/mobile",async(req, res)=>{
    const {url, title, content, price} = req.body;

    if(!url){
        return res.json({
            success: false,
            message: "url is required",
            data: null
        })
    }

    if(!title){
        return res.json({
            success: false,
            message: "Title is required",
            data: null
        })
    }

    if(!content){
        return res.json({
            success: false,
            message: "Content is required",
            data: null
        })
    }

    if(!price){
        return res.json({
            success: false,
            message: "Price is required",
            data: null
        })
    }

    const newMobile = await Mobile.create({
        "url": url,
        "title": title,
        "content": content,
        "price": price
    })

    res.json({
        success: true,
        message: "Mobile details added successfully",
        data: newMobile
    })
})
app.get("/mobile",async(req, res)=>{

    const mobile = await Mobile.find();

    res.json({
        success: true,
        message: "Mobile details featched successfully",
        data: mobile
    })
})
app.get("/mobile/:id", async(req, res)=>{
    const {id} = req.params;

    const mobile = await Mobile.findById(id);

    res.json({
        success: true,
        message: "Mobile details featched successfully",
        data: mobile
    })
})
app.put("/mobile/:id", async(req, res)=>{
    const {id} = req.params;

    const {url, title, content, price} = req.body;

    await Mobile.updateOne({ _id: id }, {$set:{
        url: url,
        title: title,
        content: content,
        price: price
    }})

    res.json({
        success: true,
        message: "Mobile details updated successfully",
        data: null
    })
})
app.delete("/mobile/:id", async(req, res)=>{
    const {id} = req.params;

    await Mobile.deleteOne({ _id: id })

    res.json({
        success: true,
        message: "Mobile details deleted successfully",
        data: null
    })
})

// LAPTOP

app.post("/laptop",async(req, res)=>{
    const {url, title, content, price} = req.body;

    if(!url){
        return res.json({
            success: false,
            message: "url is required",
            data: null
        })
    }

    if(!title){
        return res.json({
            success: false,
            message: "Title is required",
            data: null
        })
    }

    if(!content){
        return res.json({
            success: false,
            message: "Content is required",
            data: null
        })
    }

    if(!price){
        return res.json({
            success: false,
            message: "Price is required",
            data: null
        })
    }

    const newLaptop = await Laptop.create({
        "url": url,
        "title": title,
        "content": content,
        "price": price
    })

    res.json({
        success: true,
        message: "Laptop details added successfully",
        data: newLaptop
    })
})
app.get("/laptop",async(req, res)=>{

    const laptop = await Laptop.find();

    res.json({
        success: true,
        message: "Laptop details featched successfully",
        data: laptop
    })
})
app.get("/laptop/:id", async(req, res)=>{
    const {id} = req.params;

    const laptop = await Laptop.findById(id);

    res.json({
        success: true,
        message: "Laptop details featched successfully",
        data: laptop
    })
})
app.put("/laptop/:id", async(req, res)=>{
    const {id} = req.params;

    const {url, title, content, price} = req.body;

    await Laptop.updateOne({ _id: id }, {$set:{
        url: url,
        title: title,
        content: content,
        price: price
    }})

    res.json({
        success: true,
        message: "Laptop details updated successfully",
        data: null
    })
})
app.delete("/laptop/:id", async(req, res)=>{
    const {id} = req.params;

    await Laptop.deleteOne({ _id: id })

    res.json({
        success: true,
        message: "Laptop details deleted successfully",
        data: null
    })
})

// TABLETS

app.post("/tablet",async(req, res)=>{
    const {url, title, content, price} = req.body;

    if(!url){
        return res.json({
            success: false,
            message: "url is required",
            data: null
        })
    }

    if(!title){
        return res.json({
            success: false,
            message: "Title is required",
            data: null
        })
    }

    if(!content){
        return res.json({
            success: false,
            message: "Content is required",
            data: null
        })
    }

    if(!price){
        return res.json({
            success: false,
            message: "Price is required",
            data: null
        })
    }

    const newTablet = await Tablet.create({
        "url": url,
        "title": title,
        "content": content,
        "price": price
    })

    res.json({
        success: true,
        message: "Tablet details added successfully",
        data: newTablet
    })
})
app.get("/tablet",async(req, res)=>{

    const tablet = await Tablet.find();

    res.json({
        success: true,
        message: "Tablet details featched successfully",
        data: tablet
    })
})
app.get("/tablet/:id", async(req, res)=>{
    const {id} = req.params;

    const tablet = await Tablet.findById(id);

    res.json({
        success: true,
        message: "Tablet details featched successfully",
        data: tablet
    })
})
app.put("/tablet/:id", async(req, res)=>{
    const {id} = req.params;

    const {url, title, content, price} = req.body;

    await Tablet.updateOne({ _id: id }, {$set:{
        url: url,
        title: title,
        content: content,
        price: price
    }})

    res.json({
        success: true,
        message: "Tablet details updated successfully",
        data: null
    })
})
app.delete("/tablet/:id", async(req, res)=>{
    const {id} = req.params;

    await Tablet.deleteOne({ _id: id })

    res.json({
        success: true,
        message: "Tablet details deleted successfully",
        data: null
    })
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});