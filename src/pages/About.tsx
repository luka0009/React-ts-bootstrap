import React from "react";

export default function About() {
  return (
    <div className="d-flex justify-content-center align-items-start">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="mb-5">About this App</h1>
        <p style={{width: '580px', fontSize: '20px'}}>
          This is a Shopping Cart Application built with Typescript, React and
          Bootstrap. I'm using React Context for global variables. You can add
          Books to the shopping cart, remove them either one by one or all of them
          at once. In the shopping Cart Offcanvas(from Bootstrap) You can see your
          chosen books and sum total of cost. 
          <br/>
          <br/>
          
        </p>
        <span style={{fontSize: '24px'}}>Happy shopping!</span>
      </div>
    </div>
  );
}
