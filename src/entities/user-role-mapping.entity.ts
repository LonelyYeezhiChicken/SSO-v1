// user-role-mapping.entity.ts

import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';
import { RoleEntity } from './role.entity';

@Entity('user_role_mapping')
export class UserRoleMappingEntity {
  @PrimaryGeneratedColumn()
  mapping_id: number;

  @ManyToOne(() => UserEntity, (user) => user.roleMappings)
  user: UserEntity;

  @ManyToOne(() => RoleEntity, (role) => role.role_id)
  role: RoleEntity;
}
