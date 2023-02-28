import { Row, Col } from "react-bootstrap";
import BookItem from "../components/BookItem";
import bookItems from "../data/items.json";

export default function Store() {
  return (
    <>
      <h1>Books</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {bookItems.map((book) => {
          return (
            <Col key={book.id}>
              <BookItem
                id={book.id}
                author={book.author}
                title={book.title}
                description={book.description}
                price={book.price}
                imgUrl={book.imgUrl}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
