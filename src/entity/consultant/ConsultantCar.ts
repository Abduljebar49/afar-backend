import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "../Base";
import { ConsultantEntity } from "./Consultant";
 
@Entity()
export class ConsultantCar extends Model{

    @Column()
    consultantId:string 

    @Column()
    model:string

    @Column()
    type:string

    @Column()
    libreNumber:string

    @Column()
    chassisNumber:string

    @ManyToOne(()=>ConsultantEntity,(ca)=>ca.cars)
    consultant:ConsultantEntity
}
