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

@Controller('clients/:client_id')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get('/products')
  async get() {
    return this.productService.findAll();
  }

  @Get('/products/:product_id')
  async getById(@Param('client_id') clientId, @Param('product_id') productId) {
    console.log(`Client id: ${clientId}; Product id: ${productId}`);
    return this.productService.findAll();
  }

  @Post('/products')
  async create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Put('/products/:product_id')
  async update(@Param('product_id') productId, @Body() product: Product) {
    return this.productService.update(product);
  }

  @Delete('/products/:product_id')
  async delete(@Param('product_id') id: string) {
    return this.productService.delete(id);
  }
}
