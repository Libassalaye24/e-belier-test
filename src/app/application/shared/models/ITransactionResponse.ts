export interface ITransactionResponse {
  statusCode: string,
  statusDescription: string,
  transactionDetails: ITransactionDetails[],
   
}

export interface ITransactionDetails {
  transactionType? : string , 
  documentTypeCode? : string , 
  documentNumber ?: string , 
  transactionDate? : string , 
  amount? : string , 
  textReference? : string , 
  assignement? : string ,
  creditControlArea? : string , 
  paymentMethod? : string , 
  dueDate? : string , 
  currency? : string ,
  deliveryNoteNumbers? : string 
}