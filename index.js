class cliente{

        nome;
        cpf;
}

class contaCorrente{

    agencia;
    #saldo = 0;

    sacar(valor){

        if(this.#saldo >= valor){
            this.#saldo -= valor;
        }
        else{
            console.log("Que pena, nao podemos te dar credito ainda\n ");
        }
    }

    deposito(valor){
        if(valor > 0 ){
            this.#saldo += valor
    }
    }
}


const cliente1 = new cliente();
cliente1.nome = "Gustavo";
cliente1.cpf = 2309234;

const cliente2 = new cliente();
cliente1.nome = "Thayenne";
cliente1.cpf = 230923433;

const contaCorrenteGustavo = new contaCorrente();
contaCorrenteGustavo.agencia = 1001


contaCorrenteGustavo.deposito(200)
contaCorrenteGustavo.sacar(100);

