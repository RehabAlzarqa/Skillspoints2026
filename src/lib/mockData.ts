export interface Course {
  id: string;
  title: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  lessonsCount: number;
  duration: string;
  points: number;
  progress?: number;
  completedLessons?: number;
  description: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  thumbnail: string;
}

export interface Reward {
  id: string;
  title: string;
  points: number;
  category: string;
  image: string;
  popular?: boolean;
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'courses' | 'points' | 'rewards' | 'system';
  unread: boolean;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  points: number;
  isCurrentUser?: boolean;
  badges: string[];
}

export const CURRENT_USER = {
  name: 'Sarah Johnson',
  role: 'Employee',
  email: 'sarah.johnson@skills.com',
  department: 'Marketing',
  jobTitle: 'Marketing Specialist',
  bio: 'Passionate about learning and growth.',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  points: 7320,
  completedCourses: 12,
  inProgressCoursesCount: 3,
  badgesCount: 5,
  joinedDate: 'Mar 2024',
  rank: 4,
};

export const COURSES: Course[] = [
  {
    id: 'data-security-basics',
    title: 'Data Security Basics',
    category: 'Technology',
    level: 'Beginner',
    lessonsCount: 6,
    duration: '1h 30m',
    points: 450,
    progress: 60,
    completedLessons: 3,
    description: 'Learn the fundamentals of protecting data and understanding common security threats.',
    instructor: {
      name: 'Alex Morgan',
      role: 'Security Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'project-management-101',
    title: 'Project Management 101',
    category: 'Business',
    level: 'Intermediate',
    lessonsCount: 8,
    duration: '2h 15m',
    points: 400,
    progress: 40,
    completedLessons: 4,
    description: 'Master core project management principles, agile methodologies, and team collaboration.',
    instructor: {
      name: 'David Chen',
      role: 'Senior Project Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'effective-communication',
    title: 'Effective Communication',
    category: 'Personal Development',
    level: 'Beginner',
    lessonsCount: 5,
    duration: '1h 10m',
    points: 350,
    progress: 80,
    completedLessons: 5,
    description: 'Improve workplace communication skills, active listening, and persuasive presentation.',
    instructor: {
      name: 'Rachel Taylor',
      role: 'Communications Director',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    },
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'excel-for-beginners',
    title: 'Excel for Beginners',
    category: 'Technology',
    level: 'Beginner',
    lessonsCount: 6,
    duration: '1h 45m',
    points: 250,
    progress: 0,
    completedLessons: 0,
    description: 'Build spreadsheets, format data, and master essential formulas for daily work efficiency.',
    instructor: {
      name: 'Michael Brown',
      role: 'Data Analyst',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    },
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'customer-service-excellence',
    title: 'Customer Service Excellence',
    category: 'Business',
    level: 'Beginner',
    lessonsCount: 7,
    duration: '2h 00m',
    points: 400,
    progress: 0,
    completedLessons: 0,
    description: 'Deliver exceptional customer experiences and handle challenging situations with grace.',
    instructor: {
      name: 'Emily Davis',
      role: 'CX Lead',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    },
    thumbnail: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'cybersecurity-awareness',
    title: 'Cybersecurity Awareness',
    category: 'Compliance',
    level: 'Intermediate',
    lessonsCount: 8,
    duration: '2h 30m',
    points: 450,
    progress: 30,
    completedLessons: 2,
    description: 'Recognize security threats, phishing scams, password protection, and safe browsing.',
    instructor: {
      name: 'Alex Morgan',
      role: 'Security Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80',
  },
];

export const LESSONS_DATA = [
  { id: 'les-1', title: '1. Introduction to Data Security', duration: '05:20', completed: true },
  { id: 'les-2', title: '2. Types of Threats', duration: '12:45', completed: true },
  { id: 'les-3', title: '3. Phishing Basics', duration: '10:15', completed: false, active: true },
  { id: 'les-4', title: '4. Strong Passwords', duration: '09:30', completed: false },
  { id: 'les-5', title: '5. Data Handling Best Practices', duration: '11:20', completed: false },
  { id: 'les-6', title: '6. Quiz: Test Your Knowledge', duration: '05:00', completed: false },
];

export const REWARDS: Reward[] = [
  {
    id: 'rew-1',
    title: 'N1,000 Airtime',
    points: 1000,
    category: 'Airtime',
    image: '📱',
    popular: true,
  },
  {
    id: 'rew-2',
    title: 'N5,000 Airtime',
    points: 4500,
    category: 'Airtime',
    image: '📱',
  },
  {
    id: 'rew-3',
    title: 'Coffee Voucher',
    points: 1500,
    category: 'Vouchers',
    image: '☕',
  },
  {
    id: 'rew-4',
    title: 'Amazon Gift Card',
    points: 5000,
    category: 'Gift Cards',
    image: '💳',
  },
  {
    id: 'rew-5',
    title: 'Swag Pack',
    points: 2500,
    category: 'Swag',
    image: '🎒',
  },
  {
    id: 'rew-6',
    title: 'Donate to Charity',
    points: 1800,
    category: 'Donations',
    image: '❤️',
  },
];

export const LEADERBOARD: LeaderboardUser[] = [
  { rank: 1, name: 'Michael Brown', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80', points: 11250, badges: ['🥇', '🏆', '⭐'] },
  { rank: 2, name: 'Emily Davis', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80', points: 9850, badges: ['🥈', '🏆'] },
  { rank: 3, name: 'James Wilson', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', points: 8160, badges: ['🥉', '⭐'] },
  { rank: 4, name: 'Sarah Johnson (You)', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80', points: 7320, isCurrentUser: true, badges: ['🏆', '⭐'] },
  { rank: 5, name: 'Daniel Lee', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80', points: 6410, badges: ['⭐'] },
  { rank: 6, name: 'Olivia Martinez', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', points: 5860, badges: ['⭐'] },
];

export const NOTIFICATIONS: NotificationItem[] = [
  { id: 'not-1', title: 'Course Completed', description: 'Great job! You completed Data Security Basics and earned 450 points.', time: '2m ago', type: 'courses', unread: true },
  { id: 'not-2', title: 'Points Earned', description: 'You earned 100 points for completing a lesson.', time: '1h ago', type: 'points', unread: true },
  { id: 'not-3', title: 'Reward Redeemed', description: 'Your N1,000 Airtime reward is on the way.', time: '3h ago', type: 'rewards', unread: true },
  { id: 'not-4', title: 'New Recommendation', description: 'We recommend "Excel for Beginners" based on your learning history.', time: '1d ago', type: 'courses', unread: true },
  { id: 'not-5', title: 'Course Update', description: 'A new lesson has been added to Project Management 101.', time: '2d ago', type: 'courses', unread: false },
];
