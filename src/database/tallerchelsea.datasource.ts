import { Configuration } from 'src/config/config.keys';
import { ConfigService } from 'src/config/config.service';
import { DataSource } from 'typeorm';

const confService = new ConfigService();

export const TallerChelseaDataSource = new DataSource({
  type: 'mysql',
  host: confService.get(Configuration.DB_HOST),
  port: parseInt(confService.get(Configuration.DB_PORT)),
  username: confService.get(Configuration.DB_USERNAME),
  password: confService.get(Configuration.DB_PASSWORD),
  database: confService.get(Configuration.DB_SCHEMA),
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/migrations/*.{js,ts}'],
  synchronize: true,
});
