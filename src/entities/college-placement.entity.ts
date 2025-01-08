import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { College } from './college.entity';

@Entity()
export class CollegePlacement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => College, (college) => college.placements)
  college: College;

  @Column()
  year: number;

  @Column({ type: 'float' })
  highest_placement: number;

  @Column({ type: 'float' })
  average_placement: number;

  @Column({ type: 'float' })
  median_placement: number;

  @Column({ type: 'float' })
  placement_rate: number;
}
