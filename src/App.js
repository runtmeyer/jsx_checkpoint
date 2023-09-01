
import "./App.css";
import React from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import product from "./product";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";


const App = () => {
  const firstName = "Hana"; // Replace with your first name
  
  return (
    <div className="App">
      <div className="Wrapper">
      <Card style={{ width: "18rem", backgroundColor: "black", color: "white"}}>
        <Card.Body>
          <Image image={product.image}/>
          <Card.Title>
            <Name name={product.name} />
          </Card.Title>
          <Card.Text>
            <Price price={product.price} />
            <Description description={product.description}/>
          </Card.Text>
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : "there"}!</p>
      {firstName && <img src="https://images.pexels.com/photos/1188084/pexels-photo-1188084.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" style={{ width: 100, height: 100}}/>}
      </div>
      
    </div> 
  );
};

export default App;

