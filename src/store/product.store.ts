import { action, makeAutoObservable, observable } from "mobx";
import productService from "../services/product.service";
import { IProduct } from "../interfaces/product.service";

class ProductStore {
  @observable productList: IProduct[] = [];
  @observable loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action async getListProductsStore() {
    if (this.loading || this.productList.length > 0) return;

    this.loading = true;
    try {
      const result: IProduct[] = await productService.getListProducts();
      this.productList = result;
    } catch (error: any) {
      throw error;
    } finally {
      this.loading = false;
    }
  }
}

const productStore = new ProductStore();
export default productStore;
