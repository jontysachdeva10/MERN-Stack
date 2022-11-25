"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ngoSchema = void 0;
// const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const ngoSchema = new mongoose_1.Schema({
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
    type: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
});
exports.ngoSchema = ngoSchema;
// module.exports = NGO = mongoose.model("ngo", ngoSchema);
