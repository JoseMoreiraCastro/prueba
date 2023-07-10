import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Idioma {
  @PrimaryGeneratedColumn('uuid')
  id:string;
  
  @Column('varchar',{unique:true})
  identificacion:string;

  @Column('varchar',{
      unique:true
  })
  nombre:string;

  @Column('boolean', {default:true})
  estado:boolean;
}

