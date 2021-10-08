import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { IncorporationMapper } from './incorporation.mapper';
import { IPaginatedResponse } from '../../common/interfaces/IPaginatedResponse.interface';
import { GetIncorporationListDto } from './dto/getIncorporationList.dto';
import { StatusEnum } from '../../common/constants/Status.enum';
import { IncorporationService } from './incorporation.service';

@Controller('incorporation')
export class IncorporationController {
  constructor(
    private incorporationRepository: IncorporationService,
    private incorporationMapper: IncorporationMapper,
  ) {}

  @Get('dropdown')
  async getDropdown(
    @Query('page', ParseIntPipe) page: number,
    @Query('size', ParseIntPipe) size: number,
    @Query('name') name: string,
  ): Promise<IPaginatedResponse<GetIncorporationListDto>> {
    const response = await this.incorporationRepository.getForDropdown(name || '', page, size);

    return {
      status: StatusEnum.OK,
      errors: [],
      data: {
        ...response,
        responseList: response.responseList.map(item => this.incorporationMapper.incorporationModelToGetListDto(item))
      }
    };
  }
}
