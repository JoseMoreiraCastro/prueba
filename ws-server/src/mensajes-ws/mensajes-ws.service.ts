import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { Idioma } from '../idioma/entities/idioma.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IdiomaService } from 'src/idioma/idioma.service';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       idioma: Idioma
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Idioma)
     private readonly idiomaRepository: Repository<Idioma>,
     private readonly idiomaService: IdiomaService
      ){}

    async registerClient(client:Socket, name: string){
        console.log(this.idiomaService.prueba());
        const idioma =await  this.idiomaRepository.findOneBy({ nombre: name });
        if (!idioma) throw new Error('Idioma no encontrado');
        if (!idioma.estado) throw new Error('No activo');

        
        this.connectedClients[client.id]= {socket:client, idioma: idioma};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getStudentFullName(id:string){
        return this.connectedClients[id].idioma.nombre;
    }
}
