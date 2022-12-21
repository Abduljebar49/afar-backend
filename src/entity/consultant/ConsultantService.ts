import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "../Base";
import { ConsultantEntity } from "./Consultant";
 

@Entity()
export class ConsultantService  extends Model{

    @Column()
    consultantId:string 

    @Column()
    certificateDay:Date

    @Column()
    certificateTime:string

    @ManyToOne((type)=>ConsultantEntity,(ca)=>ca.services)
    consultant:ConsultantEntity
}