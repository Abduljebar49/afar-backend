import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./Base";
import { Contractor } from "./Contractor";


@Entity()
export class ConsultantShareHolder  extends Model{
    @Column()
    consultantId:string 

    @Column()
    name:string

    @Column()
    amount:string

    // @ManyToOne((type)=>Contractor,(ca)=>ca.cars)
    // contractor:Contractor
}