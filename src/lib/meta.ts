import { Metadata } from 'next';

export const getMetadata = ({ title }: Metadata) => {
  const prefixTitle = 'Fake Store';

  const metadata = {
    title: title ? `${prefixTitle} | ${title}` : 'Fake Store',
    description: 'Fake Store App Landing Page',
  };

  return metadata;
};
