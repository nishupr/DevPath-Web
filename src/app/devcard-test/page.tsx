"use client";

import DevCard from '@/components/profile/DevCard';

export default function DevCardTestPage() {
  const mockUser = {
    uid: 'test-uid',
    name: 'Test User',
    displayName: 'Test User',
    photoURL: '/images/team/default-avatar.png',
    points: 1420,
    streak: 5,
    badges: [],
    github: {
      connected: true,
      stars: 42,
      followers: 10,
      languages: [
        { name: 'TypeScript', percent: 60 },
        { name: 'CSS', percent: 25 },
        { name: 'HTML', percent: 15 },
      ],
    },
  } as any;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">DevCard Test (mocked user)</h1>
      <DevCard user={mockUser} />
    </div>
  );
}
