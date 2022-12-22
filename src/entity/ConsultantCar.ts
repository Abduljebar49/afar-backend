import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./Base";
import { Consultant } from "./Consultant";
 
@Entity()
export class ConsultantCar extends Model{

    @Column()
    consultantId:string 

    @Column()
    model:string

    @Column()
    type:string

    @Column()
    libreNumber:string

    @Column()
    chassisNumber:string

    @ManyToOne(()=>Consultant,(ca)=>ca.cars)
    consultant:Consultant
}
