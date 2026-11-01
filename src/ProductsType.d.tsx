export interface ProductsType {
  title: string,
  id: number | string,
  price: string,
  stock: number,
  images: Array<string>,
  category: string,
  rating: number,
  brand: string
}