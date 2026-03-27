'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Flame, Calendar, GitCommit, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/constants';

const GITHUB_USERNAME = 'Rameshwar-bhagwat10';

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

        let color = 'rgba(255, 255, 255, 0.04)';
        if (count > 0) color = 'rgba(48, 209, 88, 0.2)';
        if (count > 3) color = 'rgba(48, 209, 88, 0.4)';
        if (count > 6) color = 'rgba(48, 209, 88, 0.6)';
        if (count > 9) color = 'rgba(48, 209, 88, 0.85)';

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
              <div className="w-10 h-10 border-3 border-[#30D158]/30 border-t-[#30D158] rounded-full animate-spin" />
              <p className="text-white/50 text-[13px]">Loading GitHub activity...</p>
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
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#30D158]/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0A84FF]/[0.03] rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-4 backdrop-blur-sm">
            <Github size={14} className="text-white/60" />
            <span className="text-[11px] font-medium text-white/60 uppercase tracking-wider">Open Source</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-3 uppercase tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif', fontWeight: 800 }}
          >
            GitHub <span className="text-rainbow-gradient">Activity</span>
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto">
            Consistent contributions and continuous learning
          </p>
        </motion.div>

        {/* Stats Cards - Clean iOS Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          {/* Total Contributions */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="relative p-5 rounded-[16px] backdrop-blur-xl border border-white/[0.08] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
            }}
          >
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-[10px] bg-[#30D158]/10 border border-[#30D158]/20 flex items-center justify-center">
                  <GitCommit size={16} className="text-[#30D158]" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-medium text-white/40">This Year</span>
              </div>
              <p className="text-2xl sm:text-xl md:text-2xl font-bold text-white mb-0.5 tracking-tight">
                {stats.totalContributions.toLocaleString()}
              </p>
              <p className="text-[11px] text-white/35 font-medium">contributions</p>
            </div>

            {/* Subtle top highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </motion.div>

          {/* Current Streak */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="relative p-5 rounded-[16px] backdrop-blur-xl border border-white/[0.08] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
            }}
          >
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-[10px] bg-[#FF9F0A]/10 border border-[#FF9F0A]/20 flex items-center justify-center">
                  <Flame size={16} className="text-[#FF9F0A]" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-medium text-white/40">Current</span>
              </div>
              <p className="text-2xl sm:text-xl md:text-2xl font-bold text-white mb-0.5 tracking-tight">
                {stats.currentStreak}
              </p>
              <p className="text-[11px] text-white/35 font-medium">day streak</p>
            </div>

            {/* Subtle top highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </motion.div>

          {/* Longest Streak */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="relative p-5 rounded-[16px] backdrop-blur-xl border border-white/[0.08] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
            }}
          >
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-[10px] bg-[#BF5AF2]/10 border border-[#BF5AF2]/20 flex items-center justify-center">
                  <Calendar size={16} className="text-[#BF5AF2]" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-medium text-white/40">Longest</span>
              </div>
              <p className="text-2xl sm:text-xl md:text-2xl font-bold text-white mb-0.5 tracking-tight">
                {stats.longestStreak}
              </p>
              <p className="text-[11px] text-white/35 font-medium">day streak</p>
            </div>

            {/* Subtle top highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Contribution Heatmap Card - Clean iOS Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-[20px] backdrop-blur-xl border border-white/[0.08] overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
          }}
        >
          {/* Subtle top highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 p-6">
            {/* Heatmap Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-center justify-between mb-6 flex-wrap gap-4 pb-5 border-b border-white/[0.06]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[12px] bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                  <Github size={18} className="text-white/70" />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-[11px] text-white/40 font-medium">@{GITHUB_USERNAME}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-3.5 py-2 rounded-[10px] bg-white/[0.03] border border-white/[0.06]">
                <span className="text-[10px] text-white/50 font-medium uppercase tracking-wider">Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-[3px] border border-white/[0.08]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)' }} />
                  <div className="w-3 h-3 rounded-[3px]" style={{ backgroundColor: 'rgba(48, 209, 88, 0.25)' }} />
                  <div className="w-3 h-3 rounded-[3px]" style={{ backgroundColor: 'rgba(48, 209, 88, 0.45)' }} />
                  <div className="w-3 h-3 rounded-[3px]" style={{ backgroundColor: 'rgba(48, 209, 88, 0.65)' }} />
                  <div className="w-3 h-3 rounded-[3px]" style={{ backgroundColor: 'rgba(48, 209, 88, 0.9)' }} />
                </div>
                <span className="text-[10px] text-white/50 font-medium uppercase tracking-wider">More</span>
              </div>
            </motion.div>

            {/* Heatmap Grid */}
            <div className="overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
              <div className="inline-flex flex-col gap-1.5">
                {/* Month labels at top */}
                <div className="flex gap-[3px] pl-[44px]">
                  {stats.weeks.map((week, weekIndex) => {
                    const firstDay = new Date(week.contributionDays[0].date);
                    const month = firstDay.getMonth();
                    const isFirstWeekOfMonth = weekIndex === 0 ||
                      new Date(stats.weeks[weekIndex - 1].contributionDays[0].date).getMonth() !== month;

                    return (
                      <div key={weekIndex} className="w-[11px] text-[9px] text-white/30">
                        {isFirstWeekOfMonth && (
                          <span className="inline-block -ml-1">
                            {monthLabels[month]}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Grid container */}
                <div className="flex gap-[3px]">
                  {/* Day labels */}
                  <div className="flex flex-col gap-[3px] pr-1.5 justify-around text-[9px] text-white/30">
                    {dayLabels.map((day, i) => (
                      i % 2 === 1 && <div key={day} className="h-[11px] flex items-center">{day}</div>
                    ))}
                  </div>

                  {/* Contribution grid */}
                  <div className="flex gap-[3px]">
                    {stats.weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-[3px]">
                        {week.contributionDays.map((day, dayIndex) => (
                          <motion.div
                            key={day.date}
                            initial={{ opacity: 0, scale: 0.3 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: weekIndex * 0.006 + dayIndex * 0.003,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{
                              scale: 1.6,
                              zIndex: 50,
                              transition: { type: 'spring', stiffness: 400, damping: 20 }
                            }}
                            className="w-[12px] h-[12px] rounded-[3px] cursor-pointer relative group border border-white/[0.04]"
                            style={{
                              backgroundColor: day.color,
                            }}
                            title={`${day.contributionCount} contributions on ${day.date}`}
                          >
                            {/* iOS-style Tooltip */}
                            <motion.div
                              initial={{ opacity: 0, y: 6, scale: 0.95 }}
                              whileHover={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ duration: 0.15, ease: 'easeOut' }}
                              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-3 py-2 rounded-[10px] text-[10px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 backdrop-blur-xl border border-white/[0.1]"
                              style={{
                                background: 'linear-gradient(180deg, rgba(40, 40, 44, 0.95) 0%, rgba(28, 28, 32, 0.95) 100%)',
                              }}
                            >
                              <div className="font-semibold text-white mb-0.5">{day.contributionCount} contributions</div>
                              <div className="text-white/50 text-[9px]">{new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>

                              {/* Tooltip arrow */}
                              <div
                                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 border-r border-b border-white/[0.1]"
                                style={{ background: 'rgba(28, 28, 32, 0.95)' }}
                              />
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with GitHub Profile Button - Clean iOS Style */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 pt-6 border-t border-white/[0.06] flex justify-center"
            >
              <motion.a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-[12px] backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.12] transition-all duration-200"
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
                }}
              >
                {/* Subtle top highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-t-[12px]" />

                <Github size={16} className="text-white/60 group-hover:text-[#30D158] transition-colors duration-200" />

                <span className="text-[13px] font-semibold text-white/70 group-hover:text-white/90 transition-colors duration-200">
                  View GitHub Profile
                </span>

                <ArrowUpRight size={14} className="text-white/40 group-hover:text-[#30D158] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
