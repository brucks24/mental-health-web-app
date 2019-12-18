import express from 'express';
import * as userCtrl from '../controllers/user.controller';
import * as panicCtrl from '../controllers/panic.controller';
import isAuthenticated from '../middlewares/authenticate';
import validate from '../config/joi.validate';
import schema from '../utils/validator';
import { sendPanicEmail } from '../config/mail';

var nodemailer = require('nodemailer');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: user
 *     description: User operations
 */

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         description: Unique identifier representing a specific user
 *         example: 2
 *       firstName:
 *         type: string
 *         description: first name of the user
 *         example: Krishna
 *       lastName:
 *         type: string
 *         description: last name of the user
 *         example: Timilsina
 *       email:
 *         type: string
 *         description: email of the user
 *         required: true
 *         example: test@gmail.com
 *       password:
 *         type: string
 *         description: password of the user
 *         required: true
 *         example: "1234"
 *       status:
 *         type: integer
 *         description: status of the user
 *         example: 1
 *       created_at:
 *         type: string
 *         format: date-time
 *         description: User creation datetime
 *       updated_at:
 *         type: string
 *         format: date-time
 *         description: User update datetime
 *   Error:
 *     type: object
 *     properties:
 *        message:
 *           type: string
 *        error:
 *           type: boolean
 *           default: true
 */

/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *     description: |
 *            For accessing the API a valid JWT token must be passed in all the queries in
 *            the 'Authorization' header.
 *
 *
 *            A valid JWT token is generated by the API and returned as answer of a call
 *            to the route /auth/login giving a valid user & password.
 *
 *
 *            The following syntax must be used in the 'Authorization' header:
 *
 *            Bearer xxxxxx.yyyyyyy.zzzzzz
 *     type: apiKey
 *     name: Authorization
 *     in: header
 *
 */

router.route('/')

/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - user
 *     summary: "Create a new user"
 *     security:
 *        - Bearer: []
 *     operationId: storeUser
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Created user object
 *         required: true
 *         schema:
 *           $ref: "#/definitions/User"
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/User"
 *       403:
 *          description: User not found
 *          schema:
 *             $ref: '#/definitions/Error'
 */

    .post(validate(schema.storeUser), (req, res) => {
        userCtrl.store(req, res);
    })

    /**
     * @swagger
     * /users:
     *   get:
     *     tags:
     *       - user
     *     summary: "List all users"
     *     operationId: findAll
     *     consumes:
     *       - application/json
     *     produces:
     *       - application/json
     *     parameters: []
     *     responses:
     *       200:
     *         description: OK
     *         schema:
     *            type: object
     */

    .get( (req, res) => {
        userCtrl.findAll(req, res);
    });


router.route('/:id')

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - user
 *     summary: Find the user by ID
 *     operationId: findById
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id of user that needs to be fetched
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: "#/definitions/User"
 *       404:
 *          description: User not found
 *          schema:
 *             $ref: '#/definitions/Error'
 */

    .get( (req, res) => {
        userCtrl.findById(req, res);
    })

    /**
     * @swagger
     * /users/{id}:
     *   put:
     *     tags:
     *       - user
     *     summary: "Update an existing user by ID"
     *     security:
     *       - Bearer: []
     *     operationId: update
     *     consumes:
     *       - application/json
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: id that need to be updated
     *         required: true
     *         type: integer
     *       - name: body
     *         in: body
     *         description: Updated user object
     *         required: true
     *         schema:
     *           $ref: "#/definitions/User"
     *     responses:
     *       200:
     *         description: OK
     *         schema:
     *           $ref: "#/definitions/User"
     *       400:
     *         description: Invalid user
     */

    .put(isAuthenticated, (req, res) => {
        userCtrl.update(req, res);
    })

    /**
     * @swagger
     * /users/{id}:
     *   delete:
     *     tags:
     *       - user
     *     summary: Delete the user by ID
     *     security:
     *       - Bearer: []
     *     operationId: destroy
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in: path
     *         description: id of user that needs to be deleted
     *         required: true
     *         type: integer
     *     responses:
     *       200:
     *         description: OK
     *       400:
     *          description: "Invalid ID"
     */

    .delete(isAuthenticated, (req, res) => {
        userCtrl.destroy(req, res);
    });

    /**
     * @swagger
     * /user/panic:
     *  panic:
     *      tags:
     *          - user
     *      summary: User presses the panic button
     *      security:
     *          - 
     */
router.route('/panic').post((req, res) => {
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "763a1145ed6ff9",
          pass: "590d7a828893fa"
        }
      });
    
    const mailOptions = {
        from: req.body.email,
        to: 'butlerja23@uww.edu',
        subject: '(TEST) PANIC BUTTON HAS BEEN PRESSED',
        text: `${req.body.name} has clicked the panic button`
    }
    
    transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err
            });
        } else {
            console.log(`Email sent: ${info.response}`);
            res.status(HttpStatus.OK).json({
                info: info.response
            });
        }
    });
})

export default router;