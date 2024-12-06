# Bütçe Yönetimi Sistemi

---

## Proje Amacı
Bu projede, kullanıcının gelir ve giderlerini ekleyerek toplam bütçesini hesaplayabileceği bir sistem oluşturulacaktır. Sistem, gelir ekleme, gider ekleme ve bütçe hesaplama işlemlerini gerçekleştirecek üç temel fonksiyondan oluşacaktır.

---

## Kullanılacak Değişkenler ve Anahtar Kelimeler

### Değişkenler:
- **`gelirler`**: Kullanıcının tüm gelirlerini saklayan dizi.
- **`giderler`**: Kullanıcının tüm giderlerini saklayan dizi.
- **`gelir`**: Tek bir gelir öğesini temsil eden değişken.
- **`gider`**: Tek bir gider öğesini temsil eden değişken.
- **`toplamGelir`**: Gelirlerin toplamını tutan değişken.
- **`toplamGider`**: Giderlerin toplamını tutan değişken.
- **`butce`**: Gelirler ve giderler arasındaki farkı temsil eden değişken (toplam bütçe).

### Anahtar Kelimeler:
- **`function`**: Gelir ve gider ekleme ile bütçeyi hesaplama işlemleri için kullanılacak fonksiyonlar.
- **`let`**: Değişkenleri tanımlamak için kullanılır.
- **`push()`**: Gelir veya gider öğelerini dizilere eklemek için kullanılır.
- **`reduce()`**: Gelir ve giderlerin toplamını hesaplamak için kullanılır.
- **`return`**: Fonksiyon sonuçlarını döndürmek için kullanılır.
- **`console.log()`**: Bütçe ve detayları konsola yazdırmak için kullanılır.

---

## İzlenecek Adımlar

### 1. Gelir ve Gider Dizilerini Tanımla:
- Gelirler ve giderler için iki ayrı dizi oluşturun: `gelirler` ve `giderler`.
- Bu diziler, kullanıcının girdiği gelir ve gider miktarlarını tutacaktır.

### 2. Gelir Ekleme Fonksiyonu (`gelirEkle`):
- Kullanıcıdan bir gelir değeri alın.
- Bu gelir değerini `gelirler` dizisine ekleyin.
- Yeni geliri eklemek için `push()` metodunu kullanın.
- Eklenen gelirin başarıyla kaydedildiğini kullanıcıya bildirin.

### 3. Gider Ekleme Fonksiyonu (`giderEkle`):
- Kullanıcıdan bir gider değeri alın.
- Bu gider değerini `giderler` dizisine ekleyin.
- Yeni gideri eklemek için `push()` metodunu kullanın.
- Eklenen giderin başarıyla kaydedildiğini kullanıcıya bildirin.

### 4. Bütçe Hesaplama Fonksiyonu (`butceHesapla`):
- `gelirler` dizisindeki tüm gelirleri toplayarak `toplamGelir` değişkenine kaydedin.
- `giderler` dizisindeki tüm giderleri toplayarak `toplamGider` değişkenine kaydedin.
- `toplamGelir` ile `toplamGider` arasındaki farkı hesaplayarak `butce` değişkenine atayın.
- Toplam gelir, toplam gider ve bütçe durumunu kullanıcıya gösterin.

### 5. Test Etme:
- Gelir ekleme, gider ekleme ve bütçe hesaplama fonksiyonlarını sırasıyla çalıştırarak test edin.
- Kullanıcının girdiği gelir ve gider miktarlarını kontrol ederek bütçenin doğru hesaplandığını doğrulayın.

---

## Örnek Beklenen Çıktı

1. **Gelir Ekledikten Sonra:**
```javascript
gelirler = [5000, 2000];
```

2. **Gider Ekledikten Sonra:**
```javascript
Toplam Gelir: 7000
Toplam Gider: 2300
Bütçe: 4700
```
3. **Bütçe Hesaplama Sonucu:**
```javascript
Toplam Gelir: 7000
Toplam Gider: 2300
Bütçe: 4700

