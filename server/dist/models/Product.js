"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Numeral_1 = __importDefault(require("../datatypes/Numeral"));
const Text_1 = __importDefault(require("../datatypes/Text"));
const BaseModel_1 = __importDefault(require("./abstracts/BaseModel"));
class Product extends BaseModel_1.default {
    constructor(title, description, price) {
        super('products');
        this.title = new Text_1.default(title);
        this.description = new Text_1.default(description, { multiline: true });
        this.price = new Numeral_1.default(price, { noNegative: true });
    }
    title;
    description;
    price;
}
exports.default = Product;
new Product('Schoen', 'Schoen beschrijving', 129.95);
