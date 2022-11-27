"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const { validationResult } = require("express-validator");
// Import User model
// const User = require("../../models/User");
const User_1 = require("../../models/User");
/**
 * @description ADD USER
 */
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, address, city, state, email, phone } = req.body;
    try {
        // check if user exists
        let user = yield User_1.User.findOne({ phone });
        if (user) {
            return res.status(400).json({ errors: [{ msg: "User already exist." }] });
        }
        // creating a user instance
        user = new User_1.User({
            name,
            address,
            city,
            state,
            email,
            phone,
        });
        yield user.save();
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.registerUser = registerUser;
