import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./Base";
import { Contractor } from "./Contractor";


@Entity()
export class ConsultantProject  extends Model{

    @Column()
    consultantId:string 

    @Column()
    projectName:string

    @Column()
    projectValue:string

    @Column()
    projectStatus:string

    // @ManyToOne((type)=>Contractor,(ca)=>ca.cars)
    // contractor:Contractor
}