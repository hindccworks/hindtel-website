import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <section style={{ backgroundColor: '#44624A', color: '#F7EFE5', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.8rem' }}>Get in Touch with Us</h1>
        <p style={{ fontFamily: 'Lato, sans-serif', fontSize: '1.2rem', marginTop: '20px' }}>We are here to help you.</p>
      </section>

      <section style={{ backgroundColor: '#F7EFE5', padding: '60px 20px', maxWidth: '600px', margin: '40px auto', fontFamily: 'Lato, sans-serif', color: '#44624A', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name" 
            required
            style={{ padding: '12px', borderRadius: '10px', border: '1px solid #ccc' }}
          />
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email" 
            required
            style={{ padding: '12px', borderRadius: '10px', border: '1px solid #ccc' }}
          />
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message" 
            rows="5"
            required
            style={{ padding: '12px', borderRadius: '10px', border: '1px solid #ccc' }}
          ></textarea>
          <button type="submit" style={{ backgroundColor: '#D4A373', color: '#fff', border: 'none', padding: '12px', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>
            Send Message
          </button>
        </form>

        <a href="https://wa.me/919999999999" target="_blank" style={{ marginTop: '30px', display: 'inline-block', backgroundColor: '#6A2E2E', color: '#F7EFE5', padding: '15px 30px', borderRadius: '30px', textDecoration: 'none', fontFamily: 'Lato, sans-serif' }}>
          📱 Chat on WhatsApp
        </a>
      </section>
    </>
  )
}
