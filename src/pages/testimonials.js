export default function Testimonials() {
  return (
    <>
      <section style={{ backgroundColor: '#44624A', color: '#F7EFE5', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.8rem' }}>Real Stories of Healing</h1>
        <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '1.2rem', marginTop: '20px' }}>See how HindTel has brought relief and happiness to countless families.</p>
      </section>

      <section style={{ backgroundColor: '#F7EFE5', padding: '60px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', fontFamily: 'Lato, sans-serif', color: '#44624A' }}>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <p>"I had chronic joint pain for years. After using HindTel, I feel new life in my body. Thank you for this gift!"</p>
          <strong>- Ramesh Verma</strong>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <p>"My mother always trusted HindTel. It helped heal her back pain naturally. Our family trusts it completely."</p>
          <strong>- Priya Sharma</strong>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <p>"After my workout injuries, HindTel is my go-to remedy. Fast relief and a natural feel!"</p>
          <strong>- Amit Rao</strong>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <p>"My grandmother passed the HindTel legacy to me. It's pure, trustworthy, and truly effective."</p>
          <strong>- Sanya Kapoor</strong>
        </div>
      </section>
    </>
  )
}
