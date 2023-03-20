import user from "../models/studentschema.js";

export const createstudent = async (req, res) => {
    const data = new user({
        Name: req.body.Name,
        Course: req.body.Course,
        Contact: req.body.Contact,
        Email: req.body.Email
    });

    console.log(data.Name);
    await data.save();
    res.status(200).json(data)
};

export const getstudent = async (req, res) => {
    const getAll = await user.find();
    res.status(200).json(getAll)
    console.log("get the student data");
};


export const updatestudent = async (req, res) => {
    const update = await user.findByIdAndUpdate(
        { _id: req.body._id },
        {
            $set: {
                Name: req.body.Name,
                Course: req.body.Course,
                Contact: req.body.Contact,
                Email: req.body.Email,
            },

        },
        { new: true }

    );
    res.status(200).json(update);
    console.log("updated succesfully");

};

export const deletestudent = async (req, res) => {
    await user.findByIdAndDelete(req.params.id);
    console.log("deleted successfully");

};