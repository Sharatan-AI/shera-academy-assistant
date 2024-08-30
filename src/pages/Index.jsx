import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { navItems } from '../nav-items';
import { Link } from 'react-router-dom';
import { mockAnnouncements, mockCourses, mockUserProgress } from '../mockData';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SHERA Academy</h1>
          <nav>
            <Button variant="outline" className="text-white border-white mr-2">Login</Button>
            <Button variant="outline" className="text-white border-white">Register</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription>Welcome to SHERA Academy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Latest News</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {mockAnnouncements.map(announcement => (
                      <li key={announcement.id}>
                        <h3 className="font-semibold">{announcement.title}</h3>
                        <p className="text-sm text-gray-600">{announcement.content}</p>
                        <p className="text-xs text-gray-400">{announcement.date}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enrolled Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {mockCourses.slice(0, 3).map(course => (
                      <li key={course.id}>
                        <h3 className="font-semibold">{course.title}</h3>
                        <p className="text-sm text-gray-600">{course.instructor}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {mockUserProgress.map(progress => {
                      const course = mockCourses.find(c => c.id === progress.courseId);
                      return (
                        <li key={progress.courseId}>
                          <h3 className="font-semibold">{course.title}</h3>
                          <p className="text-sm text-gray-600">Progress: {progress.progress}%</p>
                          <p className="text-xs text-gray-400">Last accessed: {progress.lastAccessed}</p>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {navItems.slice(1).map((item) => (
            <Link key={item.to} to={item.to}>
              <Card className="hover:bg-gray-50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Access {item.title.toLowerCase()} features</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
