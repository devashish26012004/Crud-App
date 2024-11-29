import express from "express";
import router from "./routes/router.js"
import path from "path";
import main from "./connectDB/connect.js";

const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(process.cwd(),"public")));

app.set("view engine, ejs");

//DB Connection
main();

//routes
app.use("/",router);

app.listen(PORT,()=>{
    console.log("listening on port 8080")
});