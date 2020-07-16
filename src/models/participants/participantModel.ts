import { UniversityModel } from "../universities/universityModel";
import { checkSchema,ValidationChain } from "express-validator";

export class ParticipantModel {
    private name_surname: string;
    public university: string;
    public department:string;
    public email: string;
    public date:string;
    public phone?:string;

    constructor(name_surname:string, university: string,department:string, email: string,phone?:string,date=new Date().toLocaleDateString("tr-TR",{timeZone:"Europe/Istanbul",weekday:"long",year:"numeric",month:"short",day:"numeric"})) {
        this.name_surname = name_surname;
        this.university = university;
        this.department = department;
        this.email = email;
        this.phone=phone;
        this.date=date;
     
    }

    public get FullName(): string {
        return this.name_surname.trim();
    }
    
}

export const ParticipantValidationChain=checkSchema({ 
    name_surname:{
        exists:true,
        errorMessage:"Name_surname propertysi eksik",
        trim:true,
        escape:true,
        isUppercase: {
            negated: true,
          },
        isAlpha:{
            errorMessage:"Invalid name_surname"
        },
        isLength:{
            options:{min:5,max:30},
            errorMessage:"Minimum 5 characters required!"
        }
    },
    email:{
        exists:{
            errorMessage:"Email property eksik"
        },
        trim:true,
        isEmail:true,
        errorMessage:"Invalid email",
    },
    phone:{
        exists:true,
        errorMessage:"Phone propertysi eksik",
        blacklist:{
            options:['-']
        },
        optional:{
            options:{nullable:true}
        },
        custom:{
            options:(value:string)=>{
                if(value!=''){
                    if(value.match('/^[0-9]+$/'))
                        return value
                    return "0"
                }
                
            },
            errorMessage:"Invalid Phone Number"
        }
        
    },
    university:{
        exists:true,
        errorMessage:"University property eksik"
    },
    department:{
        exists:true,
        errorMessage:"Department property eksik"
    }
})