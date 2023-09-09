// role.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('role_table')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  role_id: number;

  @Column({ length: 50, nullable: false })
  role_name: string;
}
