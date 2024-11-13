
class Heroi {
    
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }


    atacar() {
        // Variável para armazenar a descrição do ataque
        let ataqueSelecionado;

        // Estrutura de decisão para definir o tipo de ataque
        switch (this.tipo) {
            case 'mago':
                ataqueSelecionado = 'usou magia';
                break;
            case 'guerreiro':
                ataqueSelecionado = 'usou espada';
                break;
            case 'monge':
                ataqueSelecionado= 'usou artes marciais';
                break;
            case 'ninja':
                ataqueSelecionado = 'usou shuriken';
                break;
            default:
                ataqueSelecionado= 'realizou um ataque desconhecido';
        }

        // Exibir a mensagem final do ataque
        console.log(`O ${this.tipo} atacou usando ${ataqueDescricao}`);
    }
}

const heroi1 = new Heroi('Gendalf', 60, 'mago');
const heroi2 = new Heroi('Thor', 35, 'guerreiro');

heroi1.atacar(); 
heroi2.atacar(); 
