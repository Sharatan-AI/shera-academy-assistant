import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { mockAssessments, mockReports } from '../mockData';

const AssessmentCard = ({ assessment }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{assessment.title}</CardTitle>
      <CardDescription>{assessment.type}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Due Date: {assessment.dueDate}</p>
      <Button className="mt-2">Start Assessment</Button>
    </CardContent>
  </Card>
);

const ReportCard = ({ report }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{report.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Generated on: {report.generatedDate}</p>
      <Button className="mt-2">View Report</Button>
    </CardContent>
  </Card>
);

const AssessmentsReports = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Assessments & Reports</h1>
      <Tabs defaultValue="assessments" className="w-full">
        <TabsList>
          <TabsTrigger value="assessments">All Assessments</TabsTrigger>
          <TabsTrigger value="knowledge-tests">Knowledge Tests</TabsTrigger>
          <TabsTrigger value="reports">Learning Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="assessments">
          <Card>
            <CardHeader>
              <CardTitle>All Assessments</CardTitle>
              <CardDescription>View and take your assessments</CardDescription>
            </CardHeader>
            <CardContent>
              {mockAssessments.map(assessment => (
                <AssessmentCard key={assessment.id} assessment={assessment} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="knowledge-tests">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Tests</CardTitle>
              <CardDescription>Test your knowledge on various topics</CardDescription>
            </CardHeader>
            <CardContent>
              {mockAssessments.filter(a => a.type === 'Quiz').map(assessment => (
                <AssessmentCard key={assessment.id} assessment={assessment} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Learning Reports</CardTitle>
              <CardDescription>View your learning progress reports</CardDescription>
            </CardHeader>
            <CardContent>
              {mockReports.map(report => (
                <ReportCard key={report.id} report={report} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AssessmentsReports;
