import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { PlantingSite } from "../PlantingSite/PlantingSite"
import { Category } from "../Categories/category"

@Entity()
export class MapboxTile {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    mapboxId: string

    @ManyToOne(() => PlantingSite, (plantingsite) => plantingsite.mapboxtiles)
    plantingsite: PlantingSite

    @ManyToOne(() => Category, (category) => category.mapboxtiles)
    category: Category

}
