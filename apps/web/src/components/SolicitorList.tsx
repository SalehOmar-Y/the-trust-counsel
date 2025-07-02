import React, { useEffect, useState } from 'react';

interface Solicitor {
  name: string;
  address: string;
  phone: string;
}

function SolicitorList() {
  const [solicitors, setSolicitors] = useState<Solicitor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/solicitors')
      .then(res => res.json())
      .then(data => {
        setSolicitors(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, []);

  const filtered = solicitors.filter(solicitor =>
    solicitor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    solicitor.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    solicitor.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading solicitors...</div>;

  return (
    <div style={{ maxWidth: 600, margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <input
        type="text"
        placeholder="Search solicitors..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '8px 12px',
          marginBottom: '20px',
          fontSize: '16px',
          boxSizing: 'border-box',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />
      {filtered.length === 0 ? (
        <div>No solicitors found.</div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filtered.map((solicitor, index) => (
            <li
              key={index}
              style={{
                padding: '12px',
                marginBottom: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <strong>{solicitor.name}</strong>
              <br />
              {solicitor.address}
              <br />
              {solicitor.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SolicitorList;
