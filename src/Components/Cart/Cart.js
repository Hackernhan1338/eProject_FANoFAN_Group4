import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../Data.json";

import "./Cart.scss";

function Cart({ CartData }) {
  const [Data, setData] = useState(CartData);

  return (
    <div>
      <Container className="mt-5">
        <table id="customers">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Money</th>
          </tr>
          {Data.map((item, index) => (
            <tr>
              <td key={index}>{item[0].Name}</td>
              <td key={index}>${item[0].Price}</td>
              <td key={index}>1</td>
              <td key={index}>${item[0].Price}</td>
            </tr>
          ))}
        </table>
      </Container>
    </div>
  );
}

export default Cart;
