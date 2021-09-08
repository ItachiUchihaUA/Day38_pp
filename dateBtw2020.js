let date=Date.prototype.getDate;
let month=Date.prototype.getMonth;

if(month>=5 && date>=20){
    console.log( true);    
}
else if(month<7 && date<=20){
    console.log( true);  
}else{
    console.log( false);  
}
