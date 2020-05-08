import { UniversityModel } from "../universities/universityModel";

export class ParticipantModel {
    private name: string;
    private surName: string;
    public university: UniversityModel;
    public email: string;
    public date:string;

    constructor(name: string, surName: string, university: UniversityModel, email: string,date:string=Date().toString()) {
        this.name = name;
        this.surName = surName;
        this.university = university;
        this.email = email;
        this.date=date;
    }

    public get FullName(): string {
        return this.name.trim() + this.surName.trim()
    }

    public set Name(name: string) {
        this.name = name;
    }

    public set SurName(surName: string) {
        this.surName = surName;
    }
}