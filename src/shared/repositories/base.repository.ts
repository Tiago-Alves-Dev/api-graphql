import { Injectable } from '@nestjs/common';
import {
  DeepPartial,
  FindConditions,
  FindManyOptions,
  FindOneOptions,
  RemoveOptions,
  Repository,
  SaveOptions,
} from 'typeorm';

@Injectable()
export abstract class BaseRepository<T> {
  constructor(readonly repository: Repository<T>) {}

  async create(input: any): Promise<T> {
    const data: any = this.repository.create(input);
    const result = await this.repository.save(data);
    return result as unknown as T;
  }

  async findAll(options: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(options);
  }

  async count(options: FindManyOptions<T>): Promise<number> {
    return await this.repository.count(options);
  }

  async findAndCount(options: FindManyOptions<T>): Promise<[T[], number]> {
    return await this.repository.findAndCount(options);
  }

  async softRemove(entity: DeepPartial<T>, options?: SaveOptions & { reload: false }) {
    return await this.repository.softRemove(entity, options);
  }

  async findOne(options: FindOneOptions<T>): Promise<T> {
    return this.repository.findOne(options);
  }

  async update(criteria: FindConditions<T>, data: any) {
    return this.repository.update(criteria, data);
  }

  async delete(criteria: FindConditions<T>) {
    return this.repository.delete(criteria);
  }

  async remove(entity: T, options?: RemoveOptions): Promise<T> {
    return this.repository.remove(entity, options);
  }
}
