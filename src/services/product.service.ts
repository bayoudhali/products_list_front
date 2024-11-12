import { ApiPaths } from "../enums/api";
import { IProduct } from "../interfaces/product.service";
import { get } from "../utils/functions/httpMethods";

class ProductService {
  async getListProducts() {
    try {
      const result: IProduct[] = await get(ApiPaths.GET_LIST_PRODUCTS, {});
      return result;
    } catch (error: any) {
      throw error;
    }
  }
}

const productService = new ProductService();
export default productService;
