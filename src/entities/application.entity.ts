// application.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('application_table')
export class ApplicationEntity {
  @PrimaryGeneratedColumn()
  app_id: number;

  @Column({ length: 100, nullable: false, unique: true })
  app_name: string;

  @Column({ length: 255, nullable: false })
  redirect_url: string;
}
