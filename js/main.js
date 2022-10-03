var op1, op2, signo,resultado;
op1 = parseInt(prompt("Introduce el primer operando"));
op2 = parseInt(prompt("Introduce el segundo operando"));
signo = prompt("Introduce el signo aritmético");
switch (signo) {
    case "+":
        resultado=op1+op2;
        break;
    case "-":
        resultado=op1-op2;
        break;
    case "*":
        resultado=op1*op2;
        break;
    case "/":
        resultado=op1/op2;
        break;
    case "%":
        resultado=op1%op2;
        break;

    case "^":
        resultado=op1**op2;
        break;
        default:
            console.log("Uno de los operandos no es un número o no has introducido un simbolo aritmético");
            break;
}
alert("Resultado: "+resultado);