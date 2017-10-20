interface INombrable {
    nombre: string;
}

class Persona implements INombrable {
    nombre: string;

    saludar() : string {
        return `Hola, soy ${this.nombre}!!`;
    }
}

function saludar(n: INombrable) : void {
    alert(`Hola, soy ${n.nombre}!!`);
}

let quinn = {
    nombre: 'Quinn'
};

saludar(quinn);