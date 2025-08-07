// js/Gnomo.js

export class Gnomo {
    #nome;
    #velocidadeBase;
    #posicao = 0;
    chapeu;
  
    constructor(nome, velocidadeBase, chapeu) {
      this.#nome = nome;
      this.#velocidadeBase = velocidadeBase;
      this.chapeu = chapeu;
    }
  
    get nome() {
      return this.#nome;
    }
  
    get posicao() {
      return this.#posicao;
    }
  
    avancar() {
      throw new Error('O método avancar() deve ser implementado nas subclasses.');
    }
  
    resetarPosicao() {
      this.#posicao = 0;
    }
  
    _atualizarPosicao(passos) {
      this.#posicao += passos;
    }
  
    _getVelocidadeBase() {
      return this.#velocidadeBase;
    }
  }