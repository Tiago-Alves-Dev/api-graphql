import { ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentsService } from './students.service';
import { StudentEntity } from './entities/student.entity';
import { CreateStudentInput } from './inputs/create-student.input';
import { UpdateStudentInput } from './inputs/update-student.input';
import { StudentDto } from './dto/student.dto';
import { CurrentUserGql } from '../auth/decorators/current-user-gql.decorator';
import { UserDto } from '../users/dto/user.dto';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';

@Resolver(() => StudentDto)
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => StudentDto)
  async createStudent(
    @Args('data') data: CreateStudentInput,
    @CurrentUserGql() user: UserDto,
  ): Promise<StudentDto> {
    const userCurrent = user['userId'];
    return await this.studentsService.create({
      ...data,
      createdBy: userCurrent,
    });
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [StudentDto])
  async students(): Promise<StudentDto[]> {
    return await this.studentsService.findAll();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => StudentDto)
  async student(
    @Args('studentId', ParseUUIDPipe) studentId: string,
  ): Promise<StudentDto> {
    return await this.studentsService.findOne(studentId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async updateStudent(
    @Args('studentId', ParseUUIDPipe) studentId: string,
    @Args('data') data: UpdateStudentInput,
    @CurrentUserGql() user: UserDto,
  ): Promise<Boolean> {
    const userCurrent = user['userId'];
    return await this.studentsService.update(studentId, {
      ...data,
      updatedBy: userCurrent,
    });
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async removeStudent(
    @Args('studentId', ParseUUIDPipe) studentId: string,
    @CurrentUserGql() user: UserDto,
  ): Promise<Boolean> {
    const userCurrent = user['userId'];
    return await this.studentsService.remove(studentId, userCurrent);
  }
}
