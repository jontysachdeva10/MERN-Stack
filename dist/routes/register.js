"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const express_validator_1 = require("express-validator");
const user_1 = require("../controller/user/user");
const register_1 = require("../controller/register/register");
/**
 * @description ADD USER
 */
router.post("/users", [
    (0, express_validator_1.body)("name", "Name is required").notEmpty(),
    (0, express_validator_1.body)("address", "Address is required").notEmpty(),
    (0, express_validator_1.body)("city", "Please enter your City").notEmpty(),
    (0, express_validator_1.body)("state", "Please enter your State").notEmpty(),
    (0, express_validator_1.body)("email", "Please enter your valid Email").isEmail(),
    (0, express_validator_1.body)("phone", "Enter valid Phone No.").isLength({ min: 10, max: 10 }),
], register_1.registerUser);
router.get("/users", [], user_1.fetchAllUsers);
exports.default = router;
