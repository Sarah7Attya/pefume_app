const express = require('express')
const router= express.Router()
const {auth, authorizePermissions} =require('../middleware/auth.middleware')

const {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    uploadImage,
} = require('../controller/productController')

const {getSingleProductReviews} =require('../controllers/reviewController')



router.route('/')
.post([auth,authorizePermissions('admin')], createProduct)
// .get(getAllProducts)

router.route('/uploadImage')
.post([auth,authorizePermissions('admin')], uploadImage)

router.route('/:id')
.get(getSingleProduct).patch([auth,authorizePermissions('admin')], updateProduct)
.delete([auth, authorizePermissions('admin')], deleteProduct)

router.route('/:id/reviews').get(getSingleProductReviews)

module.exports = router