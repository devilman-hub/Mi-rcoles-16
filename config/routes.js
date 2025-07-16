import { Router } from "express";
import infocontroller from '../controller/infocontroller.js'

const router = new Router()

//Obtener Info.
router.get('info',infocontroller.index)
router.post('/info',infocontroller.store)
router.get('/info/:id',infocontroller.details)

export default router