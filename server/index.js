import express from "express";

const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/health",(req, res) => {
    res.json({
        success: true,
        message: "Server is running",
    })
})


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});