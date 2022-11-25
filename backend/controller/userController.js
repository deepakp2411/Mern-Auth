import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// registration

export const userRegistration = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  const user = await UserModel.findOne({ email: email });
  if (user) {
    res.send({ status: "failed", message: "Email already exists" });
  } else {
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(password, salt);
          const doc = new UserModel({
            name: name,
            email: email,
            password: hashPassword,
            confirmPassword: hashPassword,
          });

          await doc.save();
          const savedUser = await UserModel.findOne({ email: email });
          // token
          const token = jwt.sign(
            { userID: savedUser._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "5d" }
          );
          res
            .status(201)
            .send({ status: "success", message: "Registration successfully","token":token });
        } catch (error) {
          console.log(error);
          res.send({ status: "failed", message: "unable to register" });
        }
      } else {
        res.send({
          status: "failed",
          message: "Password and confirm password doesnt match",
        });
      }
    } else {
      res.send({ status: "failed", message: "All fields are required" });
    }
  }
};

// userLogin

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      const user = await UserModel.findOne({ email: email });
      if (user !== null) {
        const isMatch = await bcrypt.compare(password, user.password);

        if (user.email === email && isMatch) {
            // token
            const token  = jwt.sign({userID: user._id},process.env.JWT_SECRET_KEY, {expiresIn:'5d'})
          res.send({ status: "success", message: "Login Success","token":token });
        } else {
          res.send({
            status: "failed",
            message: "Email or Passwor is not valid",
          });
        }
      } else {
        res.send({ status: "failed", message: "You are not Registered user" });
      }
    } else {
      res.send({ status: "failed", message: "All fields are required" });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "failed", message: "Unable to Login" });
  }
};


// change password

export const changePassword =  async (req, res) => {
    const { password, confirmPassword } = req.body
    if(password && confirmPassword) {
        if(password !== confirmPassword) {
      res.send({ status: "failed", message: "New Password and Confirm Password Doesnt match" });


        }else{
            const salt = await bcrypt.genSalt(10)
            const newHashPassword = await bcrypt.hash(password, salt)
            await UserModel.findByIdAndUpdate(req.user._id, {$set: {password: newHashPassword}})
            res.send({"status":"success","message":"Password Changed Successfully"})

        }

    }else{
      res.send({ status: "failed", message: "All fields are required" });
        
    }
}


// get all logged user

export const loggedUser =  async (req, res) => {

    res.send({"user":req.user})
    

}