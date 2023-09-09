// role-permission-mapping.entity.ts

import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { RoleEntity } from './role.entity';
import { PermissionsEntity } from './permissions.entity';

@Entity('role_permission_mapping')
export class RolePermissionMappingEntity {
  @PrimaryGeneratedColumn()
  mapping_id: number;

  @ManyToOne(() => RoleEntity, (role) => role.roleMappings)
  role: RoleEntity;

  @ManyToOne(() => PermissionsEntity, (permission) => permission.permission_id)
  permission: PermissionsEntity;
}
