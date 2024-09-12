const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// CORS ayarları - JotForm'dan gelen talepleri kabul etmek için
app.use(cors());

// Statik dosyalara erişim (eğer gerekli olursa)
app.use(express.static('public'));

// Ana rota
app.get('/', (req, res) => {
  res.send('Node.js uygulamanız çalışıyor!');
});

// JotForm'daki elementin arka planını değiştiren route
app.get('/change-background', (req, res) => {
  const script = `
    <script>
      window.onload = function() {
        var element = window.parent.document.getElementById('id_3');
        if (element) {
          element.style.backgroundColor = 'black';
        }
      };
    </script>
  `;
  res.send(script);  // JotForm iframesine bu script'i gönder
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log("run");
});
