"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickupSchema = void 0;
// const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const PickupSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    item: {
        type: String,
        required: true,
    },
    quantity: {
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
exports.PickupSchema = PickupSchema;
// module.exports = Pickup = mongoose.model("pickup", PickupSchema);
