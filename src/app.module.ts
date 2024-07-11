import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './config';
import { CoinMarketModule } from './coin-market/coin-market.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      envFilePath: '.env',
      validationSchema,
    }),
    CoinMarketModule,
  ],
})
export class AppModule {}
