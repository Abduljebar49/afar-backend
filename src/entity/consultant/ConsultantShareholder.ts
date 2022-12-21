import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "../Base";
import { ConsultantEntity } from "./Consultant";
 

@Entity()
export class ConsultantShareHolder  extends Model{
    @Column()
    consultantId:string 

    @Column()
    name:string

    @Column()
    amount:string

    @ManyToOne((type)=>ConsultantEntity,(ca)=>ca.shareholders)
    consultant:ConsultantEntity
}