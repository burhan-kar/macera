# Mete'nin Macera Adası

3–6 yaş için Türkçe ve İngilizce eğitici oyun. Ana ekran, parmakla döndürülebilen 3D bir ada; her bölge bir oyuna açılıyor. Rehber karakter **Pofi** konuşur, sevinir ve yönlendirir.

## Oyunlar (15)

| Bölge | Ne öğretir | Nasıl oynanır |
|---|---|---|
| Hayvanlar | 12 hayvan adı ve sesi | Söylenen hayvanı bul (2→4 seçenek) |
| Renkli Balonlar | 7 renk | Söylenen renkteki balonları patlat |
| Sayılar | 1–7 sayma | Meyvelere dokunarak say, doğru sayıyı seç |
| Şekiller | 6 temel şekil | Şekli sürükleyip gölgesine yerleştir |
| Hafıza Kartları | Dikkat ve hafıza | Eş kartları bul (3 → 4 → 6 çift) |
| Müzik | Notalar, ritim | Parlayan ksilofon tuşunu takip ederek şarkı çal |
| Boyama | Renkler, yaratıcılık | Renk seç, resmin parçalarına dokunarak boya (4 sayfa) |
| Harfler | İlk ses / harf tanıma | Resimdeki kelime hangi harfle başlar? |
| Yapboz | Parça-bütün, el becerisi | Hayvan resminin parçalarını yerine sürükle (4 → 6 → 9 parça) |
| Örüntü | Mantık, sıralama | Dizide sırada ne var? (AB, AAB, ABB, ABC) |
| Hayvanı Besle | Sayma + tür ayırt etme | "Ayıya 3 elma ver!": doğru meyveden doğru sayıda ver |
| Saklambaç | Dikkat, hızlı tepki | Deliklerden çıkan hayvanlardan isteneni yakala |
| Duygular | Duygu tanıma, empati | Yüz ifadesini tanı, duygunun ne olduğunu öğren |
| Araçlar | 8 araç ve sesleri | Söylenen aracı bul |
| Hava Durumu | Hava ve uygun giyim | Havaya uygun giysiyi Pofi'ye sürükle |

Ada iki halkalıdır: iç ve dış halkada toplam 15 bölge. Bölgeye ya da üstündeki rozete dokununca oyun açılır. Ekranın önüne gelen bölgenin adı rozetin altında görünür.

Her doğru cevap yıldız kazandırır, her biten oyun yeni bir **hayvan çıkartması** açar (albüm sağ altta).

## Ebeveyn ayarları

Sol üstteki dişli simgesine **1,5 saniye basılı tutun** (çocuk yanlışlıkla açmasın diye). Buradan:
- Dil: Türkçe / English / Türkçe + English
- Seslendirme, ses efektleri, arka plan müziği ve titreşim açık/kapalı
- Konuşma hızı
- İlerlemeyi sıfırlama

## iPhone'a kurulum

1. Safari'de oyunun adresini açın.
2. Paylaş → **Ana Ekrana Ekle**.
3. İlk açılıştan sonra oyun **internetsiz** de çalışır.

Daha doğal Türkçe ses için: Ayarlar › Erişilebilirlik › Seslendirilen İçerik › Sesler › Türkçe'den "Gelişmiş" bir ses indirin.

## Teknik

- Saf HTML/CSS/JS, `three.js` ile 3D ada. Tüm modeller ve çizimler kodla üretilir; hazır görsel kullanılmaz.
- **Ses tasarımı:** 22 ses efekti ve 2 müzik döngüsü, `Tone.js` ile (FM sentez, marimba, çan, reverb, kompresör) `tools/sounds.js` tariflerinden üretilir. `npm run audio` komutu bunları Chromium'da offline render edip ffmpeg ile mp3'e çevirir ve `audio/` klasörüne yazar (toplam ~245 KB). Çalma anında örnekler kullanılır; dosya yüklenemezse koddaki sentez yedeği devreye girer.
- Karakterler nefes alır, kulakları oynar, dokununca zıplar. Her sahnede uçan kuş/kelebek gibi hareketli dekor vardır; oyun geçişleri renkli perdeyle yapılır.
- Yazı tipi: Fredoka (SIL Open Font License, `fonts/OFL.txt`).
- Kaynak kod `src/` içinde; yayınlanan dosyalar `app.js` ve `sw.js` derlemeyle üretilir.

```bash
npm install
npm run build          # src/ → app.js + sw.js
npm run audio          # tools/sounds.js → audio/*.mp3 (Tone.js + ffmpeg)
npm run dev            # http://localhost:8080
node tools/play.mjs <klasör> 390 844   # tüm oyunları otomatik oynatan test
```

Klasörler:
- `src/core/`: çizimler (`art.js`), ses efektleri, seslendirme, kayıt, arayüz yardımcıları
- `src/island/`: 3D ada sahnesi
- `src/games/`: her oyun ayrı dosyada; yeni oyun eklemek için bir dosya yazıp `src/main.js` içindeki `GAMES` listesine ve `island.js` içindeki `LANDMARKS`'a ekleyin.
