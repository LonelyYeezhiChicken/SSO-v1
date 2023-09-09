// entities.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { SessionEntity } from './session.entity';
import { TokenEntity } from './token.entity';
import { ApplicationEntity } from './application.entity';
import { UserAppMappingEntity } from './user-app-mapping.entity';
import { AuditLogEntity } from './audit-log.entity';
import { RoleEntity } from './role.entity';
import { PermissionsEntity } from './permissions.entity';
import { UserRoleMappingEntity } from './user-role-mapping.entity';
import { RolePermissionMappingEntity } from './role-permission-mapping.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      SessionEntity,
      TokenEntity,
      ApplicationEntity,
      UserAppMappingEntity,
      AuditLogEntity,
      RoleEntity,
      PermissionsEntity,
      UserRoleMappingEntity,
      RolePermissionMappingEntity,
    ]),
  ],
  exports: [
    TypeOrmModule.forFeature([
      UserEntity,
      SessionEntity,
      TokenEntity,
      ApplicationEntity,
      UserAppMappingEntity,
      AuditLogEntity,
      RoleEntity,
      PermissionsEntity,
      UserRoleMappingEntity,
      RolePermissionMappingEntity,
    ]),
  ],
})
export class EntitiesModule {}
