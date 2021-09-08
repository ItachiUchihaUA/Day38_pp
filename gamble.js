let money=100;
let won=0, totalBet=0;
while(money<200 && money>0){
    ren = Math.floor(Math.random()*2)
    if(ren==0){
        money++;
        won++;
    }else{
        money--;
    }
    totalBet++;
}
console.log("Money: "+ money)
console.log("won: "+ won)
console.log("Total Turn: "+totalBet)
