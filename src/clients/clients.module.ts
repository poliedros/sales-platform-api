import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ProductsModule } from './products/products.module';
import { ClientsController } from './clients.controller';

@Module({
  imports: [ProductsModule],
  providers: [ClientsService],
  controllers: [ClientsController],
})
export class ClientsModule {}
