
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  let resposta;
  const urlparse = url.parse(req.url, true);

  if (urlparse.pathname === 'criar-usuario') {
    const params = queryString.parse(urlparse.search);

    fs.writeFile(`users/${params.id}.txt`, JSON.stringify(params), function (err) {
      if (err) throw err;

      console.log('Saved');
    });

    resposta = 'Usuário criado com sucesso';
  }


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
