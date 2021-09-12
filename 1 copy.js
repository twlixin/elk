// if( a===1 ) return 1;
// return (f(a-1))* (f(a-2));
var f33= function(a){ 
    if( a===1 ) return 100;
    return 2;    
};

(function(a){ 
    if( a===1 ) return 100;
    return 2;    
})(2);

//f33(1);

// var f= function(a){
//     return 8;
//     // if( a===1 ) return 1;
//     // return (f(a-1))* (f(a-2));
// }
// f(2);
// 1;