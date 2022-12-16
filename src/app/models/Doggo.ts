import { discardPeriodicTasks } from "@angular/core/testing";

export default class Doggo {
    static lastId: number = 2;

    id: number;
    breed: string;
    description: string;
    value: number;
    picture?: string;
    status: boolean;
    
    constructor(breed: string, descr: string, value: number, status: boolean = false) {
        this.breed = breed;
        this.description = descr;
        this.value = value;
        this.status = status;

        this.id = Doggo.updateLastId();
    }

    static updateLastId() : number {
        return ++this.lastId;
    }
    
}