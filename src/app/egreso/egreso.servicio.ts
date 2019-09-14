import { Egreso } from './egreso.model'

export class EgresoServicio{
  egresos:Egreso[] = [];

  eliminar(egreso:Egreso){
    const indice:number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }
}