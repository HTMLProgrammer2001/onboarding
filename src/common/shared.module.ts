import { Module } from '@nestjs/common';
import { LanguageService } from './services/Language.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Language } from './models/Language.model';
import { Translate } from './models/Translate.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Language, Translate])
  ],
  providers: [LanguageService],
  exports: [LanguageService],
})
export class SharedModule {}
