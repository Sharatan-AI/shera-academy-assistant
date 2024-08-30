import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockCourses } from '../mockData';

const CourseCard = ({ course }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{course.title}</CardTitle>
      <CardDescription>{course.category} - {course.difficulty}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Instructor: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
      <Button className="mt-2">Enroll Now</Button>
    </CardContent>
  </Card>
);

const Courses = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Courses</h1>
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="enrolled">Enrolled Courses</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Courses</CardTitle>
              <CardDescription>Browse all available courses</CardDescription>
            </CardHeader>
            <CardContent>
              {mockCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="enrolled">
          <Card>
            <CardHeader>
              <CardTitle>Enrolled Courses</CardTitle>
              <CardDescription>Your current enrollments</CardDescription>
            </CardHeader>
            <CardContent>
              {mockCourses.slice(0, 2).map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recommended">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Courses</CardTitle>
              <CardDescription>Courses you might be interested in</CardDescription>
            </CardHeader>
            <CardContent>
              {mockCourses.slice(2).map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="categories">
          <Card>
            <CardHeader>
              <CardTitle>Course Categories</CardTitle>
              <CardDescription>Browse courses by category</CardDescription>
            </CardHeader>
            <CardContent>
              <ul>
                <li>Business Skills</li>
                <li>Technical Skills</li>
                <li>Soft Skills</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Courses;
