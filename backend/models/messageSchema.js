import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Требуется имя!"],
        minLength:[3, "Name must contain at least 3 character!"],
    },
    email:{
        type: String,
        required: [true, "Требуется email!"],
        validate: [validator.isEmail, "Please provide valid email!"]
    },
    subject:{
        type: String,
        required: [true, "Требуется тема!"],
        minLength:[5, "Sybject must contain at least 5 character!"],
    },
    message:{
        type: String,
        required: [true, "Требуется сообщение!"],
        minLength:[10, "Message must contain at least 10 character!"],
    },
    
});

export const Message = mongoose.model("Message", messageSchema);