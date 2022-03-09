import { Module } from '@nestjs/common';
import { CostumersService } from './costumers.service';
import { CostumersController } from './costumers.controller';

@Module({
  providers: [CostumersService],
  controllers: [CostumersController],
})
export class CostumersModule {}
