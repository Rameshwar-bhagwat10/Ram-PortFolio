'use client';

import { useState, useEffect } from 'react';

export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState('');
  
  return activeId;
}
