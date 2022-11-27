import mongoose from "mongoose";

interface Donate {
  name: string;
  amount: string;
  upi: string;
  location: string;
  phone: string;
  email: string;
  date: Date;
}

const DonateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  upi: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Donate = mongoose.model("donate", DonateSchema);

export { Donate };
