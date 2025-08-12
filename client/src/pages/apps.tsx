import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AppsSvg from "@/components/AppsSvg";
import {
  Cloud,
  BarChart3,
  Bot,
  Activity,
  CheckSquare,
  Shield,
  ExternalLink,
  Code,
  Gamepad2,
  Heart,
} from "lucide-react";

export default function Apps() {
  const apps = [
    {
      icon: CheckSquare,
      title: "home-task-manager",
      description:
        "An app that allows you to create tasks like washing up or cleaning the car, assign a value in pounds so that your worker users can complete them and get paid.",
      category: "Task Management",
      categoryColor: "bg-pawsome-orange text-white",
      gradient: "from-pawsome-orange to-pawsome-yellow",
      replitUrl: "https://home-task-tracker-hillierjim.replit.app",
    },
    {
      icon: Heart,
      title: "Pawsome",
      description:
        "A professional dog training app that allows you to book appointments to have your dog trained.",
      category: "Pet Services",
      categoryColor: "bg-pawsome-blue text-white",
      gradient: "from-pawsome-blue to-pawsome-orange",
      replitUrl: "https://pawsome-hillierjim.replit.app/",
    },
    {
      icon: Gamepad2,
      title: "Snake Game",
      description:
        "Python based classic Snake game (pardon the pun). It's Mobile friendly but plays better on a Laptop or PC.",
      category: "Game",
      categoryColor: "bg-green-600 text-white",
      gradient: "from-green-600 to-green-400",
      replitUrl: "https://snake-hillierjim.replit.app/",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My Applications
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my portfolio of Replit applications showcasing various
            technical skills and innovations
          </p>
        </div>

        {/* Hero Section - Text and Image */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I have been using Replit and its AI Agent to create a few web apps, which are shown below. I believe that the use of AI to help you create a project framework, write code and refine it through a series of contextual prompts/tokens (Vibe coding as is has come to be known by) represents the future of building software solutions. Replit is particularly good at this. It's relatively easy to learn to use, is cost effective and it can deploy your apps in a variety of highly configurable ways. Have a look at some of the apps I created with Replit. These took hours to complete, not days or weeks, which is amazing! I hope you enjoy using them.
            </p>
          </div>
          <div className="flex justify-center">
            <AppsSvg />
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {apps.map((app, index) => (
            <Card
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 hover-lift h-full"
            >
              <CardContent className="p-0 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${app.gradient} rounded-2xl flex items-center justify-center`}
                  >
                    <app.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge className={`px-3 py-1 rounded-full text-sm font-medium ${app.categoryColor}`}>
                    {app.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {app.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {app.description}
                </p>

                <a href={app.replitUrl} target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                  <Button className="w-full bg-pawsome-blue text-white py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View on Replit
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-pawsome-orange to-pawsome-blue text-white p-8 rounded-2xl shadow-xl">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-blue-100 mb-6">
                Let's discuss how my experience can contribute to your next
                project
              </p>
              <Link href="/contact">
                <Button className="bg-pawsome-yellow text-gray-800 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-colors duration-200 shadow-lg">
                  Contact Me
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
