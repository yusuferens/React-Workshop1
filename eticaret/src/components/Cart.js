import React from 'react'
import alertify from 'alertifyjs';
import {Button, ListGroup, ListGroupItem} from 'reactstrap';

const Cart = ({cartItems, onRemoveFromCart,onClearCart}) => {
  // Sepetteki fiyat hesaplamasının güncellennmesi
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.count, 0);

  const handleRemoveFromCart = (item) =>{
    onRemoveFromCart(item);
    alertify.error(`${item.name} sepetten çıkarıldı!`);
  }

  const handleClearCart = () => {
    onClearCart();
    alertify.error('Sepet boşaltıldı!');
  }

  return(
    <div>
    <h3>Sepet</h3>
      <ListGroup>
        {cartItems.map((item) =>(
          <ListGroupItem key={item.id}>
            {item.name} - ${item.price} (x{item.count}) {/* sepette kaç eşya olduğunu da göster*/}
            <Button color='warning'
            onClick={()=> handleRemoveFromCart(item)}
            style={{float: 'right'}}
            className='btn btn-sm'>Kaldır
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
      <h4 className='mt-5'>Toplam: ${totalPrice}</h4>
      <Button color='danger' onClick={()=>handleClearCart()}>Sepeti Boşalt</Button>
    </div>

  );
}
export default Cart;