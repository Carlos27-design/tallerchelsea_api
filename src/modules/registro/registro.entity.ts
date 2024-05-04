import { Column, Entity } from 'typeorm';
import { StandardEntity } from '../base.entity';

@Entity('registro')
export class Registro extends StandardEntity {
  @Column({ type: 'varchar', nullable: false })
  nombre: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'date', nullable: false })
  fecha_ingreso: Date;

  @Column({ type: 'varchar', nullable: false })
  asunto: string;

  @Column({ type: 'varchar', nullable: false })
  mensaje: string;
}
