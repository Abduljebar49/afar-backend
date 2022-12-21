import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "../Base";
import { Contractor } from "./Contractor";


@Entity()
export class ContractorCar  extends Model{

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

    @ManyToOne(()=>Contractor,(ca)=>ca.cars)
    // @JoinColumn({referencedColumnName:'id',foreignKeyConstraintName:'contractorId'})
    contractor:Contractor
}

/*

@OneToMany((_type) => EDC_VARIANT, (variant)   => variant.edcProd)
variants: EDC_VARIANT[];


@ManyToOne(() => EDC_PRODUCT, (prod: EDC_PRODUCT) => prod.variants)
*/