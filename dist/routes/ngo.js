"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const express_validator_1 = require("express-validator");
/**
 * @description ADD NGO
 */
const ngo_1 = require("../controller/ngo/ngo");
router.post("/", [
    (0, express_validator_1.body)("name", "Name is required").notEmpty(),
    (0, express_validator_1.body)("address", "Address is required").notEmpty(),
    (0, express_validator_1.body)("city", "City is required").notEmpty(),
    (0, express_validator_1.body)("type", "Type is required").notEmpty(),
    (0, express_validator_1.body)("email", "Email is required").isEmail(),
    (0, express_validator_1.body)("phone", "Enter valid Phone No.").isLength({ min: 10, max: 10 }),
], ngo_1.addNgo);
/**
 * @description GET NGO
 */
router.get("/:type", ngo_1.getNgo);
/**
 * @description PICKUP REGISTER
 */
const pickup_1 = require("../controller/ngo/pickup");
router.post("/pickup", [
    (0, express_validator_1.body)("name", "Name is required").notEmpty(),
    (0, express_validator_1.body)("address", "Address is required").notEmpty(),
    (0, express_validator_1.body)("city", "Please enter your City").notEmpty(),
    (0, express_validator_1.body)("state", "Please enter your State").notEmpty(),
    (0, express_validator_1.body)("email", "Please enter your valid Email").isEmail(),
    (0, express_validator_1.body)("phone", "Enter valid Phone No.").isLength({ min: 10, max: 10 }),
], pickup_1.pickupRegister);
/**
 * @description DONATE MONEY
 */
const donate_1 = require("../controller/ngo/donate");
router.post("/donate", [], donate_1.donateMoney);
exports.default = router;
