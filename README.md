# XAgent Learning Platform

A modern, adaptive learning platform built with Next.js 14, TypeScript, and Tailwind CSS. XAgent provides personalized corporate training experiences that adapt to each employee's skill level.

## Features

- **Adaptive Learning**: Courses adjust to individual skill levels through assessment quizzes
- **Progress Tracking**: Visual progress indicators for courses, modules, and sections
- **Interactive Chat Assistant**: Built-in AI assistant for learning support
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Mock Authentication**: Simple login system with localStorage persistence
- **Modern UI**: Clean, professional interface using Tailwind CSS and shadcn/ui components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd xagent-learning-platform
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js 14 App Router pages
│   ├── login/             # Login page
│   ├── dashboard/         # Main dashboard
│   ├── course/[id]/       # Individual course pages
│   └── profile/           # User profile page
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── CourseCard.tsx    # Course display card
│   ├── RoadmapSidebar.tsx # Course navigation sidebar
│   ├── ContentPane.tsx   # Main content display
│   ├── ChatToggle.tsx    # Chat assistant toggle
│   └── ...
├── contexts/              # React Context providers
│   ├── AuthContext.tsx   # Authentication state
│   └── ProgressContext.tsx # Learning progress state
├── hooks/                 # Custom React hooks
│   ├── useRoadmap.ts     # Course roadmap data
│   └── useChatToggle.ts  # Chat assistant state
├── lib/                   # Utility functions and data
│   ├── mockData.ts       # Sample data for development
│   └── auth.ts           # Authentication utilities
└── ...
```

## Mock Data

The application uses mock data defined in `lib/mockData.ts` for development purposes. This includes:

- **Users**: Sample user profiles with roles
- **Courses**: Complete course structures with modules and sections
- **Progress**: Simulated learning progress (0-100%)
- **Chat Messages**: Sample assistant conversations

### Data Structure

```typescript
Course {
  id: string
  title: string
  description: string
  progress: number (0-100)
  modules: Module[]
}

Module {
  id: string
  title: string
  type: 'level_quiz' | 'content' | 'final_quiz'
  progress: number (0-100)
  sections: Section[]
}

Section {
  id: string
  title: string
  content: string
  progress: number (0-100)
}
```

## Authentication

The current implementation uses a simple mock authentication system:

- Login with any email/password combination
- User data is stored in localStorage
- Protected routes redirect to login if not authenticated
- Logout clears the stored user data

## Future API Integration

The application is structured to easily integrate with a real backend API:

1. **Authentication**: Replace mock login in `lib/auth.ts` with actual API calls
2. **Data Fetching**: Replace mock data imports with API endpoints
3. **Progress Tracking**: Connect progress updates to backend persistence
4. **Chat Assistant**: Integrate with AI/ML services for real chat functionality

### Suggested API Endpoints

```
POST /api/auth/login          # User authentication
GET  /api/courses             # List user's courses
GET  /api/courses/:id         # Get course details
PUT  /api/progress/:courseId  # Update learning progress
POST /api/chat/message        # Send chat message to assistant
```

## Styling

The application uses:
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for pre-built, accessible components
- **Lucide React** for consistent iconography
- **Responsive design** with mobile-first approach

## Development

### Key Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Environment Variables

For production deployment, you may need to configure:

```env
NEXT_PUBLIC_API_URL=your-api-endpoint
NEXT_PUBLIC_CHAT_API_KEY=your-chat-service-key
```

## Deployment

The application is configured for static export and can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages
- Any static hosting service

Build for deployment:
```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License.