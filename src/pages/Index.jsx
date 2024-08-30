import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Index = () => {
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
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="progress">My Progress</TabsTrigger>
            <TabsTrigger value="chatbot">SHERISA AI</TabsTrigger>
          </TabsList>
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Available Courses</CardTitle>
                <CardDescription>Explore and enroll in our latest courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3].map((course) => (
                    <Card key={course}>
                      <CardHeader>
                        <CardTitle>Course {course}</CardTitle>
                        <CardDescription>Course description goes here</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button>Enroll</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="progress">
            <Card>
              <CardHeader>
                <CardTitle>My Learning Progress</CardTitle>
                <CardDescription>Track your course completion and assessments</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Progress information will be displayed here</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="chatbot">
            <Card>
              <CardHeader>
                <CardTitle>SHERISA AI Assistant</CardTitle>
                <CardDescription>Ask questions and get instant answers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="font-semibold">SHERISA:</p>
                    <p>Hello! How can I assist you today?</p>
                  </div>
                  <div className="flex space-x-2">
                    <Input placeholder="Type your question here..." className="flex-grow" />
                    <Button>Send</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
