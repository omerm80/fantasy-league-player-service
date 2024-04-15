// Import Fastify
const fastify = require('fastify')();

// Define a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});

// Start the server
const start = async () => {
    try {
        await fastify.listen(3000);
        console.log('Server running on port 3000');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();
