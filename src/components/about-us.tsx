import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Card className="rounded-2xl shadow-md">
        <CardContent className="space-y-4">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p>
            Welcome to <strong>AI Mock Interviews</strong>, your smart
            companion in cracking your dream job!
          </p>
          <p>
            Our platform uses advanced AI to simulate real-world interview
            scenarios. Get personalized feedback and practice with confidence.
          </p>
          <p>🧠 Learn. 🎯 Practice. 💼 Succeed.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;
