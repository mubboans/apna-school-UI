export class User{
    id?: string;
    name?:string;
    dob?:Date;
    email?:string;
    role?:string;
    password?:string;
    confirmpassword?:string;
    contact?:string;
    profileImg?:string;
    token?:string;
    createdAt?:Date; 
    isActive?:boolean;
    isDeleted?:boolean;
    updatedAt?:Date;
    userDetailId?:string;
    _id?:string;
    creationDate?:any;
    } 
 class Particular{
        from?:Date;
        to?: Date;
        name?: string;
        address?:string;
        lastclass?:string;
        mediumInstruction?:string;
        reason?:string;
    } 
 class EmergencyDetail {
        name?:string;
        address?:string;
        contact?:Number;
        email?:string;
    }
    class addressSchema{
        street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    }
    class FamilyDetail{
        name?:string;
        age?:Number;
        qualification?: string;
        occupation?: string;
        montlyincome?:Number;
        contact?:Number;
    }
    export class StudentDetails{
        user_ID?: string;
        user_data?:any;
        ageon31stMayL?:Number;
        placeofbirth?:string;
        nationality?:string;
        mothertongue?:string;
        particulars?:Particular;
        medicalIlleness?:string;
        residenceAddress?:addressSchema;
        permanentAddress?:addressSchema;
        fatherDetail?:FamilyDetail;
        motherDetail?:FamilyDetail;
        guardianDetail?:FamilyDetail;
        emergencyDetail?:EmergencyDetail;
    }
export class teacherDetail{
    user_ID?:string;
    user_data?:any;
    referedBy?:string;
    neareststation?:string;
    distancefromstation?:number;
    timetoTravel?:number;
    maritialstaus?:boolean;
    stayingwith?:string;
    financialDependence?:string;
    educationDetail?:any[];
    qualification?:string;
    language?:any;
    experienceDetail:any[];
    experienceYears?:number;
    mothertongue?:string;   
    readwithUnderstanding?:boolean;
    booksRead:any[];
    IslamicVideos:any[];        
    IslamicAudios:any[];
    otherDetail?:string; 
    salary?:number; 
    disability?:string; 
    otherinformation?:string; 
    refeences:any[];
    eassay?:string; 
}