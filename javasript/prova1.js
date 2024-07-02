function VerificaNumero(sNum)
{
    //Faccio delle cose
    for( i=0;i<sNum.length;i++) 
    {
        if((sNum.charAt(i) < '0') || (sNum.charAt(i)>'9'))
            return false;
    } 
    return true; 
}
function parseIntMy(sNum)
{
    bEsito = VerificaNumero(sNum);
    if(bEsito==true)
        return parseInt(sNum);
    var sNum1 = "0";
    for(a=0;a<3;a++)
    {
        sNum1 = prompt("Attenzione, numero errato, riprova ");
        bEsito = VerificaNumero(sNum1);
        if(bEsito==true)
            return parseInt(sNum1); 
    }

    return null;
}
const prompt = require('prompt-sync')();
var sPrimoNum = prompt("Inserisci primo numero ");
var iNum = parseIntMy(sPrimoNum);
if(iNum != null)
    console.log("Hai inserito" + iNum);
else
    console.log("Non sei riuscito ad inserire un numero");
