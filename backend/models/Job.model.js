const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please, provide a company name"],
      maxlength: 50,
    },

    position: {
      type: String,
      required: [true, "Please, provide  position"],
      maxlength: 100,
    },

    staus: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "UserModel",
      required: [true, "Please, provide an user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
