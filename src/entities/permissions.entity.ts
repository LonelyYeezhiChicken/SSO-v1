// permissions.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('permissions_table')
export class PermissionsEntity {
  @PrimaryGeneratedColumn()
  permission_id: number;

  @Column({ length: 100, nullable: false, unique: true })
  permission_name: string;
}
