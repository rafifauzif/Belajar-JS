var noAngkot = 1;
var jmlhAngkot = 10;
var angkotBeroperasi = 6;

for(noAngkot; noAngkot <= jmlhAngkot; noAngkot++){
  if(noAngkot <= angkotBeroperasi && noAngkot !== 5){
  console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  } else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
  console.log("Angkot No. " + noAngkot + " sedang lembur.");
  } else {
  console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
  }
}