import { useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", description: "High performance laptop", avgRating: 4.2, totalRatings: 5, image: "laptop.jpg" },
    { id: 2, name: "Smartphone", description: "Latest model smartphone", avgRating: 4.5, totalRatings: 8, image: "phone.jpg" },
  ]);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              avgRating: ((product.avgRating * product.totalRatings + newRating) / (product.totalRatings + 1)).toFixed(1),
              totalRatings: product.totalRatings + 1,
            }
          : product
      )
    );
  };

  return (
    <div>
      <h1>Product Ratings</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onRatingSubmit={handleRatingSubmit} />
      ))}
    </div>
  );
};

export default App;