import { Injectable } from '@nestjs/common';
import { Incorporation } from './incorporation.model';
import { GetIncorporationListDto } from './dto/getIncorporationList.dto';
import { isNil } from '@nestjs/common/utils/shared.utils';

@Injectable()
export class IncorporationMapper {
  incorporationModelToGetListDto(source: Incorporation): GetIncorporationListDto{
    const destination = new GetIncorporationListDto();

    if(!isNil(source)){
      destination.id = source.id;
      destination.name = source.translate.value;
    }

    return destination;
  }
}
