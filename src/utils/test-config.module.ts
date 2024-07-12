import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import axios from 'axios';

const mockConfig = { aws: { s3: { region: '', accessId: '', accessKey: '' } } };

@Module({
  imports: [ConfigModule.forRoot({ load: [() => mockConfig] }), HttpModule],
  providers: [
    ConfigService,
    { provide: 'AXIOS_INSTANCE_TOKEN', useValue: axios.create() },
    { provide: 'CONFIGURATION(config)', useValue: mockConfig },
  ],
  exports: [ConfigService, 'CONFIGURATION(config)', HttpModule],
})
export class TestConfigModule {}
