let num = +prompt("Basamak sayisini ogrenmek istediginiz bir sayi giriniz.");
let bsm = 0;
while (num != 0) {
  num = Math.floor(num / 10);
  bsm++;
}
alert(`Basamak sayisi , ${bsm}`);
