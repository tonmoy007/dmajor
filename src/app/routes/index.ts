import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as logger from 'morgan';
import * as methodOverride from 'method-override';
import * as timeout from 'connect-timeout';
import * as cors from 'cors';

export class App {
    protected app: express.Application;
    protected router:express.Router;
    constructor() {
        this.app = express();
        this.router=express.Router();
        this.setConfig();
    }
    setConfig() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(logger('dev'));
        this.app.use(timeout('5s'));
        this.app.use(methodOverride());
        this.app.use(cors());
    }
   
    getApp(){
        this.app.use('/',this.router);
        return this.app;
    }
}