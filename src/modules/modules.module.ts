import { Module } from '@nestjs/common';
import { RegistroModule } from './registro/registro.module';

@Module({
  imports: [RegistroModule]
})
export class ModulesModule {}
