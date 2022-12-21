import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "../Base";
 
@Entity()
export class ConsultantContractionPropertyNew extends Model {
  @Column()
  propertyId: number;

  @Column()
  consultantId: string;

  @Column()
  capacity: string;

  @Column()
  manufacturedDate: Date;

  // @ManyToOne((type)=>Consultant,(ca)=>ca.equipments)
  // consultant:Consultant
}
