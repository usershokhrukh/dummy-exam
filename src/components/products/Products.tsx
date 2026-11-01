"use client"

import { useGetProducts } from "@/hooks/products/useGetProducts"
import { useEffect } from "react";
import { toast } from "react-toastify";
import "../../style/products.scss"
import ProductsTable from "./ProductsTable";
import ProductsError from "./ProductsError";

const Products = () => {
  const {data, isLoading, error} = useGetProducts();
  useEffect(() => {
    if(error) {
      toast.error(error?.message)
    }
  },[error])
  useEffect(() => {
    if(data) {
      console.log(data);
    }
  }, [data])

  if(!data && !isLoading) {
    return (
      <div className="products">
        <ProductsError error={error}/>
      </div>
    )
  }  
  return (
    <div className="products">
      {/* <button className="products__add">Add product</button> */}
      {data && !isLoading ? <ProductsTable data={data?.products}/> : !data && isLoading ? "...loading" : null }
    </div>
  )
}

export default Products