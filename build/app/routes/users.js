"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./../controllers/user");
var _1 = require(".");
var UserRoutes = (function (_super) {
    __extends(UserRoutes, _super);
    function UserRoutes() {
        var _this = _super.call(this) || this;
        _this.setRoutes();
        return _this;
    }
    UserRoutes.prototype.setRoutes = function () {
        this.router.get('/', user_1.default.get);
    };
    UserRoutes.prototype.getRouter = function () {
        return this.getApp();
    };
    return UserRoutes;
}(_1.App));
var userRoutes = new UserRoutes();
exports.default = userRoutes.getRouter();
