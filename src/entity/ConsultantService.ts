import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./Base";
import { Consultant } from "./Consultant";
 

@Entity()
export class ConsultantService  extends Model{

    @Column()
    consultantId:string 

    @Column()
    certificateDay:Date

    @Column()
    certificateTime:string

    @ManyToOne((type)=>Consultant,(ca)=>ca.services)
    consultant:Consultant
}