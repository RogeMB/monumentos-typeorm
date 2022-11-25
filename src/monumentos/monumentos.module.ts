import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Monumento } from 'src/typeorm/Monumentos';
import { MonumentosController } from './controller/monumentos/monumentos.controller';
import { MonumentosService } from './service/monumentos/monumentos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Monumento])],
  controllers: [MonumentosController],
  providers: [MonumentosService]
})
export class MonumentosModule {}
