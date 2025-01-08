import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { College } from './college.entity';

@Entity()
export class CollegeWiseCourse {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => College, (college) => college.courses)
  college: College;

  @Column()
  course_name: string;

  @Column({ type: 'int' })
  course_duration: number;

  @Column({ type: 'float' })
  course_fee: number;
}
