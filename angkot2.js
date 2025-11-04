var noAngkot = 1;
var jmlhAngkot = 10;
var angkotBeroperasi = 9;

while(noAngkot <= angkotBeroperasi){
  console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  
noAngkot++;
}
for(noAngkot = angkotBeroperasi + 1; noAngkot <= jmlhAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
}