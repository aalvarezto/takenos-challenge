import { Observable } from 'rxjs';
import { CanActivate, Injectable } from '@nestjs/common';

@Injectable()
export class EnvironmentGuard implements CanActivate {
  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    return process.env.NODE_ENV !== 'production';
  }
}
