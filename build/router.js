"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crawller_1 = __importDefault(require("./crawller"));
var jennyAnalyzer_1 = __importDefault(require("./jennyAnalyzer"));
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send('hello world !');
});
router.get('/getDate', function (req, res) {
    var secret = 'x3b174jsx';
    var url = "http://www.dell-lee.com/typescript/demo.html?secret=" + secret;
    var analyzer = jennyAnalyzer_1.default.getInstance();
    new crawller_1.default(url, analyzer);
    res.send('getData Success!');
});
exports.default = router;
