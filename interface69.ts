interface Persona {
    nombre: string;
    dameNombre(): void;
}
interface Casa {
    direccion: string;
    dameDireccion(): void;
}

abstract class Empleado implements Persona, Casa {
    nombre: string;
    direccion: string;
    static empresa: string;

    abstract datosEmpleado(): void;

    static datosEmpresa(): void {
        console.log(Empleado.empresa);
    }

    dameNombre(): void {
        console.log("Nombre: " + this.nombre);
    }

    dameDireccion(): void {
        console.log("Direccion: " + this.direccion);
    }

}

class General extends Empleado {
    nombre: string;;
    direccion: string;

    datosEmpleado(): void {
        console.log("Mis datos--> " + this.nombre + " " + this.direccion);
    }

}

Empleado.empresa = "Jap Software S.L";
General.datosEmpresa();

let general = new General();
general.direccion = "Mi casa";
general.nombre = "Juan";

general.dameDireccion();
general.dameNombre();
general.datosEmpleado();




