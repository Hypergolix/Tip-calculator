let billArray = [265, 80, 560];
let totalBill = [];                         // Initialize not necessary

function tipCalc(billValue) {
    if (billValue > 50 && billValue < 300) {
        tip = billValue * 1.10;             // Calculates initial +10% 
    } else {
        tip = billValue * 1.15;             // Calculates initial +15%
    }
    return tip;                             // Return final tip
}
for (let i = 0; i < 3; i++) {
    totalBill[i] = tipCalc(billArray[i]);   // Call function    
    console.log(totalBill[i]);              // Print tip
}