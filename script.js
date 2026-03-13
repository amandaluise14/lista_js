// console.log("Hello World!");

// let nome = "Amanda";
// console.log(nome);

// const pi = 3.14;
// console.log(pi);

// let n1 = 1;
// let n2 = 2;
// console.log(n1 + n2);

// function saudacao() {
//     console.log("Olá meu nome é " + nome);
// };

// function somar(n3,n4){
//  console.log(n3 + n4);
// };

// saudacao();
// somar(10,4);

function somarNumeros(){

    let soma = 0;
    let continuar = true;

    while(continuar){
        let numero = parseFloat(prompt("Digite um número (ou digite '0' para encerrar); "));

        if (isNaN(numero)){
            alert("Por favor, dogite um número válido!");
        } else{
            soma += numero;
            console.log(soma);
        } 

        continuar = confirm("Deseja adicionar mais um número?");       
    }

    alert("A soma dos números é: " + soma);
    console.log("A soma dos números é: " + soma)
}

somarNumeros();

