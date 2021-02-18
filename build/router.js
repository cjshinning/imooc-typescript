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
    res.send("\n    <html>\n      <body>\n        <form method=\"post\" action=\"/getDate\">\n          <input type=\"password\" name=\"password\" />\n          <button>\u63D0\u4EA4</button>\n        </form>\n      </body>\n    </html>\n  ");
});
router.post('/getDate', function (req, res) {
    var password = req.body.password;
    if (req.body.password === '123') {
        var secret = 'x3b174jsx';
        var url = "http://www.dell-lee.com/typescript/demo.html?secret=" + secret;
        var analyzer = jennyAnalyzer_1.default.getInstance();
        new crawller_1.default(url, analyzer);
        res.send('getData Success!');
    }
    else {
        res.send(req.teacherName + " password Error!");
    }
});
exports.default = router;
