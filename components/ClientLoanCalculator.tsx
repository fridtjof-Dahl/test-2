'use client';

import { useEffect, useState } from 'react';
import LoanCalculator from './LoanCalculator';

export default function ClientLoanCalculator() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <LoanCalculator />;
}


