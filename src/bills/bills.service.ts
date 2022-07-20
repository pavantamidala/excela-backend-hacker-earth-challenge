import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Bill } from './entities/bill.entity';

@Injectable()
export class BillsService {
  constructor(@InjectRepository(Bill) private repo: Repository<Bill>) {}
  create(createBillDto: CreateBillDto) {
    const bill = this.repo.create(createBillDto);

    return this.repo.save(bill);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateBillDto: UpdateBillDto) {
    const bill = await this.findOne(id);

    if (!bill) {
      throw new NotFoundException('User Not Found');
    }
    Object.assign(bill, updateBillDto);
    console.log('updated' + bill['amount']);
    return this.repo.save(bill);
  }

  async remove(id: number) {
    const bill = await this.findOne(id);

    if (!bill) {
      throw new NotFoundException('User Not Found');
    }
    return this.repo.remove(bill);
  }
}
