import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @Type(() => Number)
  price: number;

  // constructor(
  //   name: string,
  //   description: string,
  //   price: number,
  //   category: string,
  //   stock: number,
  // ) {
  //   this.name = name;
  //   this.description = description;
  //   this.price = price;
  // }
}
