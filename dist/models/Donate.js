"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonateSchema = void 0;
// const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const DonateSchema = new mongoose_1.Schema({
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
exports.DonateSchema = DonateSchema;
// module.exports = Donate = mongoose.model("donate", DonateSchema);
