import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Produto } from '../Interfaces/Produto';

@Component({
  selector: 'produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent implements OnInit {
  @Input()
  prod: Produto = {
    descricao: '',
    estoque: 0,
    imagem: '',
    nome: '',
    preco: 0
  }

  mostrarProduto: boolean = true

  @Output()
  deletar: EventEmitter<Produto> = new EventEmitter<Produto>()

  constructor() { }

  ngOnInit(): void {
  }

  esconderProduto() {
     this.mostrarProduto = false
  }

  aparecerProduto(): void{
     this.mostrarProduto = true 
  }

  emitirEventoDeletar(): void {
    this.deletar.emit(this.prod)
  }
}
