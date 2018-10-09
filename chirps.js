// Route's chirp.js

import { Router } from 'express';
import db from '../db'

let router = Router();

router.get('/', async (req, res) => {
    try{
        let results = await db.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;