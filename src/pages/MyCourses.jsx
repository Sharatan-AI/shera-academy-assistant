import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { mockCreatedCourses } from '../mockData';

const MyCourses = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">My Courses</h1>
      <Tabs defaultValue="created" className="w-full">
        <TabsList>
          <TabsTrigger value="created">Created Courses</TabsTrigger>
          <TabsTrigger value="new">Create New Course</TabsTrigger>
          <TabsTrigger value="manage">Manage Courses</TabsTrigger>
        </TabsList>
        <TabsContent value="created">
          <Card>
            <CardHeader>
              <CardTitle>Created Courses</CardTitle>
              <CardDescription>View and edit your created courses</CardDescription>
            </CardHeader>
            <CardContent>
              {mockCreatedCourses.map(course => (
                <Card key={course.id} className="mb-4">
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Students: {course.students}</p>
                    <p>Rating: {course.rating}/5</p>
                    <Button className="mt-2">Edit Course</Button>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="new">
          <Card>
            <CardHeader>
              <CardTitle>Create New Course</CardTitle>
              <CardDescription>Set up a new course</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Course Title</label>
                  <Input type="text" placeholder="Enter course title" className="mt-1" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Course Description</label>
                  <textarea
                    rows={3}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter course description"
                  ></textarea>
                </div>
                <Button type="submit">Create Course</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="manage">
          <Card>
            <CardHeader>
              <CardTitle>Manage Courses</CardTitle>
              <CardDescription>Update or delete your courses</CardDescription>
            </CardHeader>
            <CardContent>
              {mockCreatedCourses.map(course => (
                <Card key={course.id} className="mb-4">
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Students: {course.students}</p>
                    <p>Rating: {course.rating}/5</p>
                    <div className="mt-2 space-x-2">
                      <Button>Edit</Button>
                      <Button variant="destructive">Delete</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyCourses;
