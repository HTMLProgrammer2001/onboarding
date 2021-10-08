import { Module } from '@nestjs/common';
import { IncorporationController } from './incorporation.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Incorporation } from './incorporation.model';
import { IncorporationService } from './incorporation.service';
import { SharedModule } from '../../common/shared.module';

@Module({
  controllers: [IncorporationController],
  imports: [SequelizeModule.forFeature([Incorporation]), SharedModule],
  providers: [IncorporationService],
})
export class IncorporationModule {}
