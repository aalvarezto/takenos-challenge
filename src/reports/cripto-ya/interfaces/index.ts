import { CriptoYaService } from '../cripto-ya.service';

export * from './cripto-ya-res.interface';

export type ConvertionType = Awaited<
  ReturnType<CriptoYaService['addArsToOne']>
>;
