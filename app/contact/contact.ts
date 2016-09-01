export interface IMessage{
    contactId:number;
    message:string;
    contactName?:string;
    imageUrl?: string;
} 

export interface IContact {
    contactId: number;
    contactName: string;
    lastMessage:string;
    imageUrl: string;
}
export interface IContactWithMessages {
    contactId: number;
    messages:IMessage[];
}
