// ES Modules - Padrão de módulos nos navegadores (JS Moderno) / Sendo adotado pelo Node.js
import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.end('Aplicação Web Servida pelo módulo HTTP nativo do Node.js');
  //RES é o método de requisição do client
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});