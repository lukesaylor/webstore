import React from "react";
import Grid from "@material-ui/core";

const products = [
  { id: 1, name: "Shoes", description: "Running shoes" },
  { id: 2, name: "Macbook", description: "Apple MacBook" },
  { id: 3, name: "Cheese Wheel", description: "Authentic Parmigiano Reggiano" },
  {
    id: 4,
    name: "Burnt French Fries",
    description: "Genuinely forgot about them",
  },
];

const Pruducts = () => {
  <main>
    <Grid container justify="center" spacing={4}>
        {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} med={4} lg={3}>
                <Product/>
            </Grid>
        ))}
    </Grid>
  </main>;
};

export default Pruducts;
