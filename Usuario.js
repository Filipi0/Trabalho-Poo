import {Investimento} from '/Investimento'
import {Orcamento} from '/Orcamento'
import {Meta} from '/Meta'

class Usuario{
    constructor(nome , email){
        this.nome = nome
        this.email = email
        this.Investimento = Investimento
        this.Orcamento = Orcamento
        this.Meta = Meta
    }

    
}