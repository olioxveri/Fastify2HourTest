import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { MapboxTile } from "../MapboxTile/MapboxTile"

@Entity()
export class PlantingSite {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    plantingSiteId: number

    @OneToMany(() => MapboxTile, (mapboxtile) => mapboxtile.plantingsite)
    mapboxtiles: MapboxTile[]

}
