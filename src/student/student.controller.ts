import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `Get Student with Id ${studentId}`;
  }

  @Post()
  createStudent(@Body() body) {
    return `Create Student With the Following data ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudent(@Param('studentId') studentId: string, @Body() body) {
    return `Update Student with id of ${studentId} With data of ${JSON.stringify(
      body,
    )}`;
  }
}
