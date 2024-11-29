import StudentModel from "../models/StudentSchema.js";

const deleteController = async (req,res)=>{
    try {
        const id = req.params.id;
        await StudentModel.findByIdAndDelete(id);
        res.redirect("/read");
    } catch (error) {
        console.log(error);
    }

}

export default deleteController;