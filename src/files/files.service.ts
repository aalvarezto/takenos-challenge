import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import configuration from '../config/configuration';

@Injectable()
export class FilesService {
  readonly s3 = new AWS.S3({
    accessKeyId: this.config.aws.s3.accessId,
    secretAccessKey: this.config.aws.s3.accessKey,
    region: this.config.aws.s3.region,
  });

  constructor(
    @Inject(configuration.KEY)
    private readonly config: ConfigType<typeof configuration>,
  ) {}

  public upload(file: Express.Multer.File) {
    const { originalname } = file;

    return this.s3
      .upload({
        Bucket: this.config.aws.s3.bucket,
        Key: String(originalname),
        Body: file.buffer,
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
