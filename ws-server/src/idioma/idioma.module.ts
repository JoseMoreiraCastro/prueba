import { Module } from '@nestjs/common';
import { IdiomaService } from './idioma.service';
import { IdiomaController } from './idioma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Idioma } from './entities/idioma.entity';

@Module({
  controllers: [IdiomaController],
  providers: [IdiomaService],
  imports:[ TypeOrmModule.forFeature([
    Idioma
  ]) ],
  exports:[ IdiomaService, TypeOrmModule ]
})
export class IdiomaModule {}
