import { StudentEntity } from 'src/shared/entities';
import { AuditEntity } from 'src/shared/entities/audit.entity';
import { RomPeriodEnum } from 'src/shared/enums/room-period.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ROOM')
export class RoomEntity extends AuditEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'ROOM_ID' })
  roomId: string;

  @Column({ name: 'NAME', unique: true })
  name: string;

  @Column({ name: 'DESCRIPTION' })
  description: string;

  @Column({ name: 'IMAGE', nullable: true })
  image?: string;

  @Column({
    name: 'PERIOD',
    type: 'enum',
    enum: RomPeriodEnum,
    default: RomPeriodEnum.MORNING,
  })
  period: RomPeriodEnum;

  @Column({ name: 'HOUR_START', type: 'time', nullable: true })
  hourStart?: string;

  @Column({ name: 'HOUR_END', type: 'time', nullable: true })
  hourEnd?: string;

  @Column({ name: 'IS_ACTIVE', default: true })
  isActive: boolean;

  /**
   * ENTITY RELATIONS
   */

  @OneToMany(() => StudentEntity, (student) => student.room)
  students?: StudentEntity[];
}
