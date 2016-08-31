export interface IMessage{
    contactName:string,
    Message:string
} 

export interface IContact {
    contactId: number;
    contactName: string,
    LastMessage:IMessage,
    imageUrl: string
}
export interface IContactWithMessages {
    contactId: number;
    contactName: string,
    Messages:IMessage[],
    imageUrl: string
}
