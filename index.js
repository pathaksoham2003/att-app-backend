const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv");

const employeeRouter = require("./routes/employeeRoutes");
const adminRouter = require("./routes/adminRoutes")

dotenv.config();

const app = express();
const PORT = 8800 || process.env.PORT
app.use(cors());
app.use(express.json())
app.use("/employee",employeeRouter);
app.use("/admin",adminRouter);

app.listen(PORT,()=>{
    console.log({message:"Successfully started server"})
})
