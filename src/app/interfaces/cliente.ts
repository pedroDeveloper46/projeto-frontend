
import { IEndereco } from "./endereco";

export interface ICliente {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  endereco: IEndereco;
  rendimentoMensal: number;
}
