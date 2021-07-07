import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cartUrl } from '../config/api';
import { BasketItem } from '../models/basket-item';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http: HttpClient) { }

  getBasketItems(): Observable<BasketItem[]> {
    //TODO: Mapping the obtained result to our BasketItem props. (pipe() and map())
    return this.http.get<BasketItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        let BasketItems: BasketItem[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in BasketItems) {
            if (BasketItems[i].productId === item.product.id) {
              BasketItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            BasketItems.push(new BasketItem(item.id, item.product));
          }
        }

        return BasketItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product });
  }
  removeFromBasket(productId) {
    return this.http.delete(cartUrl + '/' + productId);
  }
}
