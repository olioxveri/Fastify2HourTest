import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Category } from "./models/Categories/category"
import { MapboxTile } from "./models/MapboxTile/MapboxTile"
import { PlantingSite } from "./models/PlantingSite/PlantingSite"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "hiringtest",
    synchronize: true,
    migrationsRun: false,
    logging: false,
    entities: [Category, MapboxTile, PlantingSite],
    subscribers: [],
    
})
