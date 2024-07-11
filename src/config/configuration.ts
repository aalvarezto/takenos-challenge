import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  service: {
    coinMarket: {
      key: process.env.COIN_MARKET_API_KEY,
      baseUrl: process.env.COIN_MARKET_BASE_URL,
      listings: process.env.COIN_MARKET_LISTINGS,
    },
  },
}));
