import { Injectable } from '@nestjs/common';

export class Product {
  id: string;
  name: string;
  type: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  label: string;
  note: string;
  code: string;
}

@Injectable()
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      name: 'Water',
      type: 'Drinkable',
      description: 'A water for thirsty people',
      price: 1,
      quantity: 12,
      image: 'a image must go here',
      label: '123',
      note: 'Irish spring water',
      code: '1',
    },
    {
      id: '2',
      name: 'Coca cola',
      type: 'Drinkable',
      description: 'A liquid that will make you fat',
      price: 2,
      quantity: 12,
      image: 'a image must go here',
      label: '123',
      note: 'Irish Coca cola',
      code: '2',
    },
  ];

  async findAll(): Promise<Product[]> | undefined {
    return this.products;
  }

  async find(id: string): Promise<Product> | undefined {
    return this.products.find((product) => product.id === id);
  }

  async create(product: Product): Promise<Product> {
    this.products.push(product);
    return product;
  }

  async update(newProduct: Product): Promise<Product> {
    let product = this.products.find((old) => old.id == newProduct.id);
    product = newProduct;
    return product;
  }

  async delete(id: string): Promise<boolean> {
    this.products = this.products.filter((product) => product.id !== id);

    return true;
  }
}
