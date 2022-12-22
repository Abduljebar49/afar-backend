import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./Base";
import { Contractor } from "./Contractor";


@Entity()
export class ContractorProject  extends Model{

    @Column()
    contractorId:string 

    @Column()
    projectName:string

    @Column()
    projectValue:string

    @Column()
    projectStatus:string

    @ManyToOne((type)=>Contractor,(ca)=>ca.cars)
    contractor:Contractor
}