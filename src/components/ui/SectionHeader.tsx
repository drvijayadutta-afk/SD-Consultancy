import { cn } from '@/lib/utils';
import { AnimatedSection } from './AnimatedSection';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({ eyebrow, title, subtitle, centered = false, light = false, className }: Props) {
  return (
    <AnimatedSection className={cn(centered && 'text-center', className)}>
      {eyebrow && (
        <div className={cn(
          'inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-[0.2em] uppercase',
          light ? 'text-[#8393a7]' : 'text-[var(--text-blue)]'
        )}>
          <span className={cn('w-8 h-px', light ? 'bg-[#3E5776]' : 'bg-[#25405F]')} />
          {eyebrow}
          <span className={cn('w-8 h-px', light ? 'bg-[#3E5776]' : 'bg-[#25405F]')} />
        </div>
      )}
      <h2 className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight mb-5',
        light ? 'text-white' : 'text-[#101E36] dark:text-white'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-base md:text-lg leading-relaxed max-w-3xl',
          centered && 'mx-auto',
          light ? 'text-white/80' : 'text-[#3A3A3A]/75 dark:text-white/70'
        )}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
