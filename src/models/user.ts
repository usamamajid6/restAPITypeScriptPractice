import { Schema, model } from "mongoose";

const UserSchema: Schema = new Schema(
  {
    _id: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
    phone_number: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("User", UserSchema);
