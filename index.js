function theBeatlesPlay (musicians, array2){
  var arr = [];
  for (var i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${array2[i]}`);
  }
  return arr
}
