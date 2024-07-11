import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  PORT: Joi.number().port().default(3000),
  COIN_MARKET_API_KEY: Joi.string()
    .uuid()
    .message('please provide a valid api key provided by coinmarket'),
  HTTP_MAX_REDIRECTS: Joi.number().default(5),
  HTTP_TIMEOUT: Joi.number().default(30000),
});
