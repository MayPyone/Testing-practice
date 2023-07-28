function stringLength(string) {
    if (string.length <10 ) {
       length= string.length;
      } 
      else if(string.length>=10){
        length= "String has characters more than ten";
      }
      else {
       length = "something is wrong";
   }
return length;
}

module.exports=stringLength;
