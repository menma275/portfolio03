import React from 'react';
import { timeline } from '@/data';
import { ExternalLink } from './ExternalLink';

export const Timeline: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      {timeline.map((event, index) => (
        <div
          key={`${event.year}-${index}`}
          className="w-fit flex flex-col justify-center md:flex-row"
        >
          <div className="w-fit min-w-10">
            <p className="font-mono">{event.year}</p>
          </div>
          {event.url ? (
            <ExternalLink href={event.url} className="text-fg-primary">
              {event.title}
            </ExternalLink>
          ) : (
            <p className="text-fg-primary">{event.title}</p>
          )}
        </div>
      ))}
    </div>
  );
};
