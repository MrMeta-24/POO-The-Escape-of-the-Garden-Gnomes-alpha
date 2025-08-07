// js/main.js

import { Chapeu } from './chapeu.js';
import { GnomoVeloz } from './gnomoVeloz.js';
import { GnomoAzarado } from './gnomoAzarado.js';
import { Corrida } from './corrida.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('gnome-form');
  const raceBtn = document.getElementById('start-race-btn');
  const race = new Corrida(50);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('gnome-name').value;
    const tipo = document.getElementById('gnome-type').value;
    const corChapeu = document.getElementById('hat-color').value;

    let modificadorSorte;
    let chapeu;
    let gnomo;

    switch (corChapeu) {
      case 'vermelho':
        modificadorSorte = 2;
        break;
      case 'azul':
        modificadorSorte = 1;
        break;
      case 'preto':
        modificadorSorte = 0.5;
        break;
      default:
        modificadorSorte = 1;
    }

    chapeu = new Chapeu(corChapeu, modificadorSorte);

    if (tipo === 'veloz') {
      gnomo = new GnomoVeloz(nome, chapeu);
    } else if (tipo === 'azarado') {
      gnomo = new GnomoAzarado(nome, chapeu);
    }

    if (gnomo) {
      race.adicionarCompetidor(gnomo);
      console.log(`${gnomo.nome} (tipo: ${tipo}, chapéu: ${corChapeu}) adicionado à corrida!`);
    }
  });

  raceBtn.addEventListener('click', () => {
    if (race.competidores.length > 0) {
      console.log('--- A CORRIDA VAI COMEÇAR! ---');
      race.iniciarSimulacao();
    } else {
      console.log('Adicione competidores antes de iniciar a corrida.');
    }
  });
});