import mongoose from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const userSchema = new mongoose.Schema({
    userId: Number,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createData: {
        type: Date,
        default: Date.now()
    },
    finalData: {
        type: Date
    }
   
});

userSchema.plugin(AutoIncrement, {inc_field: 'userId'});

export default mongoose.model("User", userSchema);