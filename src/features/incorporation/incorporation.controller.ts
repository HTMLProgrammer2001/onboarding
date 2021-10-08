import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { IncorporationService } from './incorporation.service';

@Controller('incorporation')
export class IncorporationController {
  constructor(private incorporationService: IncorporationService) {
  }

  @Get('dropdown')
  async getDropdown(
    @Query('page', ParseIntPipe) page: number,
    @Query('size', ParseIntPipe) size: number,
    @Query('name') name: string,
  ) {
    return this.incorporationService.getForDropdown(name || '', page, size);
  }
}
