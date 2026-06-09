import React from 'react';
import { exhibitions } from '@/data';
import { InfoSection } from './InfoSection';

export const Exhibitions: React.FC = () => {
  const items = exhibitions.map((ex) => ({
    label: ex.date,
    title: ex.title,
    description: `${ex.role}\n${ex.description}`,
  }));

  return <InfoSection title="Exhibitions" items={items} />;
};
