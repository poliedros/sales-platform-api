import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { ItemsController } from './items/items.controller';

@Module({
  providers: [ClientsService],
  controllers: [ClientsController, ItemsController],
})
export class ClientsModule {}
