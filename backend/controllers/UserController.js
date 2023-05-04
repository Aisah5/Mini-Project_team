import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            attributes:['username','email','password'],
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) { 
        console.log(error.message);
    }
}


// export const getUserById = async(req, res) =>{
//     try {
//         const response = await User.findOne({
//             attributes:['username','email','password']
//         });
//         res.status(200).json(response);
//     } catch (error) { 
//         console.log(error.message);
//     }
// }



export const userLogin = async(req, res) =>{
    try {
        const response = await User.findOne({
            // attributes:['email','password'],
            where:{
                email: req.body.email,
                password: req.body.password
                // email: req.params.email, 
                // password: req.params.password
            }
        });
        res.status(200).json(response);
    } catch (error) { 
        console.log(error.message);
    }
}



export const createUsers = async(req, res) => {
    try {
        await User.create(req.body);
        res.status(201).json({msg: "Users Created"});
    } catch (error) {
        console.log(error.message);
    }
}


