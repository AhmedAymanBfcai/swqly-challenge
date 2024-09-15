import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string; // Changed from number to string for UUID

  // @PrimaryGeneratedColumn()
  // id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  balance: number;
}

