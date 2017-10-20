let miString : string = 'hola';

miString = 'hola si';


let miNumero : number = 5;

miNumero = 10 / 2;

let miBooleano : boolean = true;

function suma(a: number, b: number) : number {
    return a + b;
}

function agregarAUnArray(arr: Array<Number>, element: number) : void {
    arr.push(element);
}

suma(1,2);

//suma("a", "b");

let miArrayDeNumeros : number[] = [1,2,3];

let miArrayDeNumeros2 : Array<Number> = [1,2,3];

miArrayDeNumeros.push(1);