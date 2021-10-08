import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { LanguageService } from '../services/Language.service';

@Injectable()
export class LanguageMiddleware implements NestMiddleware {
  constructor(private languageService: LanguageService) {}

  async use(
    req: Request<void, void, void, { lang?: string }>,
    res: Response,
    next: NextFunction,
  ) {
    await this.languageService.setCurrentLanguageCode(req.query.lang);
    next();
  }
}
