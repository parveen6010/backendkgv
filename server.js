import { app } from "./app.js";
import Razorpay from "razorpay"; 
import { connectDB } from "./config/database.js";

connectDB();

if (!process.env.RAZORPAY_API_KEY || !process.env.RAZORPAY_APT_SECRET) {
  console.error("Please provide RAZORPAY_API_KEY and RAZORPAY_APT_SECRET in your environment variables.");
  process.exit(1);
}

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

app.listen(process.env.PORT, () =>
  console.log(`Server is working on ${process.env.PORT}`)
);











// const connectDB = require("./models/config");
// const dotenv = require("dotenv");
//  const User = require("./models/contact") 
// const cors = require("cors");
// // const User = require("./db/User");
// dotenv.config();
// connectDB();
// const app = express();
// app.use(express.json());
// app.use(cors()); 

// const Razorpay  = require("razorpay"); 

// export const instance = new Razorpay({
// key_id: process.env.RAZORPAY_API_KEY,
// key_secret: process.env.RAZORPAY_APT_SECRET,
// });

// // app.get("/",(res,resp) =>{
// //     resp.send("working...")
// // })

//  app.post("/register", async (req,resp)=>{
//     let user = new User(req.body);
//     let res = await user.save();
//     resp.send(res);
//  })

//  const PORT = process.env.PORT || 5000;

// app.listen(PORT); 