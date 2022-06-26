import { DataSource } from 'typeorm';
import { CoffeeRefactor1656263676983 } from './src/migrations/1656263676983-CoffeeRefactor';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { SchemaSync1656267409480 } from './src/migrations/1656267409480-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1656263676983, SchemaSync1656267409480],
});
