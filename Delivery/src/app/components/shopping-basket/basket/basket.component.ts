import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { BasketItem } from 'src/app/models/basket-item';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basketItems = [
  ];

  cartTotal = 0

  constructor(private msg: MessengerService,private basketService:BasketService) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.basketService.getBasketItems().subscribe((items: BasketItem[]) => {
      this.basketItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.basketItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
