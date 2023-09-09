// session.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('session_table')
export class SessionEntity {
  @PrimaryGeneratedColumn()
  session_id: number;

  @ManyToOne(() => UserEntity, (user) => user.sessions)
  user: UserEntity;

  @Column({ nullable: false })
  start_time: Date;

  @Column({ nullable: false })
  expiration_time: Date;
}
