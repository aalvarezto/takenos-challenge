import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  PORT: Joi.number().port().default(3000),
  COIN_MARKET_API_KEY: Joi.string()
    .uuid()
    .message('please provide a valid api key provided by coinmarket'),
});
