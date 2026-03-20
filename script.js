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

function exercicio1() {

    let soma = 0;
    let continuar = true;

    while (continuar) {
        let numero = parseFloat(prompt("Digite um número (ou digite '0' para encerrar); "));

        if (isNaN(numero)) {
            alert("Por favor, dogite um número válido!");
        } else {
            soma += numero;
        }

        continuar = confirm("Deseja adicionar mais um número?");
    }

    alert("A soma dos números é: " + soma);
    console.log("A soma dos números é: " + soma)
}

// exercicio1();

function exercicio2() {
    console.log("Contagem regressiva para lançamento!");
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
    {
        console.log("Lançamento realizado!");
    }
}

// exercicio2();

function exercicio3(){
   let ganhoAnual = 0;
   let gastoAnual = 0;
   
   for(let i = 1; i <= 12; i++){
    let ganhoMes = parseFloat(prompt("Digite o ganho bruto do mês " + i));
    let gastoMes = parseFloat(prompt("Digite o gasto do mês " + i));

    ganhoAnual += ganhoMes;
    gastoAnual += gastoMes;
   }

   let saldoAnual = ganhoAnual - gastoAnual;

    console.log("Ganho bruto Anual: " + ganhoAnual);
    console.log("Gasto Anual: " + gastoAnual);
    console.log("Saldo financeiro Anual: " + saldoAnual); 
    
    if(gastoAnual > ganhoAnual){
        alert("A empresa teve prejuízo");
    }else if(gastoAnual < ganhoAnual){
        alert("A empresa teve lucro");
    }else{
        alert("A empresa não teve lucro e nem prejuízo");
    }
}
// exercicio3();

function exercicio4(){

    let n1 = parseInt(prompt("Digite um número inteiro"));
    let n2 = parseInt(prompt("Digite um número inteiro"));
    let n3 = parseInt(prompt("Digite um número inteiro"));
    let n4 = parseInt(prompt("Digite um número inteiro"));

    let numeros = [n1, n2 , n3, n4];

    // numeros.push(Number(prompt("Digite um número inteiro")));

    numeros.sort((a,b) => b - a);

    alert("Ordem decrescente: " + numeros);
    
}
// exercicio4();

function exercicio5(){ 

    let numero = parseInt(prompt("Digite um número inteiro"));

    if(numero % 2 == 0){
        numero += 1;
    }else{
        numero -= 1;
    }

    alert("Valor final: " + numero);
}
// exercicio5();

function exercicio6(){

     let letra = prompt("Digite uma letra do alfabeto");

     if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        console.log("A sua letra escolhida é uma vogal.");
     }else{
        console.log("A sua letra escolhida é uma consoante.");
     }
}
// exercicio6();

function exercicio7(){

    let sabor = prompt("a - Chocolate \nb - Morango \nc - Creme \nd - Manga \ne - Melancia \nf - Vanilla Ice \ng - Céu Azul \nh - Brownie \ni - Hawaiano \nEscolha um sabor e digite seu código:");

    // switch (sabor) {
    // case "a":
    //     console.log("Chocolate - $1.50");
    //     break;
    // case "b":
    //     console.log("Morango - $2.50");
    //     break;
    // case "c":
    //     console.log("Creme - $2.50");
    //     break;
    // case "d":
    //     console.log("Manga - $3.20");
    //     break;
    // case "e":
    //     console.log("Melancia - $3.40");
    //     break;
    // case "f":
    //     console.log("Vanilla ice - $3.00");
    //     break;
    // case "g":
    //     console.log("Céu azul - $3.60");
    //     break;
    // case "h":
    //     console.log("Brownie - $4.00");
    //     break;
    // case "i":
    //     console.log("Hawaiano - $5.00");
    //     break;
       
    // default:
    //     console.log("código inválido");
    //}

    if(sabor == "a"){
        console.log("Chocolate R$ 1,50");
    }else if(sabor == "b"){
        console.log("Morango R$ 2,50");
    }else if(sabor == "c"){
        console.log("Creme R$ 2,50");
    }else if(sabor == "d"){
        console.log("Manga R$ 3,20");
    }else if(sabor == "e"){
        console.log("Melancia R$ 3,40");
    }else if(sabor == "f"){
        console.log("Vanilla Ice R$ 3,00");
    }else if(sabor == "g"){
        console.log("Céu Azul R$ 3,60");
    }else if(sabor == "h"){
        console.log("Brownie R$ 4,00");
    }else if(sabor == "i"){
        console.log("Hawaiano R$ 5,00");
    }else{
        console.log("Código inválido");
    }
}
// exercicio7();

function exercico8(){

    let var1 = 18;
    let var2 = 14;

    let diferenca = var1 - var2;
    console.log("A diferença entre as variáveis é: " + diferenca);

    let soma = (var1 * 2) + (var2 * 3);
    console.log("O dobro da primeira variável somado ao triplo da segunda é: " +soma);

    let multiplicacao = var1 * var2;
    console.log("A multiplicação das duas variáveis é: " + multiplicacao);

}
// exercico8();

function exercicio9(){

     let var1 = 20;
     let var2 = 4;

     if(var1 > var2){
        console.log(var2 + "," + var1);
     }else{
        console.log(var1 + "," + var2);
     }
}
// exercicio9();

function exercicio10(){

    let nome = prompt("Digite o seu nome:");
    let salario = parseFloat(prompt("Digite o seu salário bruto:"));

    let desconto = salario * 0.08;
    let diferenca = salario - desconto;

    console.log("Nome: " +nome);
    console.log("Salário bruto: " +salario);
    console.log("O valor do desconto do INSS é: " +desconto);
    console.log("Salário líquido: " +diferenca);
}
// exercicio10();

function exercicio11(){

    let nome = prompt("Digite o seu nome:");
    let salario = parseFloat(prompt("Digite o seu salário bruto:"));
    let desconto = 0;
    let diferenca = 0;
    let taxa = 0;

    if(salario <= 1000){
        taxa = 8;
        desconto = salario * 0.08;
        diferenca = salario - desconto;
    }else if(salario > 1000 && salario <= 1500){
        taxa = 8.5;
        desconto = salario * 0.085;
        diferenca = salario - desconto;
    }else if(salario > 1500){
        taxa = 9;
        desconto = salario * 0.09;
        diferenca = salario - desconto;
    }

    console.log("Nome: " +nome);
    console.log("Salário bruto:" +salario);
    console.log("Taxa de desconto:" + taxa + "%");
    console.log("O valor do desconto:" +desconto);
    console.log("Salário líquido:" +diferenca);
}
// exercicio11();