import { IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import axios from "axios";
const CategoriesSection = (props) => {
  const carts = [
    {
      price: "Rs 900",
      category: "Shoe",
      name: "Bata Shoe Branded",
    },
    {
      price: "Rs 900",
      category: "Shoe",
      name: "Bata Shoe Branded",
    },
    {
      price: "Rs 900",
      category: "Shoe",
      name: "Bata Shoe Branded",
    },
    {
      price: "Rs 900",
      category: "Shoe",
      name: "Bata Shoe Branded",
    },
    {
      price: "Rs 900",
      category: "Shoe",
      name: "Bata Shoe Branded",
    },
    {
      price: "Rs 900",
      category: "Shoe",
      name: "Bata Shoe Branded",
    },
  ];

  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/fetched-products",{
        params:{
          categoryId: props.categoryId,
        }
      })
      .then((response) => {
        console.log(response.data.data);

        if (response.data.success) {
          setCategoryProducts(response.data.data);
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <>
      <div
        className="row categories-section"
        style={{
          flexDirection: props.sectionDirection ? "row-reverse" : "row",
        }}
      >
        <div className="col-lg-6 col-md-6 img-section">
          <img
            src="https://htmldemo.net/reid/reid/assets/img/bg/banner2.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-md-6 cards">
          <div className="cards-section">
            <Typography variant="h3" component="h3" className="collection-head">
              Men Collection
            </Typography>
            <p className="subhead">
              Contemporary, minimal and modern designs embody the Lavish Alice
              handwriting
            </p>
            <div className="row">
              {categoryProducts.map((item, index) => (
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card mb-2">
                    <div className="img-area">
                      {item.discount > 0 && (<div className="discount">{item.discount}% Off</div>)}
                      <img src={`http://127.0.0.1:5000/uploads/products/${item.cardImages[1]}`} alt="" />
                      <img
                        src={`http://127.0.0.1:5000/uploads/products/${item.cardImages[0]}`}
                        alt=""
                        className="img-front"
                      />
                    </div>
                    <div className="content">
                      <h3 className="category-name">{item.category.name}</h3>
                      <h3 className="product-name">{item.name}</h3>
                      <div className="add-cart-price">
                        <h3 className="product-price">{item.price}</h3>

                        <IconButton className="add-cart">
                          <AddShoppingCartIcon />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesSection;
