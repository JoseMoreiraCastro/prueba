import {IsNotEmpty, IsString, } from "class-validator";

export class CreateIdiomaDto {
    @IsString()
    @IsNotEmpty()
    identificacion:string;

    @IsString()
    @IsNotEmpty()
    nombre:string;
}
