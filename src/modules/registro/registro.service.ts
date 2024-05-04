import { Injectable } from '@nestjs/common';
import { TallerChelseaDataSource } from 'src/database/tallerchelsea.datasource';
import { Registro } from './registro.entity';
import { status } from 'src/shared/entity-status.enum';

@Injectable()
export class RegistroService {
  private readonly _registroRepository =
    TallerChelseaDataSource.getRepository(Registro);

  public get(id: number): Promise<Registro> {
    return this._registroRepository
      .createQueryBuilder('Registro')
      .where('Registro.id = :id', { id })
      .andWhere('Registro.status = :status', { status: status.ACTIVE })
      .getOne();
  }

  public getAll(): Promise<Registro[]> {
    return this._registroRepository
      .createQueryBuilder('Registro')
      .where('Registro.status = :status', { status: status.ACTIVE })
      .getMany();
  }

  public create(registro: Registro): Promise<Registro> {
    registro.fecha_ingreso = new Date(registro.fecha_ingreso);
    return this._registroRepository.save(registro);
  }

  public async update(id: number, registro: Registro): Promise<void> {
    registro.fecha_ingreso = new Date(registro.fecha_ingreso);
    await this._registroRepository.update(id, registro);
  }

  public async delete(id: number): Promise<void> {
    await this._registroRepository.update(id, { status: status.INACTIVE });
  }
}
