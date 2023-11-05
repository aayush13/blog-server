"use strict";
import { Request, Response, NextFunction } from "express";
var jwt = require('jsonwebtoken');

export function get(req: Request,res: Response, next:NextFunction) {
    try {
        res.send("Server setup complete");
    } catch (err){
        console.log(`Error ${err}`)
    }
}

export function getAuthToken(req: Request,res: Response, next:NextFunction) {
    try {
        let token = jwt.sign(req.get('password'), req.get('email'))
        res.status(200)
        .json({
            jwt: token,
        });
        
    } catch(err) {
        console.log(err);
        res.status(400);
    }
}

export function verifyAuthToken(req: Request,res: Response, next:NextFunction) {
    try {
        let decoded = jwt.verify(req.get('token'), req.get('email'));
        res.status(200)
        .json({
            msg: 'Successfully Verified'
        });
    } catch(err:any) {
        res.status(400)
        .send({"message": err});
    }
}