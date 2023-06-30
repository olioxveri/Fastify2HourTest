import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { MapboxTile } from "../MapboxTile/MapboxTile"

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    category: string

    @OneToMany(() => MapboxTile, (mapboxtile) => mapboxtile.plantingsite)
    mapboxtiles: MapboxTile[]

}
