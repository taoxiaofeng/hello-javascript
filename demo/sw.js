self.addEventListener('message', (event) => {
  // 广播给所有打开的客户端
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage(event.data);
    });
  });
});
