import { HomeIcon, BookOpenIcon, GraduationCapIcon, ClipboardCheckIcon, UsersIcon, FolderPlusIcon, BrainCircuitIcon } from "lucide-react";
import Home from "./pages/Index.jsx";
import Courses from "./pages/Courses.jsx";
import Learning from "./pages/Learning.jsx";
import AssessmentsReports from "./pages/AssessmentsReports.jsx";
import UserManagement from "./pages/UserManagement.jsx";
import MyCourses from "./pages/MyCourses.jsx";
import SherisaAI from "./pages/SherisaAI.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Home />,
  },
  {
    title: "Courses",
    to: "/courses",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <Courses />,
  },
  {
    title: "Learning",
    to: "/learning",
    icon: <GraduationCapIcon className="h-4 w-4" />,
    page: <Learning />,
  },
  {
    title: "Assessments & Reports",
    to: "/assessments-reports",
    icon: <ClipboardCheckIcon className="h-4 w-4" />,
    page: <AssessmentsReports />,
  },
  {
    title: "User Management",
    to: "/user-management",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <UserManagement />,
  },
  {
    title: "My Courses",
    to: "/my-courses",
    icon: <FolderPlusIcon className="h-4 w-4" />,
    page: <MyCourses />,
  },
  {
    title: "SHERISA AI",
    to: "/sherisa-ai",
    icon: <BrainCircuitIcon className="h-4 w-4" />,
    page: <SherisaAI />,
  },
];
