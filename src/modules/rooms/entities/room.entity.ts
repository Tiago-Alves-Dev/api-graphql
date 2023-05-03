import { AuditEntity } from 'src/modules/shared/entities/audit.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ name: 'PERIOD' })
  period: string;

  @Column({ name: 'HOUR_START', type: 'time', nullable: true })
  hourStart?: string;

  @Column({ name: 'HOUR_END', type: 'time', nullable: true })
  hourEnd?: string;

  @Column({ name: 'IS_ACTIVE', default: true })
  isActive: boolean;
}
