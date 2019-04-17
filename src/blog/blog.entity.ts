import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column({ length: 255 })
  abstract: string;

  @Column('text')
  content: string;

  @Column()
  time: Date;

  @Column()
  label: string;
}