import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extensions = ['.com','.net','.us','.dog'];

 
 for (let elm of pronoun){
    for (let elm1 of adj){
      for (let elm2 of noun){
        for (let elm3 of extensions){
          let result = elm + elm1 + elm2 + elm3;
          console.log(result);
          document.querySelector('#DomainName').innerHTML += "<li>" + result + "</li>";
        }
      }
    }
  }


 
  

};
