
let decText = document.querySelector('.dec')

let innerDataDec
decText.addEventListener("mouseout", function (e) {
    innerDataDec = decText.value

});
let binaryText = document.querySelector('.binary')
let innerDataBinary
binaryText.addEventListener("mouseout", function (e) {
    innerDataBinary = binaryText.value

});
let octalText = document.querySelector('.octal')
let innerDataOctal
octalText.addEventListener("mouseout", function (e) {
    innerDataOctal = octalText.value
    console.log(innerDataOctal)

});
let hexaText = document.querySelector('.hexa')
let innerDataHexa
hexaText.addEventListener("mouseout", function (e) {
    innerDataHexa = hexaText.value

});

function convertValues(number, format) {
    // console.log(anydata)
    let deci

    if (format == 'decimal') {

        deci = parseInt(number, 10)
    }
    if (format == 'binary') {
        deci = parseInt(number, 2)
    }

    if (format == 'octal') {
        if(number%10>=8){
            deci='NaN'
        }
        else{
        deci = parseInt(number, 8)
        }
        
    }

    if (format == 'hexa') {
        deci = parseInt(number, 16)
    }
    console.log(number)
    console.log(deci)
    let bini = deci.toString(2);
    let octi = deci.toString(8);
    let hexa = deci.toString(16);
    deci.toString(10);
    
    decText.value = deci
    binaryText.value = bini
    octalText.value = octi
    hexaText.value = hexa


}

convertBtn = document.getElementById('btn9');


convertBtn.addEventListener("click", function (e) {


    if (innerDataDec != undefined  && innerDataDec !="") {
        convertValues(innerDataDec, 'decimal');
    }
    else if (innerDataBinary != undefined && innerDataBinary !="") {
        convertValues(innerDataBinary, 'binary')
    }
    else if (innerDataOctal != undefined && innerDataOctal !="") {
        convertValues(innerDataOctal, 'octal')
    }
    else {
        convertValues(innerDataHexa, 'hexa')
    }
    
});

refreshBtn = document.getElementById('refresh')
refreshBtn.addEventListener("click", function (e) {
    decText.value = ""
    binaryText.value = ""
    octalText.value = ""
    hexaText.value = ""
    innerDataDec=null
    innerDataBinary=null
    innerDataOctal=null
    innerDaktaHexa=null
    
})




