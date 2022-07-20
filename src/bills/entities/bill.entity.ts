import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  billDate: number;
  @Column()
  paidDate: number;
  @Column()
  units: number;
  @Column()
  amount: number;

  @AfterInsert()
  insert() {
    console.log(`insterted user with id ${this.id}`);
  }

  @AfterRemove()
  remove() {
    console.log(`removed user with id ${this.id}`);
  }

  @AfterUpdate()
  update() {
    console.log(`updated user with id ${this.id}`);
  }
}
