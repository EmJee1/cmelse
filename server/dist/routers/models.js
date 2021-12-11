"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product_1 = __importDefault(require("../models/Product"));
const models = [Product_1.default];
const router = (0, express_1.Router)();
router.get('/', (req, res) => res.json({ msg: 'received' }));
exports.default = router;
