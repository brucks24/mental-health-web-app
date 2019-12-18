import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

/**
 * Swagger definition.
 */
const swaggerDefinition = {
    info: {
        title: 'UWW Student Athlete System',
        version: '1.0.0',
        description: 'Student athlete wellness system using react',
    },
    host: 'localhost:3000',
    basePath: '/api'
};

/**
 * Options for the swagger docs.
 */
const swaggerOptions = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: [path.join(__dirname, '/../routes/*.js')]
};

/**
 * Initialize swagger-jsdoc.
 */
const swagger = swaggerJSDoc(swaggerOptions);

export default swagger;