import React, { useEffect, useState } from 'react';
import 'rbx/index.css';
import { Button, Container, Title, Card, Image, Content, Column } from 'rbx';

const Sizes = ['XS','S','M','L','XL']

const Banner = () => (
  <React.Fragment>
    <Title>{ 'Shopping Cart' }</Title>
  </React.Fragment>
);

const Product = ({ products }) => (
  <React.Fragment>
    <Column size = 'one-quarter'>
      <Card>
        <Card.Image>
          <Image.Container size = '3by4'>
            <Image src = {`data/products/${products.sku}_1.jpg`} />
          </Image.Container>
        </Card.Image>
        <Card.Content>
          <Content>
            <Title>{ products.title }</Title>
            <p>
              { products.description} 
            </p>
            <p>
            { products.style }
            </p>
          </Content>
        </Card.Content>
        <Card.Footer>
          <Card.Footer.Item>
            { products.currencyFormat }{ products.price }
          </Card.Footer.Item>
          <Card.Footer.Item>
            Add to cart
          </Card.Footer.Item>
        </Card.Footer>
      </Card>
    </Column>
  </React.Fragment>
);

const ProductList = ({ products, stateProduct }) => {
  const ProductDisplay = products

return (
    <React.Fragment>
      <Column.Group multiline>
        { ProductDisplay.map(products => <Product key = { products.sku } products = { products }/>)}
      </Column.Group>
    </React.Fragment>
  );
};

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  const [ProductDisplay, setProductDisplay] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <ul>
      <Container>
        <Banner/>
        <ProductList products={ products } stateProduct={ { ProductDisplay, setProductDisplay} }/>
      </Container>
    </ul>
  );
};

export default App;