export interface User {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  address: string;
  cellPhone: string;
  creationDate: Date;
  email: string;
  fullName: string;
  observations: string;
  isAccepted: boolean;
  isDeleted: boolean;
  rol: {
    id: number;
    name: string;
  },
  vehicle: {
    id: number;
    name: string
  }

}

export interface UserData{
  clientId: number;
  email: string;
  fullName: string;
  address?: string;
  cellPhone?: string;
}