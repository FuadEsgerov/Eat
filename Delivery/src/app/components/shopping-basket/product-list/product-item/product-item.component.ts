import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private msg: MessengerService,  private basketService: BasketService,) { }
  @Input() productItem: Product;
  ngOnInit(): void {


  }
  handleAddToCart() {
    this.basketService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }
}
