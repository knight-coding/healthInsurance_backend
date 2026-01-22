import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true,
    //   select: false // never return by default
    },

    // role: {
    //   type: String,
    //   enum: ["admin", "agent"],
    //   required: true
    // },
  },
  {
    timestamps: true
  }
);


const Employee = mongoose.model("employee", employeeSchema);

export default Employee;
