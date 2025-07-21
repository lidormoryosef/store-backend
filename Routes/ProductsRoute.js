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
 *                 type: integer
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
 *       400:
 *         description: Catalog Number already exsits.
 *       500:
 *         description: Server error.
 */
router.route('/editProduct').put(controller.editProduct);
/**
 * @swagger
 * /api/products/getProducts:
 *   get:
 *     summary: Get a paginated, searchable, and sortable list of products
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 0
 *         description: Page number (starts at 0)
 *         example: 0
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 7
 *         description: Number of products per page
 *         example: 7
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term to filter by product name, description, or type (minimum 3 characters)
 *         example: app
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [name, description, type, marketingDate]
 *         description: Field to sort by
 *         example: name
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort order (ascending or descending)
 *         example: asc
 *     responses:
 *       200:
 *         description: A paginated list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 *                 totalItems:
 *                   type: integer
 *                   example: 42
 *       500:
 *         description: Server error
 */
router.route('/getProducts').get(controller.getProducts);
module.exports = router;