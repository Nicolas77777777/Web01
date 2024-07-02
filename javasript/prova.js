/*function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log("ciao");



const str = prompt('Enter a string:');
console.log("Hai inserito" + str);

str = capitalizeFirstLetter(str);
console.log("Hai inserito dopo"+ str);
*/

const prompt = require('prompt-sync')();
// Insersci il primo numero 
var sPrimonum = prompt("Insersciil primo numero ")
var iPrimoNum = parseInt(sPrimonum);

// Inseriscii secondo numero 
var sSecondo = prompt("Insersci il secondo numero ")
var iSecond = parseInt(sSecondo);

// fai la somma 
var iSomma = iPrimoNum + iSecond

// Stampi a schermo la somma
console.log("La somma vale " +  iSomma)


var firstNum = prompt("Inserisci il primo numero")
var sfirsdtNum = parseInt(firstNum)
var bEsito = VerificaNumero(firstNum)

var secondNum = prompt("Inserisci il secondo numero")
var ssecondNum = parseInt(secondNum)

var sSomma = sfirsdtNum + ssecondNum

console.log("la somma è "+ sSomma)

function VerificaNumero(sNum)
{
    for( i=0;i<sNum.lenght;i++)
        {
            if((sNum.charAt(i) <'0') || (sNum.CharAt(i)> '9'))
            return false ;
        }
        return true ;
}


function parseIntMy(sNum)
{
    bEsito = VerificaNumero(sNum);
    if (bEsito = true)
        return parseInt(sNum);
    for(i=0; i<3;i++)
        {
            sNUm1 = prompt("Attenzione, numero errato riprova");
            bEsito = VerificaNumero(sNUm1);
            if (bEsito==true)
                return parseInt(sNUm1);
        }

        return null;
}


var bEsito = VerificaNumero("39");
if (bEsito==true)
    console.log(" mi hai passato un numero")
else
    console.log("non mi hai passato numero") ;

//Process.exit(0);

