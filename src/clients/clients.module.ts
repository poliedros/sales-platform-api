import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { ItemsController } from './items/items.controller';
import { Client, ClientSchema } from './schemas/client.schema';
import { ItemFactory } from './providers/item.factory';

@Module({
  providers: [ClientsService, ItemFactory],
  controllers: [ClientsController, ItemsController],
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
  ],
})
export class ClientsModule {}
