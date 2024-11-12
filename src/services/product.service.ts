import { ApiPaths } from "../enums/api";
import { IProduct } from "../interfaces/product.service";
import { get } from "../utils/functions/httpMethods";

class ProductService {
  async getListProducts(): Promise<IProduct[] | null> {
    try {
      const result: IProduct[] = await get(ApiPaths.GET_LIST_PRODUCTS, {});
      return result;
    } catch (error: any) {
      if (error.code === "ERR_NETWORK") {
        console.error(
          "Network error: Unable to fetch product list. Please check your connection or try again later."
        );
      } else {
        console.error("Error fetching product list:", error.message);
      }
      return null;
    }
  }
}

const productService = new ProductService();
export default productService;
