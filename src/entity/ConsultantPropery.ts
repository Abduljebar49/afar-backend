import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./Base";
import { Contractor } from "./Contractor";

@Entity()
export class ConsultantProperty extends Model {
  @Column()
  propertyId: number;

  @Column()
  consultantId: string;

  @Column()
  capacity: string;

  @Column()
  manufacturedDate: Date;

  // @ManyToOne((type)=>Contractor,(ca)=>ca.cars)
  // contractor:Contractor
}
