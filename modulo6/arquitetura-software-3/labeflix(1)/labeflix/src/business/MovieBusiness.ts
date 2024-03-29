import { generateId } from '../servives/idGenerator';
import { MovieDatabase } from './../data/MovieDatabase';


export class MovieBusiness {
    async create ({title, description, duration_in_minutes, year_of_release}:any): Promise<void>{
        
        if(!title || !description || !duration_in_minutes || !year_of_release){
            throw new Error("Dados invalidos!");
        }

        const id: string = generateId() 

        const movieDatabase = new MovieDatabase()
        await movieDatabase.create({
            id,
            title,
            description,
            duration_in_minutes,
            year_of_release
        })
    }
}