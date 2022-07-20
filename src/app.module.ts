import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillsModule } from './bills/bills.module';
import { Bill } from './bills/entities/bill.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Bill],
      synchronize: true,
    }),
    BillsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
