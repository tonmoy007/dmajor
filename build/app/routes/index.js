"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var methodOverride = require("method-override");
var timeout = require("connect-timeout");
var cors = require("cors");
var App = (function () {
    function App() {
        this.app = express();
        this.router = express.Router();
        this.setConfig();
    }
    App.prototype.setConfig = function () {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(logger('dev'));
        this.app.use(timeout('5s'));
        this.app.use(methodOverride());
        this.app.use(cors());
    };
    App.prototype.getApp = function () {
        this.app.use('/', this.router);
        return this.app;
    };
    return App;
}());
exports.App = App;
