'use strict'

const express =require('express')
const ProductCtrl =require('../controllers/product')
const api = express.Router()

api.get('/product',ProductCtrl.getProducts)// metodo GET 
api.get('/product/:productId',ProductCtrl.getProduct)
api.post('/product',ProductCtrl.saveProduct)// metodo POST
api.put('/product/:productId',ProductCtrl.updateProduct)// metodo PUT
api.delete('/product/:productId',ProductCtrl.deleteProduct)// metodo DELETE

module.exports = api