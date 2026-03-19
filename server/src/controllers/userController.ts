import type { Request , Response, NextFunction } from "express"



export const getUser = (req : Request, res : Response, next : NextFunction) => {
    // console.log(req.headers);
    res.json({message : "yo!!"});
}

