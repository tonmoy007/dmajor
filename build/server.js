"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./app/routes");
var users_1 = require("./app/routes/users");
var Server = (function () {
    function Server() {
        this.app = new routes_1.App().getApp();
        this.routes();
    }
    Server.prototype.config = function () { };
    Server.prototype.language = function () { };
    Server.prototype.routes = function () {
        this.app.use('/users', users_1.default);
    };
    return Server;
}());
exports.default = new Server().app;
