import './App.css'
import { useState } from 'react';
import Hashtaurante from './assets/hashtaurante.webp';
import { Navegacao } from './Navegacao';
import { ItemCardapio } from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio.js';


export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  const [paginaSelecionada, atualizaPaginaSelecionada] = useState(0)
  

  return (
    <>
      <img src={Hashtaurante} alt="Imagem do Restaurante" className="capa" />
      <Navegacao atualizaPaginaSelecionada={atualizaPaginaSelecionada}/>
      <div className="menu">
        {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />)}
      </div>
    </>
  )
}
