"use strict";

// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, 
// basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// Definisco la lista della spesa
const shoppingList = [
    'Pane',
    'Cereali',
    'Pasta',
    'Yogurt',
    'Birra',
    'Gelato'
];

// Seleziono il container della lista della spesa
const listContainer = document.getElementById('list');

// Creo un ciclo WHILE degli elementi della lista e li stampo in HTML
let i = 0;

while ( i < shoppingList.length ) {
    console.log(shoppingList[i]);
    const listItem = document.createElement("li");
    listItem.innerHTML = shoppingList[i];
    listContainer.append(listItem);
    i++;
}