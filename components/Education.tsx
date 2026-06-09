import React from 'react';
import { education } from '@/data';
import { InfoSection } from './InfoSection';

export const Education: React.FC = () => {
  const items = education.map((edu) => ({
    label: edu.period,
    title: edu.institution,
    description: edu.degree,
  }));

  return <InfoSection title="Education" items={items} />;
};
