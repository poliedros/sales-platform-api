import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product, ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  async get() {
    return this.productService.findAll();
  }

  @Post()
  async create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Put()
  async update(@Body() product: Product) {
    return this.productService.update(product);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
