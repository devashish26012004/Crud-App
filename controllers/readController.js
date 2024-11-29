import StudentModel from "../models/StudentSchema.js";

const readController = async (req, res) => {
  try {
    let records = await StudentModel.find({});
    if(records){
      res.render("read.ejs",{records});
    }else{
      res.render("read.ejs");
    }

  } catch (error) {
    console.log(error.message);
  }
};

export { readController };
