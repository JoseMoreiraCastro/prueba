import { Module } from '@nestjs/common';
import { MensajesWsService } from './mensajes-ws.service';
import { MensajesWsGateway } from './mensajes-ws.gateway';
import { IdiomaModule } from '../idioma/idioma.module';
//  'src/estudiante/estudiante.module';

@Module({
  providers: [MensajesWsGateway, MensajesWsService],
  imports:[IdiomaModule]
})
export class MensajesWsModule {}
