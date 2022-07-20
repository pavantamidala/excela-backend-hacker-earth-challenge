import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateBillDto {
  @ApiProperty()
  @IsNumber()
  billDate: number;
  @ApiProperty()
  @IsNumber()
  paidDate: number;
  @ApiProperty()
  @IsNumber()
  units: number;
  @ApiProperty()
  @IsNumber()
  amount: number;
}
