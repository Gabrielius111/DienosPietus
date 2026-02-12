const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./configuration/db.js");
const port = process.env.PORT || 8080;
const userRouter = require("./routes/userRoutes.js");
const categoryRouter = require("./routes/categoryRoutes.js");
const dishRouter = require("./routes/dishRoutes.js");

const app = express();
app.use(express.json());


connectDB();

// routes
app.use("/users", userRouter); // POST, localhost:8000/user/register
app.use("/categories", categoryRouter); // POST, localhost:8000/categories
app.use("/dishes", dishRouter); // POST localhost:8000/dishes
////
app.listen(port, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


///// pass: IVEAqkv2cQC1HjPo
///// cluster: mongodb+srv://bereisagb_db_user:<db_password>@dienospietus.cneymfk.mongodb.net/?appName=DienosPietus