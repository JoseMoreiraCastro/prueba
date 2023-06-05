import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Idioma {
    id:number;
    identificacion:string;
    nombre:string;
    estado:boolean;
  static nombre: string;
  static estado: boolean;
}

