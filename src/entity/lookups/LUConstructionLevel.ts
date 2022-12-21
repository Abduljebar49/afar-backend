import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import LookUpModel from "../LUBase";


@Entity()
export class ConstructionLevel  extends LookUpModel{
    @Column()
    level:string 
}