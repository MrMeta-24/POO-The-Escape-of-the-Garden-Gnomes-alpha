// js/GnomoVeloz.js

import { Gnomo } from './Gnomo.js';

export class GnomoVeloz extends Gnomo {
  constructor(nome, chapeu) {
    super(nome, 5, chapeu);
  }

  avancar() {
    const passos = this._getVelocidadeBase() + this.chapeu.modificadorSorte;
    this._atualizarPosicao(passos);
  }
}