export interface DietaryHeadcount { conditionSlug:string; count:number }
export interface RfqPayload { eventName:string; eventDate:string; guestCount:number; dietaryBreakdown:DietaryHeadcount[]; contactName:string; contactEmail:string; contactPhone:string; notes?:string }
