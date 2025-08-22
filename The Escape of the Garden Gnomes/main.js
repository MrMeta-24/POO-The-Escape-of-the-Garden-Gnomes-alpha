import { GnomoFactory } from './gnomoFactory.js';
import { Corrida } from './corrida.js';

const corrida = new Corrida(100);

const gnomo1 = GnomoFactory.criarGnomo('Veloz', 'Gnomo1', 'Azul');
const gnomo2 = GnomoFactory.criarGnomo('Azarado', 'Gnomo2', 'Vermelho');

corrida.adicionarCompetidor(gnomo1);
corrida.adicionarCompetidor(gnomo2);

corrida.iniciarSimulacao();
