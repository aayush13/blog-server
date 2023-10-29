"use strict";
import { Request, Response, NextFunction } from "express";

function get(req: Request,res: Response, next:NextFunction) {
    try {
        res.send("Server setup complete");
    } catch (err){
        console.log("Error ${}")
    }
}


module.exports = {
    get
}