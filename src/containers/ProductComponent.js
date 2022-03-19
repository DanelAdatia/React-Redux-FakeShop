import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <ImageList sx={{ width: 1100, height: 1100 }} cols={3} rowHeight={164}>
      {products.map((product) => (
        <div>
          <Link to={`/product/${product.id}`}>
            <ImageListItem key={product.id}>
              <img src={product.image} alt={product.title} loading="lazy" />
              <ImageListItemBar
                title={product.title}
                subtitle={
                  <span>
                    $ {product.price} {product.category}
                  </span>
                }
              />
            </ImageListItem>
          </Link>
        </div>
      ))}
    </ImageList>
  );
};

export default ProductComponent;
