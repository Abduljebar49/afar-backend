import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "../Base";
import { Contractor } from "./Contractor";

@Entity()
export class ContractionProperty extends Model {
  @Column()
  propertyId: number;

  @Column()
  contractorId: string;

  @Column()
  capacity: string;

  @Column()
  manufacturedDate: Date;

  @ManyToOne((type)=>Contractor,(ca)=>ca.cars)
  contractor:Contractor
}
