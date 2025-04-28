import { useState } from 'react';

export default function Checkout() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const cartItems = [
    { id: 1, name: 'Hind Tel - Single Bottle', price: 299 },
    { id: 2, name: 'Hind Tel - Combo Pack (3 Bottles)', price: 849 }
  ];

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = () => {
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 1000); // simulate a small delay
  };

  return (
    <>
      <section style={{ backgroundColor: '#44624A', color: '#F7EFE5', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.8rem' }}>Checkout</h1>
        <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '1.2rem' }}>Review your order and complete the payment.</p>
      </section>

      <section style={{ backgroundColor: '#F7EFE5', padding: '60px 20px', textAlign: 'center', maxWidth: '600px', margin: '40px auto', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        {cartItems.map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontFamily: 'Lato, sans-serif', color: '#44624A' }}>
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))}

        <div style={{ marginTop: '30px', fontSize: '1.2rem', color: '#6A2E2E', fontFamily: 'Lato, sans-serif' }}>
          <strong>Total: ₹{totalAmount}</strong>
        </div>

        {!paymentSuccess ? (
          <button 
            onClick={handlePayment}
            style={{ backgroundColor: '#D4A373', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' }}
          >
            Pay Now
          </button>
        ) : (
          <p style={{ color: '#44624A', fontFamily: 'Lato, sans-serif', fontSize: '1.2rem', marginTop: '20px' }}>
            ✅ Payment Successful! Thank you for your order.
          </p>
        )}
      </section>
    </>
  )
}
