"use strict"
import { Request, Response, NextFunction } from "express";
import { User } from "../models/user";


// add user to the database
export function create(req: Request, res: Response, next:NextFunction) {
    try{
        let query:User = {
            firstName: String(req.get('fname')),
            lastName: String(req.get('lname')),
            email: String(req.get('email')),
            password: String(req.get('password'))
        };
        // execute util function for update
    } catch(err) {
        res.status(500)
        .send(err)
    }
}

export function updateEmail(req:Request, res: Response, next: NextFunction) {
    try{
        let newEmail: String = String(req.get('email'));
        
        // update email in db
    } catch (err) {
        res.status(500)
        .send(err)    
    }
}

export function updatePassword(req: Request, res: Response, next: NextFunction) {
    try {
        let newPassword: String = String(req.get('password'));

    } catch (err) {
        res.status(500)
        .send(err)    
    }
}

export function deleteUser(req: Request, res: Response, next: NextFunction) {
    try{
        let query:User = {
            firstName: String(req.get('fname')),
            lastName: String(req.get('lname')),
            email: String(req.get('email')),
            password: String(req.get('password'))
        };
        // execute util function for update
    } catch(err) {
        res.status(500)
        .send(err)
    }
}