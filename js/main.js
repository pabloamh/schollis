function quickSearchPrimo() {
    document.getElementById("primoQuery").value = "any,contains," + document.getElementById("primoQueryTemp").value.replace(/[,]/g," ");
    document.forms["searchPrimoForm"].submit();
} 

function quickSearchPrimoSchlesinger() {
    document.getElementById("schlesingerQuery").value = "any,contains," + document.getElementById("schlesingerQueryTemp").value.replace(/[,]/g," ");
    document.forms["searchSchlesingerForm"].submit();
} 

function slQuery() {
    document.getElementById("sl-main-query").value = "any,contains," + document.getElementById("sl-query").value.replace(/[,]/g," ");
    document.forms["SchlesingerSearch"].submit();
} 


