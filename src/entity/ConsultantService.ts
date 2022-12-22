import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./Base";


@Entity()
export class ConsultantService  extends Model{

    @Column()
    consultantId:string 

    @Column()
    certificateDay:Date

    @Column()
    certificateTime:string

    // @ManyToOne((type)=>Contractor,(ca)=>ca.cars)
    // contractor:Contractor
}