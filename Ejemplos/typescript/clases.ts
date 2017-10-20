import { Beagle } from './Beagle';

let quinn = new Beagle('Quinn');
let ladrido : string = quinn.ladrar();

let dogo : Beagle = new Beagle('Dogo');

class Persona {
    public beagles : Beagle[];
}