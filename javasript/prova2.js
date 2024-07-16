var A;
var B;
A = 3;
B = "buongiorno a lor signori";
console.log("Il tipo della var A e' " + typeof(A) + "\n");
console.log("Il tipo della var B e' " + typeof (B) + "\n");


var C;
C = 4;
console.log("Il tipo della var C e' " + typeof(C) + "\n");

C = " PORCO IL CLERO "

console.log("Il tipo della var C e' " + typeof(C) + "\n");


var iPosizione;
var sMiaStringa;
sMiaStringa = "zozzoneDavide"
iPosizione = sMiaStringa.indexOf("z");
if((iPosizione == -1) || (iPosizione > 3))
						console.log("La z non c'e' nei primi 4 caratteri")
else
	console.log("La z c'e' nei primi 4 caratteri");

var iPosition;
var sMyStringa;

sMyStringa = " vaffanculo"
iPosition = sMyStringa.indexOf("f")

if (iPosition >= 0) 
                        console.log(" v c'è")
else
    console.log(" V nun c'è  ")


function terminaconLettera(sStringa, sTermine)
{
    len = sStringa.lenght;
    iPosition = sStringa.indexOf(sTermine, len -1)
    if (iPosition>= 0)

        return 1
    else
        return 0

}


bRet = terminaconLettera("paperino", "u")
if (bRet ==1)
    console.log("paperino" + "termina con"+ "u")

else
    console.log("paperino" + " NON termina con" + "u")


function Macchinetta (iSoldi,sCodiceprodotto)
    {
        if sCodiceprodotto == "31"

        {
            if (iSoldi < 1)
                return{null, iSoldi};

            if (iSoldi ==1)
                return {CocaCola, 0};
            if (iSoldi > 1)
                return {CocaCola, iSoldi -1};
        }


    }