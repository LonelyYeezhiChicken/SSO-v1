// token.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('token_table')
export class TokenEntity {
  @PrimaryGeneratedColumn()
  token_id: number;

  @ManyToOne(() => UserEntity, (user) => user.tokens)
  user: UserEntity;

  @Column({ length: 50, nullable: false })
  token_type: string;

  @Column({ length: 255, nullable: false })
  token_value: string;

  @Column({ nullable: false })
  expiration_time: Date;
}
