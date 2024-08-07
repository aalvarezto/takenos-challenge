import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CoinByIdParamDto } from './dto';
import { EnvironmentGuard } from '../guards/enviroment.guard';

@ApiTags('Reports')
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('test-api')
  @UseGuards(EnvironmentGuard)
  @ApiOperation({ summary: 'testing endpoint' })
  findAll() {
    return this.reportsService.testApi();
  }

  @Get()
  @ApiOperation({ summary: 'Provides top 5 criptocurrencies info.' })
  findTopFive() {
    return this.reportsService.findTopFive();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Provides info of specified criptocurrency.' })
  findById(@Param() params: CoinByIdParamDto) {
    return this.reportsService.findById(params.id);
  }
}
