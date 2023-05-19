import { ObjectType, Field, Int } from '@nestjs/graphql';
import { RoomEntity } from 'src/shared/entities';
import { AuditEntity } from 'src/shared/entities/audit.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('STUDENT')
export class StudentEntity extends AuditEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'STUDENT_ID' })
  studentId: string;

  @Column({ name: 'ROOM_ID' })
  roomId: string;

  @Index('student-registration-idx')
  @Column({ name: 'REGISTRATION' })
  registration: string;

  @Index('student-name-idx')
  @Column({ name: 'NAME' })
  name: string;

  @Column({ name: 'AGE' })
  age: number;

  @Column({ name: 'BIRTH' })
  birth: Date;

  @Index('student-email-idx')
  @Column({ name: 'EMAIL', unique: true })
  email: string;

  @Index('student-phone-idx')
  @Column({ name: 'PHONE', unique: true })
  phone: string;

  @Column({ name: 'MOTHER' })
  mother: string;

  @Column({ name: 'FATHER' })
  father: string;

  @Column({ name: 'PHONTO', nullable: true })
  photo?: string;

  @Index('student-cpf-idx')
  @Column({ name: 'CPF', unique: true })
  cpf: string;

  @Column({ name: 'ADDRESS', nullable: true })
  address?: string;

  @Column({ name: 'ADDRESS_NUMBER', nullable: true })
  addressNumber?: string;

  @Column({ name: 'ADDRESS_COMPLEMENT', nullable: true })
  addressComplement?: string;

  @Column({ name: 'ZIPCODE', nullable: true })
  zipcode?: string;

  @Column({ name: 'CITY', nullable: true })
  city?: string;

  @Column({ name: 'STATE', nullable: true })
  state?: string;

  @Column({ name: 'ISACTIVE', default: false })
  isActive: boolean;

  /**
   * ENTITY RELATIONS
   */

  @ManyToOne(() => RoomEntity, (room) => room.students)
  @JoinColumn({ name: 'ROOM_ID', referencedColumnName: 'roomId' })
  room?: RoomEntity;
}
