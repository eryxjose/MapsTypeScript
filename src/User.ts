import faker from 'faker'
import { Mappable } from './AppMap'

export class User implements Mappable {
    name: string
    location: {
        lat: number,
        lng: number
    }

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    getMarkerContent(): string {
        return `<h1>User Name: ${this.name}</h1>`
    }
}

