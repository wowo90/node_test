const io = require('socket.io');
const socketClient = io.connect('https://node-test-six.vercel.app:3000'); // Specify port if your express server is not using default port 80

socketClient.on('connect', () => {
  socketClient.emit('npmStop');
  setTimeout(() => {
    process.exit(0);
  }, 1000);
});