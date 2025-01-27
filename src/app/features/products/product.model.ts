export interface Product {
    id: number;
    name: String;
    description:String;
    price:number;
    categoryName: String;
    subCategoryName: String;
    stock:number;
}

export interface ProductRequest{
    name:String;
    price: number;
    description:String;
    stock: number;
    categoryId: number;
    subCategoryId: number;
    cost: number;
}