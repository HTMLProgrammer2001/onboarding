import { Module } from '@nestjs/common';
import { IncorporationController } from './incorporation.controller';
import { SequelizeModule } from '@nestjs/sequelize';

import { Incorporation } from './incorporation.model';
import { IncorporationMapper } from './incorporation.mapper';
import { SharedModule } from '../../common/shared.module';
import { IncorporationService } from './incorporation.service';

@Module({
  controllers: [IncorporationController],
  imports: [SharedModule, SequelizeModule.forFeature([Incorporation])],
  providers: [IncorporationService, IncorporationMapper],
})
export class IncorporationModule {}
