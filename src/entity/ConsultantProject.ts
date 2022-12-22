import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./Base";
import { Consultant } from "./Consultant";
 

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

    @ManyToOne((type)=>Consultant,(ca)=>ca.projects)
    consultant:Consultant
}