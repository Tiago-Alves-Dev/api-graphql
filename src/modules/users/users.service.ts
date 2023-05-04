import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './inputs/create-user.input';
import { UpdateUserInput } from './inputs/update-user.input';
import { UserDto } from './dto/user.dto';
import { UserRepository } from 'src/shared/repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private repository: UserRepository) {}
  async create(data: Partial<UserDto>): Promise<UserDto> {
    const user = await this.repository.create(data);
    return user;
  }

  async findAll(): Promise<UserDto[]> {
    return await this.repository.findAll({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(userId: string): Promise<UserDto> {
    const user = await this.repository.findOne({ where: { userId } });

    if (!user) {
      throw new NotFoundException('USER_NOT_FOUND');
    }

    return user;
  }

  async update(userId: string, data: Partial<UserDto>): Promise<Boolean> {
    const user = await this.repository.findOne({ where: { userId } });

    if (!user) {
      throw new NotFoundException('USER_NOT_FOUND');
    }

    await this.repository.update(
      { userId },
      {
        updatedBy: userId,
        ...data,
      },
    );

    return true;
  }

  async remove(userId: string): Promise<Boolean> {
    const user = await this.repository.findOne({ where: { userId } });

    if (!user) {
      throw new NotFoundException('USER_NOT_FOUND');
    }

    await this.repository.delete({ userId });

    return true;
  }
}
