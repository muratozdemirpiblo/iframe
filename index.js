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
    window.onload = function() {
        // window.parent ile iframe'in dışındaki belgeye erişiyoruz
        var parentDocument = window.parent.document;

        // id_3 ID'li elementi bulup arka plan rengini siyaha çeviriyoruz
        var targetElement = parentDocument.getElementById('header_1');
        if (targetElement) {
            targetElement.style.backgroundColor = 'black';  // Arka plan rengini siyah yap
            console.log("id_3 bulundu ve arka plan siyaha çevrildi.");
        } else {
            console.log("id_3 bulunamadı.");
        }
    };
  res.send(script);  // JotForm iframesine bu script'i gönder
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log("run");
});
