import type { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  title: string;
  desc: string;
}

const ServiceCard = ({ icon, title, desc }: Props) => (
  <div className="bg-card border border-border rounded-xl p-6 hover:border-accentBlue transition hover:shadow-lg">
    <div className="text-accentBlue mb-3">{icon}</div>
    <h3 className="text-xl font-semibold mb-1">{title}</h3>
    <p className="text-textSecondary text-sm">{desc}</p>
  </div>
);
export default ServiceCard;