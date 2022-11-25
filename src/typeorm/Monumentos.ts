/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'monumentos'})
export class Monumento {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    nombre: string;
    
    @Column()
    ciudad: string;

    @Column({ nullable: true, default:"ES" })
    code: string;
    
    @Column({ nullable: true })
    descripcion: string;
    
    @Column({ nullable: true })
    pais: string;
    
    @Column({ nullable: true })
    localizacion: string;
    
    @Column({ nullable: true })
    url: string;

} 