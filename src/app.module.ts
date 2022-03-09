import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CostumersModule } from './costumers/costumers.module';

@Module({
  imports: [ProductsModule, CostumersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
