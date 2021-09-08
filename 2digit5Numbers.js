function ran(){
    let num=0;
    while(num<10 || num>99){
        num=(Math.floor(Math.random()*100+1));
    }
    return num
}
let n1=ran();
let n2=ran();
let n3=ran();
let n4=ran();
let n5=ran();

let sum =n1+n2+n3+n4+n5;
let avg = sum/5;
console.log("Sum :"+sum+"  Avg: "+avg);