import { ObjectType, Field, Int, HideField } from '@nestjs/graphql';
import { hashPasswordTransform } from 'src/common/transformers/crypto-transform';
import { AuditEntity } from 'src/shared/entities/audit.entity';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USERS')
export class UserEntity extends AuditEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'USER_ID' })
  userId: string;

  @Index('user-name-idx')
  @Column({ name: 'NAME' })
  name: string;

  @Index('user-email-idx')
  @Column({ name: 'EMAIL', unique: true })
  email: string;

  @Column({
    transformer: hashPasswordTransform,
    name: 'PASSWORD',
  })
  @HideField()
  password: string;

  @Column({ name: 'ISACTIVE', default: false })
  isActive: boolean;

  @Column({ name: 'PHONE', unique: true })
  phone: string;

  @Column({ name: 'IMAGE', nullable: true })
  image?: string;
}
