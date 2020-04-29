import React from "react";
import { Card } from "./card/Card";
import { DefaultPage } from "./defaultPage/DefaultPage";
import { CustomCard } from "../ui/CustomCard";
import products from "../products";

export const App = ({ isAuth }) => (
  <>
    {products.length !== 0 ? (
      products.map((product) => {
        // return <Card key={product.id} {...product} isAuth={isAuth} />;
        return <CustomCard key={product.id} {...product} />;
      })
    ) : (
      <DefaultPage />
    )}
  </>
);
