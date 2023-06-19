let basicSalary=parseFloat(prompt("Input basic salary!"))
let benefits=parseFloat(prompt("Input benefits!"))
// calculating gross salary
let grossSalary= basicSalary+benefits
let payee;
let nssfDeductions;
let nhifDeductions;
let netSalary;

if(grossSalary<=24000){
    payee=gross*0.01;
    nssfDeductions=grossSalary*0.06;
    nhifDeductions=150;
}
else if (grossSalary <=32333){
    payee=gross*0.25;
    nssfDeductions=grossSalary*0.06;
    nhifDeductions=900;
}
else if(grossSalary>32333){
    payee=(grossSalary-32333)*0.03
    nssfDeductions=grossSalary*0.06
    nhifDeductions=900
}
//calculatung net salary
netSalary=grossSalary-payee-nssfDeductions-nhifDeductions


