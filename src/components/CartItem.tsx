import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import books from '../data/items.json';
import { formatCurrency } from "../utilities/formatCurrency";

interface CartItemProps {
  id: number;
  quantity: number;
}

export default function CartItem({ id, quantity }: CartItemProps) {
  const {removeFromCart} = useShoppingCart();  
  const item = books.find(i => i.id === id);

  if(item == null) return null
  return (
    <Stack 
    direction="horizontal" gap={2}
    className='d-flex align-items-center'
    >
        <img src={item.imgUrl} style={{width: '145px', height: '115px', objectFit: 'contain'}} />
        <div className="me-auto">
            <div>
                <span style={{fontSize: '14px'}}>{item.author}:</span> <br />
                <span style={{fontWeight: 'bold'}}>{item.title}</span> <br />
                {quantity > 1 && <span className="text-muted fs-8">{quantity}x</span>}
            </div>
            <div className="text-muted fs-6">{formatCurrency(item.price)}</div>
        </div>
        <div className="d-flex flex-column gap-5" style={{transform: 'scale(0.8)'}}>
        <div className="fs-3" style={{fontWeight: 'bold'}}>{formatCurrency(item.price * quantity)}</div>
        <Button variant='outline-danger' onClick={() => removeFromCart(item.id)}>Delete</Button>
        </div>
    </Stack>
  );
}
