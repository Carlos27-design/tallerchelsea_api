import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { RegistroService } from './registro.service';
import { Registro } from './registro.entity';

@Controller('registro')
export class RegistroController {
  constructor(private readonly _registroService: RegistroService) {}
  @Get(':id')
  public async get(@Param('id', ParseIntPipe) id: number): Promise<Registro> {
    const result = await this._registroService.get(id);

    if (!result) throw new NotFoundException();

    return result;
  }

  @Get()
  public getAll(): Promise<Registro[]> {
    return this._registroService.getAll();
  }

  @Post()
  public create(@Body() registro: Registro): Promise<Registro> {
    return this._registroService.create(registro);
  }

  @Patch(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() registro: Registro,
  ): Promise<void> {
    return this._registroService.update(id, registro);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this._registroService.delete(id);
  }
}
