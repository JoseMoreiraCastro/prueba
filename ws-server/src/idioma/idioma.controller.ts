import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { IdiomaService } from './idioma.service';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';
import { Idioma } from './entities/idioma.entity';

@Controller('idioma')
export class IdiomaController {
  constructor(private readonly idiomaService: IdiomaService) {}

  @Post()
  create(@Body() createIdiomaDto: CreateIdiomaDto) {
    return this.idiomaService.create(createIdiomaDto);
  }

  @Get()
  findAll() {
    return this.idiomaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.idiomaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIdiomaDto: UpdateIdiomaDto) {
    return this.idiomaService.update(+id, updateIdiomaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.idiomaService.remove(+id);
  }
}
