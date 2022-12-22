import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./Base";
import { Consultant } from "./Consultant";
 
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

  @ManyToOne((type)=>Consultant,(ca)=>ca.equipments)
  consultant:Consultant
}
