function luasSegitiga(alas, tinggi) {
  return (alas * tinggi) / 2;
}

function luaspersegi(sisi) {
  return sisi * sisi;
}

function luaslingkaran(jari) {
  return 3.14 * jari * jari;
}

export default {
  segitiga: luasSegitiga,
  persegi: luaspersegi,
  lingkaran: luaslingkaran,
};
