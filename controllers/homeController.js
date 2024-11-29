import StudentModel from "../models/StudentSchema.js";

const homeController = (req,res)=>{ 
    res.render("home.ejs");
}

const createController = async (req,res)=>{ 
    const data = await StudentModel ({
        name: req.body.name,
        city: req.body.city,
        email: req.body.email,
        contact: req.body.contact,
    });
    if(data){
        data.save();
        console.log("data saved");
    }else{
        console.log("error in saving data");
    }
    res.render("home.ejs");
}

export {homeController,createController};
