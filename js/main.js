"use strict";

const firstName = prompt("Inserisci il tuo nome");
const lastName = prompt("Inserisci il tuo cognome");
const favoriteColor = prompt("Inserisci il tuo colore preferito");
const password = firstName + lastName + favoriteColor + 76;
console.log(password);

document.querySelector("h3").innerHTML = password