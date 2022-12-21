import {
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export default abstract class Model extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}


export enum applicationStatus {
  PENDING = "pending",
  APPROVED = "approved",
  PAID = "paid",
  SIGNED = "signed",
}