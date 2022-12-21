import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "../Base";
import { ConsultantEntity } from "./Consultant";
 

@Entity()
export class ConsultantProjectNew  extends Model{

    @Column()
    consultantId:string 

    @Column()
    projectName:string

    @Column()
    projectValue:string

    @Column()
    projectStatus:string

    @ManyToOne((type)=>ConsultantEntity,(ca)=>ca.projects)
    consultant:ConsultantEntity
}