const http = require('http');
const httpProxy = require('http-proxy');

// Создаем новый прокси-сервер
const proxy = httpProxy.createProxyServer({});

// Сервер для обработки запросов
const server = http.createServer((req, res) => {
    const targetUrl = req.url.split('url=')[1]; // Извлекаем целевой URL из запроса
    if (targetUrl) {
      console.log('Проксируем запрос к:', targetUrl);
  
      // Добавляем CORS-заголовки в ответ
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
      proxy.web(req, res, { target: targetUrl, changeOrigin: true });
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Пожалуйста, укажите URL для проксирования');
    }
  });
  

// Запуск сервера на порту 3000
server.listen(3000, () => {
  console.log('Прокси-сервер запущен на http://localhost:3000');
});
