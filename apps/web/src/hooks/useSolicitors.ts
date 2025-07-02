import { useState, useEffect } from 'react';

export interface Solicitor {
  id: number;
  name: string;
  legalAid: boolean;
  location: string;
  languages: string[];
}

export function useSolicitors() {
  const [solicitors, setSolicitors] = useState<Solicitor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:4000/solicitors')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setSolicitors(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { solicitors, loading, error };
}