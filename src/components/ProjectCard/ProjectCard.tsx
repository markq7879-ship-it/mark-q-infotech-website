import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  tech: string[];
  description: string;
  image: string;
  fallbackIcon?: React.ElementType;
  metrics?: string;
  highlights?: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [imageError, setImageError] = useState(false);
  const FallbackIcon = project.fallbackIcon;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 flex flex-col justify-between group h-full">
      <div>
        {/* Visual Image Banner with Fallback */}
        <div className="relative h-52 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
          {!imageError ? (
            <img 
              src={project.image} 
              alt={project.title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-slate-900 flex flex-col items-center justify-center p-6 text-white text-center">
              {FallbackIcon && <FallbackIcon size={44} className="text-emerald-400 mb-2" />}
              <span className="font-bold text-sm">{project.title}</span>
            </div>
          )}
          
          <span className="absolute top-4 left-4 text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-blue-900 border border-slate-200 shadow-sm">
            {project.category}
          </span>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <ArrowUpRight size={18} className="text-slate-400 group-hover:text-blue-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </h3>
            
            {project.metrics && (
              <p className="text-emerald-700 text-xs font-mono mt-1 font-semibold">
                {project.metrics}
              </p>
            )}
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Key Features Bullet List */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1.5 pt-2 border-t border-slate-100">
              {project.highlights.map((item, hIdx) => (
                <li key={hIdx} className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span className="truncate">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Card Footer Tech Stack & Link */}
      <div className="p-6 pt-0 space-y-4 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t, tIdx) => (
            <span 
              key={tIdx} 
              className="px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-700 font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          to="/contact"
          className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 font-bold text-xs transition-all flex items-center justify-center gap-2 border border-slate-200"
        >
          Request Technical Case Study <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;