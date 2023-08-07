export class User{
    id?: string;
    name?:string;
    DOB?:Date;
    email?:string;
    role?:string;
    password?:string='test123';
    confirmpassword?:string;
    contact?:string;
    profileImg?:string;
    token?:string;
    createdAt?:Date=new Date(); 
    isActive?:boolean=true;
    isDeleted?:boolean;
    updatedAt?:Date;
    userDetailId?:string;
    _id?:string;
    creationDate?:any;
    } 
 export class Particular{
        from?:Date;
        to?: Date;
        name?: string;
        address?:string;
        lastclass?:string;
        mediumInstruction?:string;
        reason?:string;
    } 
 export class EmergencyDetail {
        name?:string;
        address?:string;
        contact?:Number;
        email?:string;
    }
    export class addressSchema{
        street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    }
    export class FamilyDetail{
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
        ageon331stMayL?:Number;
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