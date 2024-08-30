import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { mockLessons, mockAssessments, mockUserProgress } from '../mockData';

const LessonCard = ({ lesson }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{lesson.title}</CardTitle>
      <CardDescription>Duration: {lesson.duration}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{lesson.completed ? "Completed" : "Not completed"}</p>
      <Button className="mt-2">{lesson.completed ? "Review" : "Start Lesson"}</Button>
    </CardContent>
  </Card>
);

const Learning = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Learning</h1>
      <Tabs defaultValue="lessons" className="w-full">
        <TabsList>
          <TabsTrigger value="lessons">All Lessons</TabsTrigger>
          <TabsTrigger value="tests">Tests & Assessments</TabsTrigger>
          <TabsTrigger value="progress">Learning Progress</TabsTrigger>
        </TabsList>
        <TabsContent value="lessons">
          <Card>
            <CardHeader>
              <CardTitle>All Lessons</CardTitle>
              <CardDescription>Access your course materials</CardDescription>
            </CardHeader>
            <CardContent>
              {mockLessons.map(lesson => (
                <LessonCard key={lesson.id} lesson={lesson} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tests">
          <Card>
            <CardHeader>
              <CardTitle>Tests & Assessments</CardTitle>
              <CardDescription>View your upcoming and completed assessments</CardDescription>
            </CardHeader>
            <CardContent>
              {mockAssessments.map(assessment => (
                <Card key={assessment.id} className="mb-4">
                  <CardHeader>
                    <CardTitle>{assessment.title}</CardTitle>
                    <CardDescription>{assessment.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Due Date: {assessment.dueDate}</p>
                    <Button className="mt-2">Start Assessment</Button>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle>Learning Progress</CardTitle>
              <CardDescription>Track your course progress</CardDescription>
            </CardHeader>
            <CardContent>
              {mockUserProgress.map(progress => (
                <Card key={progress.courseId} className="mb-4">
                  <CardHeader>
                    <CardTitle>Course {progress.courseId}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Progress: {progress.progress}%</p>
                    <p>Last Accessed: {progress.lastAccessed}</p>
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

export default Learning;
