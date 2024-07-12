import { ConfigType } from '@nestjs/config';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import configuration from '../config/configuration';

@Injectable()
export class FilesService {
  readonly s3 = new AWS.S3({
    region: this.config.aws.s3.region,
    accessKeyId: this.config.aws.s3.accessId,
    secretAccessKey: this.config.aws.s3.accessKey,
  });

  constructor(
    @Inject(configuration.KEY)
    private readonly config: ConfigType<typeof configuration>,
  ) {}

  public upload(file: Express.Multer.File) {
    return this.s3
      .upload({
        Key: file.originalname,
        Body: file.buffer,
        Bucket: this.config.aws.s3.bucket,
        ContentType: file.mimetype,
        ContentDisposition: 'inline',
      })
      .promise()
      .catch((e) => {
        if (e.statusCode) {
          throw new HttpException(e.message, e.statusCode);
        }

        throw new HttpException(
          'An error occurred while uploading the file',
          400,
        );
      });
  }
}
