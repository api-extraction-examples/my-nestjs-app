import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  getAdmin(): string {
    return 'Retrieving admin... :)';
  }
}
