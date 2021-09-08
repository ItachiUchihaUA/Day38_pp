function ranFor3Digit(){
    let num=0;
    while(num<100 || num>999){
        num=(Math.floor(Math.random()*1000+1));
    }
    return num
}
let arr =[];
arr[0]=ranFor3Digit();
arr[1]=ranFor3Digit();
arr[2]=ranFor3Digit();
arr[3]=ranFor3Digit();
arr[4]=ranFor3Digit();
let max=0;
 for(let i=0; i<5 ; i++){
    if(arr[i]>max){
        max=arr[i];
    }
 }
 console.log("Max: "+max);