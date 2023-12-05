// 1) Scrivi un programma che stampi in console i numeri da 1 a 100,
// 2) ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// 3) Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
// 4) Prima di partire a scrivere codice poniamoci qualche domanda:
// 5) Come faccio a sapere se un numero è divisibile per un altro?
// 6) Abbiamo visto qualcosa di particolare che possiamo usare?
 //Consigli del giorno:
//1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"



//DICO A JAVA DI PRENDERMI IL ROW DALL'HTML
const row = document.querySelector ('.row'); //IL PUNTO VA MESSO XK E' COME SE SCRIVESSI NEL CSS
console.log('row', row, typeof row);

const myDiv2 = document.getElementById('myDiv2'); 
console.log('myDiv2', myDiv2, typeof myDiv2);


//SCRIVO IN CONSOL I NUMERI DA 1 A 100
for (let i = 1; i <= 100; i++) { //metto i<=100 perchè voglio fare il ciclo for 100 volte, dato che ho inizializzato la variabile i = 1;
    // se avessi inizializzato i = 0; e volevo che il ciclo si ripetesse 100 volte, dovevo mettere i<100, poichè il ciclo partiva con i = 0 e non con i = 1;
// i = 0  e i<100 --> ripeto il ciclo partendo da : i= 0 ,i=2, i=3, ...., fino a i=99 esco quando i =100;
// i = 1 e i <=100 --> ripeto il ciclo partendo da i=1,,i=2, i=3, ..., fino a i=  100, esco con i = 101;

//PER I MULTIPLI DI 3 E DI 5 DEVE STAMPARE FIZZBUZ ANZICHE' IL NUMERO

//if ha priorità sull'else if e sull'else, il primo else if ha priorità sul secondo else if e sull'else
//se la condizione di if è soddisfatta non controllerà le altre condizioni (else if e else)
//quindi è importante mettere la condizione che voglio che prevale su tutte in caso di condizione verificata dentro l'if
// la seconda condizione dentro lìelse if e la tutto quello che si deve verificare quando nessuna condizione viene rispettata dentro l'else
/* i % 3 restiutisce il resto della divisione i / 3
    se i = 3; -> i % 3 = 3(che sarebbe la i) / 3 = 0  con resto 0 -> ciò che restituisce i % 3 è il resto ovvero 0
    se i = 6; -> i % 3 = 6 (sarebbe la i) / 3 = 2 con resto 0 
    se i = 7; -> i % 3 = 7 ( sarebbe la i) / 3 = 2 con resto 1 
*/ 


if ((i % 3 == 0 && i % 5 == 0)){
        console.log('fizzBuz', i, typeof i);
        myDiv2.innerHTML += "fizzBuzz" + " ";
        
    } 

    //DICHIARO VARIABILE CHE MI CREI UN ELEMENTO ALL INTERNO DELL HTML
//PER I MULTIPLI DI 3 STAMPARE FIZZ AL POSTO DEL NUMERO
    else if (i % 3 == 0){
        console.log('fizz', i, typeof i);
        myDiv2.innerHTML += "fizz" + " ";
        

    }

//PER I MULTIPLI DI 5 STAMPARE BUZZ AL POSTO DEL NUMERO
    else if (i % 5 == 0){
        console.log('buzz', i, typeof i);
        myDiv2.innerHTML += "Buzz" + " ";


    }
    
//IL RESTANTE DEI NUMERI VANNO SCRITTI A NUMERO
    else{
        console.log('i', i, typeof i);
        myDiv2.innerHTML += i + " ";


    }    
}



