'use client';

import { useEffect } from 'react';
import { registerServiceWorker } from '@/lib/service-worker';

export default function ServiceWorkerScript() {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return null;
}
