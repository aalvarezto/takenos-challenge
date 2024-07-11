import { Controller, Get, Param } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('test-api')
  findAll() {
    return this.reportsService.testApi();
  }

  @Get()
  findTopFive() {
    return this.reportsService.findTopFive();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.reportsService.findById(+id);
  }
}
