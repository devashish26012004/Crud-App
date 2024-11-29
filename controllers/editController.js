import StudentModel from "../models/StudentSchema.js";

const editController = async (req, res) => {
  try {
    let id = req.params.id;
    const record = await StudentModel.findById(id);
    res.render("edit.ejs", { record });
  } catch (err) {
    console.log(err);
  }
};

const editPostreq = async (req, res) => {
  try {
    let id = req.params.id;
    await StudentModel.findByIdAndUpdate(id, req.body);
    res.redirect("/read");
  } catch (err) {
    console.log(err);
  }
};

export { editController, editPostreq };
