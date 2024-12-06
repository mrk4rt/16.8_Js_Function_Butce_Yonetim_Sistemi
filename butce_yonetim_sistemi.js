// Gelir ve gider dizileri
let gelirler = [];
let giderler = [];

// Gelir ekleme fonksiyonu
function gelirEkle(miktar) {
  gelirler.push(miktar);
  console.log(`Gelir eklendi: ${miktar} TL`);
}

// Gider ekleme fonksiyonu
function giderEkle(miktar) {
  giderler.push(miktar);
  console.log(`Gider eklendi: ${miktar} TL`);
}

// Bütçe hesaplama fonksiyonu
function butceHesapla() {
  // Toplam gelir ve gider hesaplama
  let toplamGelir = gelirler.reduce((toplam, gelir) => toplam + gelir, 0);
  let toplamGider = giderler.reduce((toplam, gider) => toplam + gider, 0);

  // Bütçe hesaplama
  let butce = toplamGelir - toplamGider;

  // Sonuçları gösterme
  console.log(`Toplam Gelir: ${toplamGelir} TL`);
  console.log(`Toplam Gider: ${toplamGider} TL`);
  console.log(`Bütçe: ${butce} TL`);
}

// Fonksiyonları test etme
gelirEkle(5000);
gelirEkle(2000);
giderEkle(1500);
giderEkle(800);
butceHesapla();
