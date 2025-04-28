import { useState } from 'react';

export default function Shop() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    alert(`${item.name} added to cart!`);
  };

  const products = [
    { id: 1, name: 'Hind Tel - Single Bottle', price: 299 },
    { id: 2, name: 'Hind Tel - Combo Pack (3 Bottles)', price: 849 }
  ];

  return (
    <>
      <section style={{ backgroundColor: '#44624A', color: '#F7EFE5', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.8rem' }}>Shop HindTel</h1>
      </section>

      <section style={{ backgroundColor: '#F7EFE5', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          {products.map((item) => (
            <div key={item.id} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '250px', fontFamily: 'Lato, sans-serif' }}>
              <img 
                src={`/images/${item.id === 1 ? 'hindtel-single.png' : 'hindtel-combo.png'}`} 
                alt={item.name}
                style={{ width: '100%', height: '200px', objectFit: 'contain' }}
              />
              <h2 style={{ color: '#6A2E2E', fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginTop: '15px' }}>{item.name}</h2>
              <p style={{ color: '#44624A', fontSize: '1.2rem' }}>₹{item.price}</p>
              <button 
                onClick={() => addToCart(item)}
                style={{ marginTop: '10px', backgroundColor: '#D4A373', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <a href="/checkout" style={{ marginTop: '50px', display: 'inline-block', backgroundColor: '#6A2E2E', color: '#F7EFE5', padding: '15px 30px', borderRadius: '30px', textDecoration: 'none', fontFamily: 'Lato, sans-serif' }}>
          Proceed to Checkout →
        </a>
      </section>
    </>
  )
}
