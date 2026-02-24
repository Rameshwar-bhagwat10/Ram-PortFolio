import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'Rameshwar-bhagwat10'; // Replace with your GitHub username
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Add this to your .env.local

export async function GET() {
  try {
    if (!GITHUB_TOKEN) {
      throw new Error('GitHub token not configured');
    }

    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username: GITHUB_USERNAME },
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    const calendar = data.data.user.contributionsCollection.contributionCalendar;

    // Calculate streaks
    const allDays = calendar.weeks.flatMap((week: any) => week.contributionDays);
    const { currentStreak, longestStreak } = calculateStreaks(allDays);

    return NextResponse.json({
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks,
      currentStreak,
      longestStreak,
    });
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub contributions' },
      { status: 500 }
    );
  }
}

function calculateStreaks(days: any[]) {
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  // Sort days by date (newest first)
  const sortedDays = [...days].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Calculate current streak (from today backwards)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (const day of sortedDays) {
    const dayDate = new Date(day.date);
    dayDate.setHours(0, 0, 0, 0);

    if (dayDate > today) continue; // Skip future dates

    if (day.contributionCount > 0) {
      currentStreak++;
    } else {
      break; // Stop at first day with no contributions
    }
  }

  // Calculate longest streak
  for (const day of days) {
    if (day.contributionCount > 0) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 0;
    }
  }

  return { currentStreak, longestStreak };
}
