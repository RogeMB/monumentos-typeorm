import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Monumento } from './typeorm/Monumentos';
import { MonumentosModule } from './monumentos/monumentos.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'Admin',
    password: '=Admin2209',
    database: 'monumentos_mysql_db',
    entities: [Monumento],
    synchronize: true,
  }), MonumentosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
