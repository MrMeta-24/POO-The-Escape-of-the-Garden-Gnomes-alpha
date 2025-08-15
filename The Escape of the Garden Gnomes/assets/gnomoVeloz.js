import Gnomo from './gnomo.js';

class GnomoVeloz extends Gnomo {
  constructor(nome, chapeu) {
    super(nome, 10, chapeu);
  }

  avancar() {
    const movimento = this.velocidadeBase + this.chapeu.modificadorSorte;
    
    this.posicao += movimento;
  }
}

export default GnomoVeloz;
