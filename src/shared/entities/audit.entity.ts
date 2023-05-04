import {
  BeforeInsert,
  BeforeRemove,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class AuditEntity {
  @CreateDateColumn({ name: 'CREATED_AT' })
  createdAt: string;

  @UpdateDateColumn({ name: 'UPDATED_AT' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'DELETED_AT', select: false })
  deletedAt: string;

  @Column({ name: 'CREATED_BY', default: 'system' })
  createdBy: string;

  @Column({ name: 'UPDATED_BY', default: 'system' })
  updatedBy: string;

  @Column({ name: 'DELETED_BY', default: 'system' })
  deletedBy: string;

  @BeforeInsert()
  protected beforeInsert() {
    this.createdBy = this.createdBy ?? 'system';
  }

  @BeforeUpdate()
  protected beforeUpdate() {
    this.updatedBy = this.updatedBy ?? 'system';
  }

  @BeforeRemove()
  protected beforeRemove() {
    this.deletedBy = this.deletedBy ?? 'system';
  }
}
