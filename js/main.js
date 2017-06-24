"use strict";


//tworzenie ogólnych zmiennych - raczej używa się lokalnych 


var wszystkieZgody = document.getElementById("wszystkie-zgody");
var zgodMarketingowa1 = document.getElementById("zgoda-marketingowa-1");
var zgodMarketingowa2 = document.getElementById("zgoda-marketingowa-2");
var wyslijBtn = document.getElementById("wyslij");
var inputImie = document.getElementById("name");
var inputEmail = document.getElementById("email");
var wiadomosc = document.getElementById("wiadomosc");


//połączenie czekboksów


function stanCheckBoxa() {
    
    zgodMarketingowa1.checked = this.checked;
    zgodMarketingowa2.checked = this.checked;
    
//wyłączenie pierwszych dwóch czekbosków po włączeniu trzeciego
    
    zgodMarketingowa1.disabled = this.checked;
    zgodMarketingowa2.disabled = this.checked;
}

wszystkieZgody.onchange = stanCheckBoxa;


//walidacja pustych pól


function walidujFormularz(event) { 
    
    wiadomosc.innerHTML = '<ul id="wiadomosc"></ul>';
    
    if (inputImie.value.trim() == "") {
        var msgImie = document.createElement("li");
        msgImie.innerHTML = "Wpisz Imię!";
        wiadomosc.appendChild(msgImie); 
            
        event.preventDefault();
        }
    
     if (inputEmail.value.trim() == "") {
        var msgEmail = document.createElement("li");
        msgEmail.innerHTML = "Wpisz email!";
        wiadomosc.appendChild(msgEmail); 
         
        event.preventDefault();
        }
    
    if (! zgodMarketingowa1.checked) {
        var msgZgoda = document.createElement("li");
        msgZgoda.innerHTML = "Zgódź się!";
        wiadomosc.appendChild(msgZgoda); 
         
        event.preventDefault();
        }
    }
} 

wyslijBtn.addEventListener('click', walidujFormularz ); 
    
 