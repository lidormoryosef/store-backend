const productController = require('../Controllers/ProductsController');
const express=require('express');
const controller= productController;
const router=express.Router();
/**
 * @swagger
 * /api/products/addProduct:
 *   post:
 *     summary: Add a new product.
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - catalogNumber
 *               - type
 *               - marketingDate
 *             properties:
 *               name:
 *                 type: string
 *                 example: Apple
 *               catalogNumber:
 *                 type: string
 *                 example: 5466
 *               description:
 *                 type: string
 *                 example: Fresh red apples, crispy and juicy.
 *               type:
 *                 type: string
 *                 enum: [Fruit, Vegetable, Field crops]
 *                 example: Fruit
 *               marketingDate:
 *                 type: string
 *                 format: date
 *                 example: 2025-07-13
 *     responses:
 *       200:
 *         description: Product added successfully.
 *       400:
 *         description: catalogNumber already exists.
 *       500:
 *         description: Server error.
 */

router.route('/addProduct').post(controller.addProduct);
/**
 * @swagger
 * /api/products/deleteProduct/{id}:
 *   delete:
 *     summary: Delete a product by ID.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the product to delete.
 *         schema:
 *           type: integer
 *           example: 5
 *     responses:
 *       200:
 *         description: Product deleted successfully.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Server error.
 */
router.route('/deleteProduct/:id').delete(controller.deleteProduct);
/**
 * @swagger
 * /api/products/editProduct:
 *   put:
 *     summary: Edit an existing product by ID.
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - name
 *               - catalogNumber
 *               - type
 *               - marketingDate
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 5
 *               name:
 *                 type: string
 *                 example: Apple
 *               catalogNumber:
 *                 type: integer
 *                 example: 1001
 *               description:
 *                 type: string
 *                 example: ""  # can be empty string
 *               type:
 *                 type: string
 *                 enum: [Fruit, Vegetable, Field crops]
 *                 example: Fruit
 *               marketingDate:
 *                 type: string
 *                 format: date
 *                 example: 2025-07-13
 *     responses:
 *       200:
 *         description: Product updated successfully.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Server error.
 */
router.route('/editProduct').put(controller.editProduct);
module.exports = router;