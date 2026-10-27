# Mete'nin Macera Adası

3–6 yaş için Türkçe ve İngilizce eğitici oyun. Ana ekran, parmakla döndürülebilen 3D bir ada; her bölge bir oyuna açılıyor. Rehber karakter **Pofi** konuşur, sevinir ve yönlendirir.

## Oyunlar

| Bölge | Ne öğretir | Nasıl oynanır |
|---|---|---|
| Hayvanlar | 12 hayvan adı ve sesi | Söylenen hayvanı bul (2→4 seçenek) |
| Renkli Balonlar | 7 renk | Söylenen renkteki balonları patlat |
| Sayılar | 1–7 sayma | Meyvelere dokunarak say, doğru sayıyı seç |
| Şekiller | 6 temel şekil | Şekli sürükleyip gölgesine yerleştir (dokun-dokun da olur) |
| Hafıza Kartları | Dikkat ve hafıza | Eş kartları bul (3 → 4 → 6 çift) |
| Müzik | Notalar, ritim | Parlayan ksilofon tuşunu takip ederek şarkı çal |

Her doğru cevap yıldız kazandırır, her biten oyun yeni bir **hayvan çıkartması** açar (albüm sağ altta).

## Ebeveyn ayarları

Sol üstteki dişli simgesine **1,5 saniye basılı tutun** (çocuk yanlışlıkla açmasın diye). Buradan:
- Dil: Türkçe / English / Türkçe + English
- Seslendirme ve ses efektleri açık/kapalı
- Konuşma hızı
- İlerlemeyi sıfırlama

## iPhone'a kurulum

1. Safari'de oyunun adresini açın.
2. Paylaş → **Ana Ekrana Ekle**.
3. İlk açılıştan sonra oyun **internetsiz** de çalışır.

Daha doğal Türkçe ses için: Ayarlar › Erişilebilirlik › Seslendirilen İçerik › Sesler › Türkçe'den "Gelişmiş" bir ses indirin.

## Teknik

- Saf HTML/CSS/JS, `three.js` ile 3D ada. Tüm modeller, çizimler ve sesler kodla üretilir; dış görsel/ses dosyası yoktur.
- Yazı tipi: Fredoka (SIL Open Font License, `fonts/OFL.txt`).
- Kaynak kod `src/` içinde; yayınlanan dosyalar `app.js` ve `sw.js` derlemeyle üretilir.

```bash
npm install
npm run build          # src/ → app.js + sw.js
npm run dev            # http://localhost:8080
node tools/play.mjs <klasör> 390 844   # tüm oyunları otomatik oynatan test
```

Klasörler:
- `src/core/`: çizimler (`art.js`), ses efektleri, seslendirme, kayıt, arayüz yardımcıları
- `src/island/`: 3D ada sahnesi
- `src/games/`: her oyun ayrı dosyada; yeni oyun eklemek için bir dosya yazıp `src/main.js` içindeki `GAMES` listesine ve `island.js` içindeki `LANDMARKS`'a ekleyin.
