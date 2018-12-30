import { Controller } from ".";
import {Router,Request,Response,NextFunction} from 'express';
class UserController extends Controller{
    constructor(){
        super();
    }
    get(req:Request,res:Response){
        res.json({msg:'hello world'});
    }
}
export default new UserController();