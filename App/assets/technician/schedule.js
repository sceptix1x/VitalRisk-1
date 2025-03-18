const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // Define el header
    res.end('<h1>¡Hola, este es el header de mi respuesta!</h1>');
});

server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
