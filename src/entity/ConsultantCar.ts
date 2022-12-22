import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./Base";


@Entity()
export class ConsultantCar  extends Model{

    @Column()
    contractorId:string 

    @Column()
    model:string

    @Column()
    type:string

    @Column()
    libreNumber:string

    @Column()
    chassisNumber:string

    // @ManyToOne(()=>Contractor,(ca)=>ca.cars)
    // contractor:Contractor
}