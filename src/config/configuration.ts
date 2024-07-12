import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  service: {
    coinMarket: {
      key: process.env.COIN_MARKET_API_KEY,
      baseUrl: process.env.COIN_MARKET_BASE_URL,
      listings: process.env.COIN_MARKET_LISTINGS,
      quotes: process.env.COIN_MARKET_QUOTES,
    },
    criptoYa: {
      baseUrl: process.env.CRIPTO_YA_BASE_URL,
      exchange: process.env.CRIPTO_YA_EXCHANGE,
    },
  },
  aws: {
    s3: {
      accessId: process.env.AWS_S3_ACCESS_ID,
      accessKey: process.env.AWS_S3_ACCESS_KEY,
      region: process.env.AWS_S3_REGION,
      bucket: process.env.AWS_S3_BUCKET,
    },
  },
}));
