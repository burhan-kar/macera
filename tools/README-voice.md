# Seslendirme boru hattı

Pofi'nin konuşması, cihazın robotik sesi yerine önceden üretilmiş kliplerle çalışır.

## Nasıl çalışır

1. **Cümle toplama** — `node tools/collect-lines.mjs <çıktı.json> <tur>`
   15 oyunu otomatik oynatır, Türkçe ve İngilizce modda seslendirilen her cümleyi
   yakalar ve benzersiz liste çıkarır.
2. **Seslendirme** — `node tools/render-voice.mjs <lines.json> [tr-sesi] [en-sesi]`
   Her cümleyi `tools/tts.py` ile sese çevirir, cilalar ve `voice/<anahtar>.mp3`
   olarak yazar. Listede olmayan eski klipler silinir, `voice/index.json` güncellenir.
3. **Çalma** — `src/core/voice.js` cümlenin anahtarını hesaplar; klip varsa onu çalar,
   yoksa cihazın konuşma sentezine düşer. Yani eksik klip oyunu bozmaz.

## tools/tts.py

`espeak-ng` metni fonem, süre ve perde eğrisine çevirir; betik bunları MBROLA
veritabanının fonem setine eşler, perdeyi çocuk oyununa uygun şekilde yükseltir
ve canlandırır. Sesi `mbrola` üretir — bu, gerçek insan kaydından alınmış diphone
parçalarını birleştirerek konuşma oluşturur.

Sesler: `tr-kadin` (tr2), `tr-erkek` (tr1), `en-kadin` (us2), `en-erkek` (us1).

Gereken paketler: `espeak-ng mbrola mbrola-tr1 mbrola-tr2 mbrola-us1 mbrola-us2`

## Lisans notu

MBROLA ses veritabanları **ticari olmayan** kullanım için ücretsizdir. Kişisel/aile
kullanımı uygundur; uygulama mağazasında ücretli yayın planlanırsa sesler
değiştirilmelidir (ör. ebeveynin kendi kaydı).
