import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "../Base";
import { Contractor } from "./Contractor";


@Entity()
export class ContractorShareHolderNew  extends Model{
    @Column()
    contractorId:string 

    @Column()
    name:string

    @Column()
    amount:string

    @ManyToOne((type)=>Contractor,(ca)=>ca.cars)
    contractor:Contractor
}