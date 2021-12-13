export interface TravelResponse {
  id:                  number;
  creationDate:        Date;
  lastStatusTravel:    number;
  travelEquipmentDTOs: TravelEquipmentDTO[];
}

export interface TravelEquipmentDTO {
  id:            number;
  operationDate: Date;
  observation?:   null;
  cadete?:        Operator | null;
  operator:      Operator;
  equipment:     Equipment;
  statusTravel:  number;
}

export interface Operator {
  id:        number;
  email:     string;
  fullName:  string;
  address:   string;
  cellPhone: string;
}

export interface Equipment {
  id:       number;
  mark:     string;
  model:    string;
  failure:  string;
  clientId: number;
  cliente:  Operator;
}

// export enum FullName {
//   Carla = "Carla",
//   DiosMioEstoNoMeSale = "dios mio esto no me sale",
//   FacuDubois = "Facu Dubois",
//   Franco = "Franco",
//   Lucrecia = "Lucrecia",
//   Sadsadsa = "sadsadsa",
// }
