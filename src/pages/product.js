export default function Product() {
  return (
    <>
      <section style={{ backgroundColor: '#44624A', color: '#F7EFE5', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.8rem' }}>Hind Tel – Your Natural Healing Companion</h1>
      </section>

      <section style={{ backgroundColor: '#F7EFE5', padding: '60px 20px', textAlign: 'center' }}>
        <img 
          src="/images/hindtel-bottle.png" 
          alt="Hind Tel Bottle" 
          style={{ width: '250px', margin: '20px auto' }} 
        />

        <h2 style={{ color: '#6A2E2E', fontFamily: 'Playfair Display, serif', marginTop: '40px' }}>Key Benefits</h2>
        <ul style={{ listStyleType: 'none', padding: 0, color: '#44624A', fontFamily: 'Lato, sans-serif' }}>
          <li style={{ margin: '10px 0' }}>🌿 Relieves Joint and Muscle Pain</li>
          <li style={{ margin: '10px 0' }}>⚡ Fast Absorption Formula</li>
          <li style={{ margin: '10px 0' }}>🧘‍♂️ Reduces Inflammation Naturally</li>
          <li style={{ margin: '10px 0' }}>🌸 Promotes Relaxation and Wellbeing</li>
        </ul>
      </section>

      <section style={{ backgroundColor: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#44624A', fontFamily: 'Playfair Display, serif' }}>Ingredients</h2>
        <p style={{ color: '#6A2E2E', fontFamily: 'Lato, sans-serif', maxWidth: '700px', margin: '0 auto' }}>
          Sesame Oil, Camphor, Eucalyptus Oil, Menthol, Wintergreen Oil, Clove Oil, Ajwain, Kapoor, Pudina, Tulsi Extracts.
        </p>

        <h2 style={{ marginTop: '40px', color: '#44624A', fontFamily: 'Playfair Display, serif' }}>Why Hind Tel?</h2>
        <p style={{ color: '#44624A', fontFamily: 'Lato, sans-serif', maxWidth: '700px', margin: '20px auto' }}>
          • Trusted Ayurvedic Formula Since 1933<br/>
          • No Chemicals or Artificial Additives<br/>
          • Passed Down Across Generations<br/>
          • Unchanged Authentic Formulation
        </p>

        <a href="/shop" style={{ marginTop: '40px', display: 'inline-block', backgroundColor: '#6A2E2E', color: '#F7EFE5', padding: '15px 30px', borderRadius: '30px', textDecoration: 'none', fontFamily: 'Lato, sans-serif' }}>
          Buy Now →
        </a>
      </section>
    </>
  )
}
