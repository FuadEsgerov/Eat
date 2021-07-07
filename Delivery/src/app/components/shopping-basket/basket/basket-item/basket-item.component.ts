import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.css']
})
export class BasketItemComponent implements OnInit {
  @Input() cartItem: any
  
  
  constructor(private basketService:BasketService) { }

  ngOnInit(): void {
  }
  handleRemoveFromBasket() {
    this.basketService.removeFromBasket(this.cartItem.id).subscribe(() => {
      window.location.reload();
    })
  }
}
