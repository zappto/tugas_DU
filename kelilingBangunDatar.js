function kelilingPersegi(sisi) {
  return 4 * sisi;
}

function kelilingPersegiPanjang(panjang, lebar) {
  return 2 * (panjang + lebar);
}

function kelilingSegitiga(alas, tinggi) {
  return (alas * tinggi) / 2;
}

function kelilingLingkaran(jariJari) {
  return 2 * 3.14 * jariJari;
}

module.exports = {
  kelilingPersegi,
  kelilingPersegiPanjang,
  kelilingSegitiga,
  kelilingLingkaran,
};
