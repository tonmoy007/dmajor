import { Router } from "express";
import UserController from './../controllers/user';
import { App } from ".";
import * as express from 'express';
class UserRoutes extends App {
    constructor() {
        super();
        this.setRoutes();
    }
    setRoutes() {
        this.router.get('/', UserController.get);
    }
    getRouter() {
        return this.getApp();
    }
}
const userRoutes = new UserRoutes();
export default userRoutes.getRouter();