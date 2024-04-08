import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

import Mobile from "./models/Mobile.js";
import Laptop from "./models/Laptop.js";
import Tablet from "./models/Tablet.js";
import Contact from "./models/Contact.js";
import Review from "./models/Review.js";
import Order from "./models/Order.js";

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

// CONTACT

app.post("/contact",async(req, res)=>{
    const {name, email, message} = req.body;

    if(!name){
        return res.json({
            success: false,
            message: "Name is required",
            data: null
        })
    }

    if(!message){
        return res.json({
            success: false,
            message: "Message is required",
            data: null
        })
    }

    const newContact = await Contact.create({
        "name": name,
        "email": email,
        "message": message
    })

    res.json({
        success: true,
        message: "Contact added successfully",
        data: newContact
    })
})
app.get("/contact",async(req, res)=>{

    const contact = await Contact.find();

    res.json({
        success: true,
        message: "Contact featched successfully",
        data: contact
    })
})
app.delete("/contact/:id", async(req, res)=>{
    const {id} = req.params;

    await Contact.deleteOne({ _id: id })

    res.json({
        success: true,
        message: "Contact deleted successfully",
        data: null
    })
})

// REVIEW
app.post("/review",async(req, res)=>{
    const {name, message} = req.body;

    if(!name){
        return res.json({
            success: false,
            message: "Name is required",
            data: null
        })
    }

    if(!message){
        return res.json({
            success: false,
            message: "Review is required",
            data: null
        })
    }

    const newReview = await Review.create({
        "name": name,
        "message": message
    })

    res.json({
        success: true,
        message: "Review added successfully",
        data: newReview
    })
})
app.get("/review",async(req, res)=>{

    const review = await Review.find();

    res.json({
        success: true,
        message: "Review featched successfully",
        data: review
    })
})
app.delete("/review/:id", async(req, res)=>{
    const {id} = req.params;

    await Review.deleteOne({ _id: id })

    res.json({
        success: true,
        message: "Review deleted successfully",
        data: null
    })
})

// ORDER
app.post("/order",async(req, res)=>{
    const {url, title, content, price, name, imgurl, address, city, state, code, mob, email, pass, payment, type} = req.body;

    if(!name){
        return res.json({
            success: false,
            message: "Name is required",
            data: null
        })
    }

    if(!address){
        return res.json({
            success: false,
            message: "Address is required",
            data: null
        })
    }

    if(!mob){
        return res.json({
            success: false,
            message: "Mob No is required",
            data: null
        })
    }

    if(!email){
        return res.json({
            success: false,
            message: "Email is required",
            data: null
        })
    }

    if(!pass){
        return res.json({
            success: false,
            message: "Password is required",
            data: null
        })
    }

    const newOrder = await Order.create({
        url, title, content, price, name, imgurl, address, city, state, code, mob, email, pass, payment, type
    })

    res.json({
        success: true,
        message: "Order added successfully",
        data: newOrder
    })
})
app.get("/order",async(req, res)=>{

    const order = await Order.find();

    res.json({
        success: true,
        message: "Order featched successfully",
        data: order
    })
})
app.put("/order/:id", async(req, res)=>{
    const {id} = req.params;

    const {url, title, content, price, name, imgurl, address, city, state, code, mob, email, pass, payment, type} = req.body;

    await Order.updateOne({ _id: id }, {$set:{
        url, title, content, price, name, imgurl, address, city, state, code, mob, email, pass, payment, type
    }})

    res.json({
        success: true,
        message: "Order details updated successfully",
        data: null
    })
})
app.delete("/order/:id", async(req, res)=>{
    const {id} = req.params;

    await Order.deleteOne({ _id: id })

    res.json({
        success: true,
        message: "Order deleted successfully",
        data: null
    })
})

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});