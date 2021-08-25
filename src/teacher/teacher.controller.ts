import { Controller, Get, Param } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.tdo';
import { TeacherService } from './teacher.service';

@Controller('/teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return this.teacherService.getTeachers();
  }

  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId') teacherId: string,
  ): FindTeacherResponseDto {
    return this.teacherService.getTeacherById(teacherId);
  }
}
