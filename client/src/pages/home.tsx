import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Cloud,
  Database,
  Code,
  BarChart3,
  MessageSquare,
  Bus,
  Target,
  Award,
  CheckCircle,
} from "lucide-react";
import profileImage from "@assets/image_1754815619897.png";

export default function Home() {
  const skills = [
    {
      icon: Users,
      title: "Leadership & Management",
      items: [
        "Team Management & Performance",
        "121s & Upskilling Programs",
        "Mentoring & Coaching",
        "Certified Professional Scrum Master",
      ],
      gradient: "from-pawsome-orange to-pawsome-yellow",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      items: [
        "AWS (VPC, ECS, ECR, EC2, S3)",
        "Docker Containerisation",
        "Git CI/CD - GitHub",
        "Linux/AWS CLI",
      ],
      gradient: "from-pawsome-blue to-pawsome-orange",
    },
    {
      icon: Database,
      title: "Data Engineering",
      items: [
        "Confluent Cloud (Kafka PaaS)",
        "Qlik Replicate",
        "Wherescape, Snowflake",
        "Oracle, SQL Server",
      ],
      gradient: "from-pawsome-yellow to-pawsome-blue",
    },
    {
      icon: Code,
      title: "Programming",
      items: [
        "Python, JavaScript, HTML/CSS",
        "Visual Basic/.Net, PowerShell",
        "ASP, AJAX, XML, XSLT",
        "JSON, SQL, jQuery",
      ],
      gradient: "from-pawsome-orange to-pawsome-blue",
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      items: [
        "Power BI, Business Objects",
        "SAS, Web Development",
        "Datadog, AWS CloudWatch",
        "Data Analysis & Reporting",
      ],
      gradient: "from-pawsome-yellow to-pawsome-orange",
    },
    {
      icon: MessageSquare,
      title: "Communication",
      items: [
        "Excellent Written & Verbal Skills",
        "Executive-Level Presentations",
        "Cross-Functional Collaboration",
        "Stakeholder Management",
      ],
      gradient: "from-pawsome-blue to-pawsome-yellow",
    },
  ];

  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      status: "Certified",
      icon: "☁️",
      bgColor: "bg-orange-100 text-orange-600",
    },
    {
      title: "Professional Scrum Master",
      status: "www.scrum.org",
      icon: "⚙️",
      bgColor: "bg-blue-100 text-blue-600",
    },
    {
      title: "AWS Solutions Architect",
      status: "In Progress",
      icon: "🏗️",
      bgColor: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pawsome-blue to-pawsome-orange text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                IT Leadership &{" "}
                <span className="text-pawsome-yellow">Innovation</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                28+ years of technical expertise combined with proven team
                management and agile methodologies. Ready for your next
                challenge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/apps">
                  <Button
                    size="lg"
                    className="bg-pawsome-yellow text-gray-800 px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-400 transition-colors duration-200 shadow-lg"
                  >
                    View My Apps
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white bg-transparent px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-pawsome-blue transition-colors duration-200"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative w-full min-h-[400px] flex items-center justify-center">
              <img
                src={profileImage}
                alt="Professional headshot"
                className="w-80 h-80 rounded-full shadow-2xl object-cover border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personal Statement Section */}
      <section className="py-16 bg-pawsome-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Professional Background
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Building technical excellence through leadership and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-pawsome-orange rounded-lg flex items-center justify-center mr-3">
                      <Bus className="h-4 w-4 text-white" />
                    </div>
                    Personal Statement
                  </h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      I have over 28 years in the IT industry working for a
                      large FTSE 100 financial with a wide range of experience &
                      skills spanning many technologies. This includes exposure
                      to Windows programming, web development, data engineering
                      and, more recently, AWS cloud engineering & data
                      streaming.
                    </p>
                    <p>
                      I moved into team management 20 years ago and have
                      continued to manage teams of developers and data engineers
                      ever since using Agile methodologies. I firmly believe
                      that effective management requires strong technical skills
                      and I endeavour to fully understand the stack for the
                      services that the teams support.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-pawsome-blue rounded-lg flex items-center justify-center mr-3">
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    Current Goals
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    I am a Certified AWS Cloud Practitioner and am currently
                    working towards AWS Certified Solution Architect (Associate)
                    status. I am also a Professional Scrum Master. I am now
                    looking for a new challenge that can best utilise my skills
                    and experience as a technical Scrum master and Engineering
                    Manager.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                alt="Abstract technology visualization representing cloud computing and data analytics"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Skills Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Key Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive technical and leadership capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100 hover-lift"
              >
                <CardContent className="p-0">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${skill.gradient} rounded-2xl flex items-center justify-center mb-4`}
                  >
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {skill.title}
                  </h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-pawsome-orange mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-pawsome-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Certifications & Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift transition-all duration-200"
              >
                <CardContent className="p-0">
                  <div
                    className={`w-16 h-16 ${cert.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-2xl">{cert.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600">{cert.status}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
