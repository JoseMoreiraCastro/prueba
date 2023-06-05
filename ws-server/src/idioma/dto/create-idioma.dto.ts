import { IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateIdiomaDto {
    @IsString()
    @IsNotEmpty()
    identificacion:string;

    @IsString()
    @IsNotEmpty()
    nombre:string;
}
