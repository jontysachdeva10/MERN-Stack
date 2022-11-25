var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURI');
const db = "mongodb+srv://jonty_sachdeva:jon@1234@cluster0.yj85i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectDB = () => __awaiter(this, void 0, void 0, function* () {
    try {
        yield mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Mongo DB connected..');
    }
    catch (error) {
        console.error(error.message);
        // Exit process with failure
        process.exit(1);
    }
});
module.exports = connectDB;
