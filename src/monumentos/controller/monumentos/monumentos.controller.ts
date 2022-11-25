import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { createMonumentoDto } from 'src/monumentos/dtos/createMonumento.dto';
import { UpdateMonumentoDto } from 'src/monumentos/dtos/updateMonumento.dto';
import { MonumentosService } from 'src/monumentos/service/monumentos/monumentos.service';

@Controller('monumentos')
export class MonumentosController {

    constructor(private monumentoServ: MonumentosService) {}

    @Get()
    getMonumentos() {
        return this.monumentoServ.findMonumentos();
    }

    @Post()
    createMonumento(@Body() createMonumentoDto: createMonumentoDto) {
        return this.monumentoServ.createMonumento(createMonumentoDto);
    }

    @Put(':id')  //en realidad puede ser considerado un patch en lugar de put porque nos permite modificar solo un atributo, pero lo dejamos put porque puede modificarlos todos
    async updateMonumentoById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateMonumentoDto: UpdateMonumentoDto
        ) {
        await this.monumentoServ.updateMonumento(id, updateMonumentoDto);
    }

     @Delete(':id')
     async deleteMonumentoById(
        @Param('id', ParseIntPipe) id: number) {
        await this.monumentoServ.deleteMonumento(id);
    }

}
