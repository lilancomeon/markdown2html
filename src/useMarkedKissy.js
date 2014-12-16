KISSY.add("src/useMarkedKissy",function(S,markedKissy) {  
  var a = {
    init :function(str){
      document.write(markedKissy(str+' I am using __markdown__'));
    }
  };
  return a
},{requires:['src/lib/markedKissy']});