// user-app-mapping.entity.ts

import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';
import { ApplicationEntity } from './application.entity';

@Entity('user_app_mapping')
export class UserAppMappingEntity {
  @PrimaryGeneratedColumn()
  mapping_id: number;

  @ManyToOne(() => UserEntity, (user) => user.appMappings)
  user: UserEntity;

  @ManyToOne(() => ApplicationEntity, (app) => app.app_id)
  app: ApplicationEntity;
}
