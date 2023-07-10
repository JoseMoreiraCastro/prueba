import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';
import { Idioma } from './entities/idioma.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class IdiomaService {

  private readonly logger = new Logger('IdiomaService');

  constructor( 
    @InjectRepository(Idioma) 
    private readonly idiomaRepository: Repository<Idioma>,

    ){}

  
  async create(createEstudianteDto: CreateIdiomaDto) {
    try {
      const idioma =  this.idiomaRepository.create(createEstudianteDto);
      await this.idiomaRepository.save(idioma);
      return idioma;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    
  }

  findAll() {
    return this.idiomaRepository.find({});
  }

  async findOne(id: string) {
    const idioma= await  this.idiomaRepository.findOneBy ({ id });
    if (!idioma)
      throw new NotFoundException(`Idioma ${id} no encontrado`);
    return idioma;

  }

  async update(id: string, updateIdiomaDto: UpdateIdiomaDto) {
    const idioma = await this.idiomaRepository.preload({
      id: id,
      ...updateIdiomaDto
    });
    if (!idioma) throw new NotFoundException(`Idioma ${id} no encontrado`)

    try {
      await  this.idiomaRepository.save(idioma)
      return idioma;
      
    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const idioma = await this.findOne(id);
    await this.idiomaRepository.remove(idioma);

  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }
}
