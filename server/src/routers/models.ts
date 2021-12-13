import { Router } from 'express'
import Users from '../models/User'
import Product from '../models/Product'

const models = [Product, Users] as const

const router = Router()

router.get('/', (req, res) => res.json({ msg: 'received' }))

export default router
