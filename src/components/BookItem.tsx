import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type BookItemProps = {
  id: number;
  author: string;
  title: string;
  description: string;
  price: number;
  imgUrl: string;
};

export default function BookItem({
  id,
  author,
  title,
  description,
  price,
  imgUrl,
}: BookItemProps) {
  const [showDescription, setShowDescription] = useState(false);
  const {
    getItemQuantiy,
    increaseCartQuantiy,
    decreaseCartQuantiy,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantiy(id);
  return (
    <Card style={{ padding: "0px" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "contain", margin: "10px 0px" }}
      />
      <Card.Text className="mt-2 px-3">
        <span className="fw-bold">Description:</span> {showDescription ?
  (<div>
    {description}
    <span
      style={{ fontSize: "14px", textDecoration: "underline", cursor: 'pointer', marginLeft: '8px' }}
      onClick={() => setShowDescription(false)}
    >
      See less
    </span>
  </div>)
  :
  <div>
    {description.split(' ').slice(0, 5).join(' ')}
    <span
      style={{ fontSize: "14px", textDecoration: "underline", cursor: 'pointer', marginLeft: '8px' }}
      onClick={() => setShowDescription(true)}
    >
      See more
    </span>
  </div>
}
      </Card.Text>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex gap-2 flex-column justify-content-start align-items-baseline mb-4">
          {/* <div className="d-flex flex-column"> */}
          <span className="fs-6">Author: {author}</span>
          <span className="mb-3 fs-5">Title: {title}</span>
          {/* </div> */}
          <span className="ms-2 text-muted" style={{ marginBottom: "-17px" }}>
            {formatCurrency(price)}
          </span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button onClick={() => increaseCartQuantiy(id)} className="mt-2">
              + Add To Cart
            </Button>
          ) : (
            <div className="mt-2 d-flex align-items-center flex-column gap-3">
              <div className="d-flex align-items-center justify-content-center gap-1">
                <Button onClick={() => decreaseCartQuantiy(id)}>-</Button>
                <div>
                  <span
                    className="fs-4 mx-2"
                    style={{ fontFamily: "source code pro" }}
                  >
                    {quantity}
                  </span>
                </div>
                <Button onClick={() => increaseCartQuantiy(id)}>+</Button>
              </div>
              <Button variant="danger" onClick={() => removeFromCart(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
