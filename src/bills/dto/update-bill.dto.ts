import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { CreateBillDto } from './create-bill.dto';

export class UpdateBillDto extends PartialType(CreateBillDto) {
  @IsOptional()
  @ApiProperty()
  @IsNumber()
  billDate: number;
  @IsOptional()
  @ApiProperty()
  @IsNumber()
  paidDate: number;
  @IsOptional()
  @ApiProperty()
  @IsNumber()
  units: number;
  @IsOptional()
  @ApiProperty()
  @IsNumber()
  amount: number;
}
