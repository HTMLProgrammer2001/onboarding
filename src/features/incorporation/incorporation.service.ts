import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { Incorporation } from './incorporation.model';
import { Translate } from '../../common/models/Translate.model';
import { IPaginator } from '../../common/interfaces/IPaginator.interface';
import { convertResultToPaginator } from '../../common/utils/functions';
import { LanguageService } from '../../common/services/Language.service';

@Injectable()
export class IncorporationService {
  constructor(
    @InjectModel(Incorporation)
    private incorporationModel: typeof Incorporation,
    private langService: LanguageService,
  ) {}

  async findAll(): Promise<Incorporation[]> {
    return this.incorporationModel.findAll();
  }

  async getById(id: number): Promise<Incorporation> {
    return this.incorporationModel.findOne({ where: { id } });
  }

  async getForDropdown(
    name: string,
    page: number,
    pageSize: number,
  ): Promise<IPaginator<Incorporation>> {
    return this.incorporationModel
      .findAndCountAll({
        include: [
          {
            model: Translate,
            where: {
              languageId: await this.langService.getLanguageId(),
              value: { [Op.like]: `%${name}%` },
            },
            attributes: ['value'],
          },
        ],
        attributes: ['id'],
        offset: (page - 1) * pageSize,
        limit: pageSize,
      })
      .then((result) => convertResultToPaginator(result, pageSize, page));
  }
}
