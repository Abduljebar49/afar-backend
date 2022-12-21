import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "../Base";
import { ConsultantEntity } from "./Consultant";
 
@Entity()
export class ConsultantContractionProperty extends Model {
  @Column()
  propertyId: number;

  @Column()
  consultantId: string;

  @Column()
  capacity: string;

  @Column()
  manufacturedDate: Date;

  @ManyToOne((type)=>ConsultantEntity,(ca)=>ca.equipments)
  consultant:ConsultantEntity
}
