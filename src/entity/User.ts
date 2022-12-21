import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import Model from "./Base"
export enum UserRole {
    ADMIN = "admin",
    TECHNICAL = "technical",
    FINANCE = "finance",
    DIRECTOR = "director"
}
@Entity()
export class User  extends Model{

    @Column()
    name: string


    @Column()
    email: string

    @Column()
    username: string

    @Column()
    password: string

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.TECHNICAL,
    })
    role: UserRole
}
