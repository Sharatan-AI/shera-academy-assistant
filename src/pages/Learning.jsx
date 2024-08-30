import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
              {/* Add lesson listing component here */}
            </CardContent>
          </Card>
        </TabsContent>
        {/* Add other TabsContent for tests and progress */}
      </Tabs>
    </div>
  );
};

export default Learning;