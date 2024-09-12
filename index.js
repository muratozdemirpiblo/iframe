const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // App Platform'un dinlediği port

// Ana rotayı ayarla
app.get('/', (req, res) => {
  res.send('Node.js uygulamanız çalışıyor!');
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
