import { ObjectType, Field, Int } from '@nestjs/graphql';
import { AuditEntity } from 'src/shared/entities/audit.entity';
import { Column, Index, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class UserEntity extends AuditEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'USER_ID' })
  userId: string;

  @Index('user-name-idx')
  @Column({ name: 'NAME' })
  name: string;

  @Index('user-email-idx')
  @Column({ name: 'EMAIL', unique: true })
  email: string;

  @Column({ name: 'PASSWORD' })
  password: string;

  @Column({ name: 'ISACTIVE', default: false })
  isActive: boolean;

  @Index('user-cpf-idx')
  @Column({ name: 'CPF', unique: true })
  cpf: string;

  @Column({ name: 'PHONE', unique: true })
  phone: string;
}
