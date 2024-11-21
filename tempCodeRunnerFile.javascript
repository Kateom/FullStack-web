var  a = 5;

for(var i = 1; i <= a; i++) {
    let pattern = " "; 
    for(var j = a; j>=i; j--){
        pattern += "*";
    }
    console.log(pattern);

}