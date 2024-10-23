'use client';

import { useEffect, useState } from 'react';

interface Certificate {
  id: number;
  certificateId: string;
  status: string;
  user: {
    email: string;
    name: string;
  };
}

const CertificatesPage = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      const response = await fetch('/api/certificate');
      const data = await response.json();
      setCertificates(data);
    };

    fetchCertificates();
  }, []);

  return (
    <div>
      <h1>Certificates</h1>
      <ul>
        {certificates.map((cert) => (
          <li key={cert.id}>
            {cert.certificateId} - {cert.status} (User: {cert.user.name} - {cert.user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificatesPage;
