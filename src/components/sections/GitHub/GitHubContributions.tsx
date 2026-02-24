'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/constants';

const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME'; // Replace with your GitHub username

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface GitHubStats {
  totalContributions: number;
  weeks: ContributionWeek[];
  longestStreak: number;
  currentStreak: number;
}

export default function GitHubContributions() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGitHubContributions();
  }, []);

  const fetchGitHubContributions = async () => {
    try {
      const response = await fetch('/api/github-contributions');
      
      if (!response.ok) {
        throw new Error('Failed to fetch contributions');
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setStats(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching GitHub contributions:', err);
      // Fallback to mock data if API fails
      const mockData: GitHubStats = generateMockData();
      setStats(mockData);
      setLoading(false);
    }
  };

  const generateMockData = (): GitHubStats => {
    const weeks: ContributionWeek[] = [];
    const today = new Date();
    let totalContributions = 0;

    // Generate last 52 weeks of data
    for (let week = 51; week >= 0; week--) {
      const contributionDays: ContributionDay[] = [];
      
      for (let day = 0; day < 7; day++) {
        const date = new Date(today);
        date.setDate(date.getDate() - (week * 7 + (6 - day)));
        
        const count = Math.floor(Math.random() * 15);
        totalContributions += count;
        
        let color = '#161b22';
        if (count > 0) color = '#0e4429';
        if (count > 3) color = '#006d32';
        if (count > 6) color = '#26a641';
        if (count > 9) color = '#39d353';
        
        contributionDays.push({
          date: date.toISOString().split('T')[0],
          contributionCount: count,
          color,
        });
      }
      
      weeks.push({ contributionDays });
    }

    return {
      totalContributions,
      weeks,
      longestStreak: 47,
      currentStreak: 12,
    };
  };

  const getContributionLevel = (count: number): string => {
    if (count === 0) return 'No contributions';
    if (count < 4) return 'Low activity';
    if (count < 7) return 'Moderate activity';
    if (count < 10) return 'High activity';
    return 'Very high activity';
  };

  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  if (loading) {
    return (
      <section className="relative py-20 px-6 bg-[#0F0E0E]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-96">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
              <p className="text-white/60 text-sm">Loading GitHub activity...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !stats) {
    return null;
  }

  return (
    <section className="relative py-20 px-6 bg-[#0F0E0E] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
            <Github size={16} className="text-white/70" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">Open Source</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Consistent contributions and continuous learning
          </p>
        </motion.div>

        {/* Contribution Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-8 rounded-2xl backdrop-blur-md bg-white/[0.02] border border-white/[0.08] overflow-hidden shadow-2xl"
          style={{
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.03] via-transparent to-purple-500/[0.03] pointer-events-none" />
          
          <div className="relative z-10">
            {/* Heatmap Header */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Github size={20} className="text-white/70" />
                <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-white/50 font-medium">Less</span>
                <div className="flex gap-1.5">
                  <div className="w-4 h-4 rounded-sm bg-white/10 border border-white/20" />
                  <div className="w-4 h-4 rounded-sm bg-[#0e4429] border border-white/10" />
                  <div className="w-4 h-4 rounded-sm bg-[#006d32] border border-white/10" />
                  <div className="w-4 h-4 rounded-sm bg-[#26a641] border border-white/10" />
                  <div className="w-4 h-4 rounded-sm bg-[#39d353] border border-white/10" />
                </div>
                <span className="text-xs text-white/50 font-medium">More</span>
              </div>
            </div>

            {/* Heatmap Grid */}
            <div className="overflow-x-auto pb-4">
              <div className="inline-flex flex-col gap-2">
                {/* Month labels at top */}
                <div className="flex gap-1 pl-[52px]">
                  {stats.weeks.map((week, weekIndex) => {
                    // Get the first day of the week to determine month
                    const firstDay = new Date(week.contributionDays[0].date);
                    const month = firstDay.getMonth();
                    const isFirstWeekOfMonth = weekIndex === 0 || 
                      new Date(stats.weeks[weekIndex - 1].contributionDays[0].date).getMonth() !== month;
                    
                    return (
                      <div key={weekIndex} className="w-3 text-xs text-white/40">
                        {isFirstWeekOfMonth && (
                          <span className="inline-block -ml-2">
                            {monthLabels[month]}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Grid container */}
                <div className="flex gap-1">
                {/* Day labels */}
                <div className="flex flex-col gap-1 pr-2 justify-around text-xs text-white/40">
                  {dayLabels.map((day, i) => (
                    i % 2 === 1 && <div key={day} className="h-3 flex items-center">{day}</div>
                  ))}
                </div>

                  {/* Contribution grid */}
                  <div className="flex gap-1">
                    {stats.weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-1">
                        {week.contributionDays.map((day, dayIndex) => (
                          <motion.div
                            key={day.date}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.4,
                              delay: weekIndex * 0.008 + dayIndex * 0.003,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{ 
                              scale: 1.5, 
                              zIndex: 10,
                              transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                            }}
                            className="w-3 h-3 rounded-sm cursor-pointer relative group"
                            style={{ backgroundColor: day.color }}
                            title={`${day.contributionCount} contributions on ${day.date}`}
                          >
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg bg-black/90 border border-white/20 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                              <div className="font-semibold">{day.contributionCount} contributions</div>
                              <div className="text-white/60">{new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                              <div className="text-white/40 text-[10px] mt-1">{getContributionLevel(day.contributionCount)}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with GitHub Profile Button */}
            <div className="mt-6 pt-6 border-t border-white/10 flex justify-center">
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Github size={18} className="text-white/70 group-hover:text-white transition-colors" />
                <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                  Visit GitHub Profile
                </span>
                <svg 
                  className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
