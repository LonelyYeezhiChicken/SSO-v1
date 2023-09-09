// audit-log.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('audit_log')
export class AuditLogEntity {
  @PrimaryGeneratedColumn()
  log_id: number;

  @ManyToOne(() => UserEntity, (user) => user.auditLogs)
  user: UserEntity;

  @Column({ length: 100, nullable: false })
  action: string;

  @Column({ nullable: false })
  timestamp: Date;
}
