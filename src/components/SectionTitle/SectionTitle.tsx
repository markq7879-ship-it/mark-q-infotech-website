import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className = '' }: Props) => (
  <h2 className={`text-2xl md:text-3xl font-bold mb-6 text-textPrimary ${className}`}>
    {children}
  </h2>
);
export default SectionTitle;