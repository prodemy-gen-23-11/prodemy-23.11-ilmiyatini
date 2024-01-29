function luasPersegi(sisi){
    const luas=sisi*sisi;
    console.log("Luas persegi dengan sisi "+sisi+ " adalah "+luas+"\n");
}
function luasPersegiPanjang(panjang, lebar){
    const luas=panjang*lebar;
    console.log("Luas persegi panjang dengan panjang "+panjang+ " dan lebar "+lebar+" adalah "+luas+"\n");
}
function luasSegitiga(alas, tinggi){
    const luas=0.5*alas*tinggi;
    console.log("Luas segitiga dengan alas "+alas+ " dan tinggi "+tinggi+" adalah "+luas+"\n");
}
function luasLingkaran(diameter){
    const luas=0.25*Math.PI*(diameter**2);
    console.log("Luas lingkaran dengan diameter "+diameter+" adalah "+luas+"\n");
}
function luasJajarGenjang(alas,tinggi){
    const luas=alas*tinggi;
    console.log("Luas Jajar genjang dengan alas "+alas+ " dan tinggi "+tinggi+" adalah "+luas+"\n");
}
luasPersegi(2);
luasPersegiPanjang(2,4);
luasSegitiga(2,4);
luasLingkaran(4);
luasJajarGenjang(2,4);
