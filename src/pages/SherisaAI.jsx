import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockAISearchResults } from '../mockData';

const SherisaAI = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">SHERISA AI</h1>
      <Tabs defaultValue="search" className="w-full">
        <TabsList>
          <TabsTrigger value="search">AI Search</TabsTrigger>
          <TabsTrigger value="internal">Internal Data</TabsTrigger>
          <TabsTrigger value="external">External Data</TabsTrigger>
          <TabsTrigger value="summarization">AI Summarization</TabsTrigger>
          <TabsTrigger value="analytics">AI Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="search">
          <Card>
            <CardHeader>
              <CardTitle>AI Search</CardTitle>
              <CardDescription>Search documents, reports, and data using AI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2 mb-4">
                <Input placeholder="Enter your search query..." className="flex-grow" />
                <Button>Search</Button>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Search Results</h3>
                {mockAISearchResults.map(result => (
                  <Card key={result.id} className="mb-2">
                    <CardContent className="py-2">
                      <h4 className="font-medium">{result.title}</h4>
                      <p className="text-sm text-gray-500">Type: {result.type}</p>
                      <p className="text-sm text-gray-500">Relevance: {result.relevance.toFixed(2)}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="internal">
          <Card>
            <CardHeader>
              <CardTitle>Internal Data Analysis</CardTitle>
              <CardDescription>Analyze internal course data and user behavior</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Select data sources for analysis:</p>
              <div className="space-y-2 mt-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Course Completion Rates
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> User Engagement Metrics
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Assessment Scores
                </label>
              </div>
              <Button className="mt-4">Generate Analysis</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="external">
          <Card>
            <CardHeader>
              <CardTitle>External Data Integration</CardTitle>
              <CardDescription>Incorporate external data sources for comprehensive insights</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Connect external data sources:</p>
              <div className="space-y-2 mt-2">
                <Button variant="outline" className="w-full justify-start">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Connect to Industry Reports API
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Import Market Trends Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="summarization">
          <Card>
            <CardHeader>
              <CardTitle>AI Summarization</CardTitle>
              <CardDescription>Generate concise summaries of lengthy content</CardDescription>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full h-32 p-2 border rounded"
                placeholder="Paste your content here for summarization..."
              ></textarea>
              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700">Summary Length</label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>Short (1-2 sentences)</option>
                  <option>Medium (3-4 sentences)</option>
                  <option>Long (5+ sentences)</option>
                </select>
              </div>
              <Button className="mt-4">Generate Summary</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>AI Analytics</CardTitle>
              <CardDescription>Advanced analytics and predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Select analytics type:</p>
              <div className="space-y-2 mt-2">
                <Button variant="outline" className="w-full justify-start">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Predictive Course Completion
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                  </svg>
                  Learning Path Optimization
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  Skill Gap Analysis
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SherisaAI;
