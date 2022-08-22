export interface ClienteContatoResponse {
  status: string,
  message: string
  body: Cliente[]
}

export interface Cliente {
  id_client?: number
  name_client: string
  cpf_cnpj: string
  rg_ie: string
  dt_create: string | Date
  active: string
  contacts?: Contact[]
}

export interface Contact {
  contact_number: number
}
