let n=47;
flag = true;
for(let i= 2; i<(n/2); i++){
    if(n%i==0){
        flag=false;
    }
}
if(flag){
    console.log("Prime!")
}else{
    console.log("Not prime!")
}