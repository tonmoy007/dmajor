import * as express from 'express';
import { App } from './app/routes';
import UserRoutes from './app/routes/users';
class Server {
    private port: number;
    public app:express.Application;
    constructor() { 
        this.app=new App().getApp();
        this.routes();
    }
    config() { }
    language(){}
    routes() {
        this.app.use('/users',UserRoutes);
     }
}

/**
 * Export Stuff
 */
export default new Server().app;