import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { ProductsController } from './products/products.controller';

@Module({
  providers: [ClientsService],
  controllers: [ClientsController, ProductsController],
})
export class ClientsModule {}
