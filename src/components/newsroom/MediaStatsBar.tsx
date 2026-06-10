'use client';

import { Award, Globe, Megaphone, Users } from 'lucide-react';
import prog from '@/app/programs/program.module.css';
import { NEWSROOM_STATS } from '@/data/newsroom/stats';
import AnimatedCounter from './AnimatedCounter';

const icons = {
  women: Users,
  awards: Award,
  states: Globe,
  press: Megaphone,
} as const;

export default function MediaStatsBar() {
  return (
    <section className={prog.statsBar} aria-label="Newsroom highlights">
      <div className="container">
        <div className={prog.statsRow}>
          {NEWSROOM_STATS.map((stat) => {
            const Icon = icons[stat.id as keyof typeof icons] ?? Megaphone;
            return (
              <div key={stat.id} className={prog.statBox}>
                <Icon size={20} className={prog.statIcon} aria-hidden />
                <span className={prog.statValue}>
                  <AnimatedCounter
                    value={stat.value}
                    display={stat.display}
                    suffix={stat.suffix}
                  />
                </span>
                <span className={prog.statLabel}>{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
