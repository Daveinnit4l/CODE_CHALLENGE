function DemeritCalculator(speed){
    const speedlimit =70;//the speed limit does not change in any circunstance 
    const kmperdemeritpoint =5;
    const demeritpoints=(Math.floor(speed-speedlimit /kmperdemeritpoint)+"demeritponts");//calculates drivers demerit points
    if(speed<=speedlimit){
        print("OK");
    }
    else if (speed>speedlimit){
      print (demeritpoints);
     }
if(demeritpoints>12){
print("license suspended");
 }
}