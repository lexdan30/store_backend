import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({
    type: 'datetime',
    default: () => 'NOW()',
  })
  created: Date;

  @Column({
    type: 'datetime',
    default: () => 'NOW()',
  })
  update_at: Date;
}
