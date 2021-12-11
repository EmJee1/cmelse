import { Router } from 'express'
import Product from '../models/Product'

const models = [Product]
const router = Router()

router.get('/', (req, res) => res.json({ msg: 'received' }))

export default router
