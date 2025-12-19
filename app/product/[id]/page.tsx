import ProductDetailsContent from "@/src/components/ProductDetails/ProductDetailsContent";

// This is a server component that receives the route parameters
export default function ProductDetailsPage({  }: { params: { id: string } }) {
  // In a real app, you would fetch product data here using params.id
  // const productData = await fetchProduct(params.id); 

  return (
    <main>
      {/* Pass product data as props if needed */}
      <ProductDetailsContent /> 
    </main>
  );
}