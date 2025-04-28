export default function About() {
  return (
    <>
      <section style={{ backgroundColor: '#44624A', color: '#F7EFE5', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.8rem' }}>Our Legacy of Healing Since 1933</h1>
      </section>

      <section style={{ backgroundColor: '#F7EFE5', padding: '60px 20px', textAlign: 'center' }}>
        <div>
          <h2 style={{ color: '#6A2E2E', fontFamily: 'Playfair Display, serif' }}>1933 - The Beginning</h2>
          <p style={{ color: '#44624A', fontFamily: 'Lato, sans-serif' }}>Founded as Darul Adwia by Mohammad Mustafa, rooted in traditional healing wisdom.</p>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h2 style={{ color: '#6A2E2E', fontFamily: 'Playfair Display, serif' }}>1948 - Rebranding</h2>
          <p style={{ color: '#44624A', fontFamily: 'Lato, sans-serif' }}>Rebranded as Hind CC Works, expanding our herbal curative products.</p>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h2 style={{ color: '#6A2E2E', fontFamily: 'Playfair Display, serif' }}>2012 - New Era</h2>
          <p style={{ color: '#44624A', fontFamily: 'Lato, sans-serif' }}>Revived by Khalid Mustafa, blending tradition with modern quality standards.</p>
        </div>

        <div style={{ marginTop: '40px' }}>
          <h2 style={{ color: '#6A2E2E', fontFamily: 'Playfair Display, serif' }}>Present Day</h2>
          <p style={{ color: '#44624A', fontFamily: 'Lato, sans-serif' }}>Carrying forward the trusted HindTel formula, touching lives across generations.</p>
        </div>
      </section>

      <section style={{ backgroundColor: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#44624A', fontFamily: 'Playfair Display, serif' }}>Our Mission</h2>
        <p style={{ color: '#6A2E2E', fontFamily: 'Lato, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
          To deliver authentic, chemical-free, effective Ayurvedic remedies that promote natural healing and wellbeing.
        </p>

        <h2 style={{ marginTop: '40px', color: '#44624A', fontFamily: 'Playfair Display, serif' }}>Our Vision</h2>
        <p style={{ color: '#6A2E2E', fontFamily: 'Lato, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
          To preserve India's traditional healing practices and ensure modern trust for future generations.
        </p>

        <a href="/product" style={{ marginTop: '40px', display: 'inline-block', backgroundColor: '#6A2E2E', color: '#F7EFE5', padding: '15px 30px', borderRadius: '30px', textDecoration: 'none', fontFamily: 'Lato, sans-serif' }}>
          Explore Hind Tel →
        </a>
      </section>
    </>
  );
}
