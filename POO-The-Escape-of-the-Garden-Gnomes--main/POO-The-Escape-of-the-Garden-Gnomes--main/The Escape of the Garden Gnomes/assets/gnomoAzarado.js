// js/GnomoAzarado.js

import { Gnomo } from './Gnomo.js';

export class GnomoAzarado extends Gnomo {
  constructor(nome, chapeu) {
    super(nome, 3, chapeu);
  }

  avancar() {
    const sorte = Math.random() < this.chapeu.modificadorSorte / 10 ? -2 : 1;
    const passos = this._getVelocidadeBase() * sorte;
    this._atualizarPosicao(passos);
  }
}