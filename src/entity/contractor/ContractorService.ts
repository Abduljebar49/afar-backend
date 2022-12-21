import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "../Base";
import { Contractor } from "./Contractor";


@Entity()
export class ContractorService  extends Model{

    @Column()
    contractorId:string 

    @Column()
    certificateDay:Date

    @Column()
    certificateTime:string

    @ManyToOne((type)=>Contractor,(ca)=>ca.cars)
    contractor:Contractor
}