// Classe Heroi
class Heroi {
    // Construtor para inicializar as propriedades do herói
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar
    atacar() {
        // Variável para armazenar a descrição do ataque
        let ataqueDescricao;

        // Estrutura de decisão para definir o tipo de ataque
        switch (this.tipo) {
            case 'mago':
                ataqueDescricao = 'usou magia';
                break;
            case 'guerreiro':
                ataqueDescricao = 'usou espada';
                break;
            case 'monge':
                ataqueDescricao = 'usou artes marciais';
                break;
            case 'ninja':
                ataqueDescricao = 'usou shuriken';
                break;
            default:
                ataqueDescricao = 'realizou um ataque desconhecido';
        }

        // Exibir a mensagem final do ataque
        console.log(`O ${this.tipo} atacou usando ${ataqueDescricao}`);
    }
}

// Criando alguns exemplos de heróis
const heroi1 = new Heroi('Merlin', 30, 'mago');
const heroi2 = new Heroi('Arthur', 35, 'guerreiro');
const heroi3 = new Heroi('Zhang', 28, 'monge');
const heroi4 = new Heroi('Hattori', 25, 'ninja');

// Chamando o método atacar para cada herói
heroi1.atacar(); // O mago atacou usando magia
heroi2.atacar(); // O guerreiro atacou usando espada
heroi3.atacar(); // O monge atacou usando artes marciais
heroi4.atacar(); // O ninja atacou usando shuriken
