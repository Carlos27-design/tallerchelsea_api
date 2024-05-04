import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistroModule } from './modules/registro/registro.module';
import { ModulesModule } from './modules/modules.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule, ModulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.SELF_PORT);
  }
}
