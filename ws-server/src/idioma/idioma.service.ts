import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';
import { Idioma } from './entities/idioma.entity';

@Injectable()
export class IdiomaService {

  private idioma: Idioma[]=[
    {id:1, identificacion:'1', nombre:'Uno', estado:true},
    {id:2, identificacion:'2', nombre:'Dos', estado:true},
  ]
  idiomas: (Idioma | typeof Idioma)[];


  create(createIdiomaDto: CreateIdiomaDto) {
    const idioma = new Idioma();
    idioma.id=  Math.max( ... this.idioma.map(elemento => elemento.id),0 )+1 ;
    idioma.nombre= createIdiomaDto.nombre;
    this.idioma.push(idioma);
    return Idioma;
  }

  findAll() : Idioma[] {
    return this.idioma;
  }

  findOne(id: number) {
    const idioma =  this.idioma.find(idioma=> idioma.id===id);
    if (!idioma) throw new NotFoundException(`ID ${id} not found`)
    return Idioma;
  }

  update(id: number, updateIdiomaDto: UpdateIdiomaDto) {
    const { identificacion, nombre, estado   } = updateIdiomaDto;
    const idioma = this.findOne(id);
    if (nombre) idioma.nombre= nombre;
    if (estado!= undefined) idioma.estado= estado;

    this.idiomas =  this.idioma.map( elemento=> {
      if (elemento.id===id) return idioma;
      return elemento;
    } )

    return idioma;
  }

  remove(id: number) {
    this.findOne(id);
    this.idiomas =  this.idioma.filter(elemento=> elemento.id!== id);
  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }
}
