import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./Base";
import { Consultant } from "./Consultant";
 

@Entity()
export class ConsultantShareHolder  extends Model{
    @Column()
    consultantId:string 

    @Column()
    name:string

    @Column()
    amount:string

    @ManyToOne((type)=>Consultant,(ca)=>ca.shareholders)
    consultant:Consultant
}