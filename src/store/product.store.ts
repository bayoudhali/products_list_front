// src/stores/productStore.ts

import { action, makeAutoObservable, observable } from "mobx";
import productService from "../services/product.service";
import { IProduct } from "../interfaces/product.service";

class ProductStore {
  @observable productList: IProduct[] = [];
  @observable loading = false;
  @observable error: string | null = null; // New observable for error messages

  constructor() {
    makeAutoObservable(this);
  }

  @action async getListProductsStore() {
    if (this.loading || this.productList.length > 0) return;

    this.loading = true;
    this.error = null;
    try {
      const result = await productService.getListProducts();
      if (result) {
        this.productList = result;
      } else {
        this.error =
          "Unable to fetch product list. Please check your connection or try again later.";
      }
    } catch (error: any) {
      this.error = "An unexpected error occurred.";
      console.error("Error in ProductStore:", error);
    } finally {
      this.loading = false;
    }
  }
}

const productStore = new ProductStore();
export default productStore;
