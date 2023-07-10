import { PartialType } from '@nestjs/mapped-types';
import { CreateIdiomaDto } from './create-idioma.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateIdiomaDto extends PartialType(CreateIdiomaDto) {

    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
