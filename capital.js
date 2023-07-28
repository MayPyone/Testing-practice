function capitalize(string) {
 let dat = string.split("");
 dat[0]=dat[0].toUpperCase();
 dat =dat.join("");
return dat;
}

module.exports=capitalize;
//console.log(capitalize("may"));