import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMonumentoParams, UpdateMonumentoParams } from 'src/monumentos/utils/types';
import { Monumento } from 'src/typeorm/Monumentos';
import { Repository } from 'typeorm';

@Injectable()
export class MonumentosService {

    constructor(
        @InjectRepository(Monumento) private monumentoRepo: Repository<Monumento>,
        ) {}

    findMonumentos() {
        return this.monumentoRepo.find();
    }

    createMonumento(monumentoAtributos: CreateMonumentoParams) {
        const newMonumento = this.monumentoRepo.create({
            ...monumentoAtributos
        });
        return this.monumentoRepo.save(newMonumento);
    }

    updateMonumento(id: number, monumentoAtributos: UpdateMonumentoParams) {
        if(!id) {
            throw new HttpException('Monumento no encontrado', HttpStatus.NOT_FOUND);
        }else {
            return this.monumentoRepo.update({ id }, { ...monumentoAtributos }); // con los tres puntitos hacemos que si updateamos un solo atributo en lugar de todos, no pete y funcione.
        }       
    }

    deleteMonumento(id: number) {
        if (!id) {
            throw new HttpException( 'No existe ese monumento', HttpStatus.NO_CONTENT);
        }else {
            return this.monumentoRepo.delete({ id })
        }
    }
}

 