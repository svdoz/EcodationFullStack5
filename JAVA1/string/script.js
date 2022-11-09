let ad = "Sevda"
let soyad = "Özbilek"
let yas = 28 ;
let sehir = "Eskişehir"
let mesaj = `Benim adım ${ad} ve soyadım ${soyad} . ${sehir} ' de yaşıyorum.Emeklilğime
${65-yas} yılım kaldı.`
let emeklilik = (65 - yas > 0) ? "Emekliliğe" + (65-yas) + "yılım kaldı" : "Zaten emeklisiniz."
mesaj = `Benim adım ${ad} ve soyadım ${soyad}.${sehir}'de yaşıyorum.${emeklilik}`;
console.log(mesaj);
