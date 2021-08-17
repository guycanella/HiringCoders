
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  let resposta;
  const urlparse = url.parse(req.url, true);
  const params = queryString.parse(urlparse.search);

  if (urlparse.pathname === '/criar-usuario') {

    fs.writeFile(`users/${params.id}.txt`, JSON.stringify(params), function (err) {
      if (err) throw err;

      res.statusCode = 201;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });

    resposta = 'Usuário criado com sucesso.';
  } else if (urlparse.pathname === '/selecionar-usuario') {
    fs.readFile(`users/${params.id}.txt`, function (err, data) {
      resposta = data;

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(resposta);
    });
  }else if (urlparse.pathname === '/remover-usuario'){
    fs.unlink(`users/${params.id}.txt`, function(err){
      resposta = err ? 'Usuário não encontrado.' : 'Usuário removido.';

      console.log('File deleted!');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
