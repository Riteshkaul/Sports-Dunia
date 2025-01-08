import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { City } from './city.entity.ts';
import { State } from './state.entity.ts';

@Entity()
export class College {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'int' })
  score: number;

  @ManyToOne(() => City, (city) => city.colleges)
  city: City;

  @ManyToOne(() => State, (state) => state.colleges)
  state: State;
}
