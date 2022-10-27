import { Component } from '@angular/core';
import { Produto } from './Interfaces/Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  nome: string = ''
  imagem: string = ''
  preco: number = 0
  estoque: number = 0
  descricao: string = ''

  produtos: Produto[] = []

  adicionarProduto(evento: any): void {
    console.log(evento)
    evento.preventDefault()
    evento.stopPropagation()

    this.produtos.push({
      descricao: this.descricao,
      estoque: this.estoque,
      imagem: this.imagem,
      nome: this.nome,
      preco: this.preco
    })
    this.descricao = ''
    this.estoque = 0
    this.imagem = ''
    this.nome = ''
    this.preco = 0
  }

  deletarProduto(p : Produto): void{
   const index = this.produtos.indexOf(p)
   this.produtos.splice(index, 1)
  }
}
