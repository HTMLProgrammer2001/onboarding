import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Language } from '../models/Language.model';

@Injectable({ scope: Scope.REQUEST })
export class LanguageService {
  private currentLanguageId: number;

  constructor(@InjectModel(Language) private languageSrv: typeof Language) {}

  public getLanguageId() {
    return this.currentLanguageId;
  }

  public async setCurrentLanguageCode(code: string) {
    let language: Language = null;

    if (code) {
      language = await this.languageSrv.findOne({ where: { name: code } });
    }

    if (!language) {
      language = await this.languageSrv.findOne({ where: { isDefault: true } });
    }

    this.currentLanguageId = language.id;
  }
}
