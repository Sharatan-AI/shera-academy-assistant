export const mockCourses = [
  { id: 1, title: "Introduction to Project Management", category: "Business Skills", difficulty: "Beginner", instructor: "John Doe", duration: "4 weeks" },
  { id: 2, title: "Advanced Excel Techniques", category: "Technical Skills", difficulty: "Intermediate", instructor: "Jane Smith", duration: "3 weeks" },
  { id: 3, title: "Effective Communication in the Workplace", category: "Soft Skills", difficulty: "All Levels", instructor: "Mike Johnson", duration: "2 weeks" },
];

export const mockAnnouncements = [
  { id: 1, title: "New Course Available", content: "Check out our new course on Agile Methodologies!", date: "2024-03-15" },
  { id: 2, title: "System Maintenance", content: "The platform will be down for maintenance on March 20th from 2-4 AM.", date: "2024-03-18" },
];

export const mockUserProgress = [
  { courseId: 1, progress: 75, lastAccessed: "2024-03-10" },
  { courseId: 2, progress: 30, lastAccessed: "2024-03-12" },
];

export const mockAssessments = [
  { id: 1, title: "Project Management Fundamentals Quiz", type: "Quiz", dueDate: "2024-03-25" },
  { id: 2, title: "Excel Skills Assessment", type: "Practical Test", dueDate: "2024-03-30" },
];

export const mockReports = [
  { id: 1, title: "Q1 Learning Progress Report", generatedDate: "2024-03-31" },
  { id: 2, title: "Skills Gap Analysis", generatedDate: "2024-04-05" },
];

export const mockLessons = [
  { id: 1, title: "Introduction to Project Management", courseId: 1, duration: "45 minutes", completed: true },
  { id: 2, title: "Project Lifecycle", courseId: 1, duration: "60 minutes", completed: false },
  { id: 3, title: "Excel Basics", courseId: 2, duration: "30 minutes", completed: true },
  { id: 4, title: "Advanced Formulas", courseId: 2, duration: "90 minutes", completed: false },
];

export const mockUserProfile = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Student",
  joinDate: "2024-01-15",
};

export const mockCreatedCourses = [
  { id: 1, title: "Introduction to Data Science", students: 150, rating: 4.7 },
  { id: 2, title: "Web Development Fundamentals", students: 200, rating: 4.5 },
];

export const mockAISearchResults = [
  { id: 1, title: "Project Management Best Practices", type: "Document", relevance: 0.95 },
  { id: 2, title: "Agile Methodology Overview", type: "Course", relevance: 0.88 },
  { id: 3, title: "Team Leadership Skills", type: "Video", relevance: 0.75 },
];

export const mockCourseCompletionData = [
  { name: 'Jan', completions: 65 },
  { name: 'Feb', completions: 59 },
  { name: 'Mar', completions: 80 },
  { name: 'Apr', completions: 81 },
  { name: 'May', completions: 56 },
  { name: 'Jun', completions: 55 },
  { name: 'Jul', completions: 40 },
];

export const mockUserEngagementData = [
  { name: 'Videos', value: 400 },
  { name: 'Quizzes', value: 300 },
  { name: 'Assignments', value: 200 },
  { name: 'Discussions', value: 100 },
];

export const mockSkillProgressData = [
  { subject: 'Project Management', A: 120, B: 110, fullMark: 150 },
  { subject: 'Communication', A: 98, B: 130, fullMark: 150 },
  { subject: 'Technical Skills', A: 86, B: 130, fullMark: 150 },
  { subject: 'Leadership', A: 99, B: 100, fullMark: 150 },
  { subject: 'Problem Solving', A: 85, B: 90, fullMark: 150 },
  { subject: 'Time Management', A: 65, B: 85, fullMark: 150 },
];
