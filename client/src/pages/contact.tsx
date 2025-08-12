import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hillier.jim@gmail.com",
      link: "mailto:hillier.jim@gmail.com",
      color: "bg-pawsome-orange",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "07733320473",
      link: "tel:07733320473",
      color: "bg-pawsome-yellow text-gray-800",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/jim-hillier-8016b93b",
      link: "https://www.linkedin.com/in/jim-hillier-8016b93b/",
      color: "bg-pawsome-blue",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Llantwit Major, Wales",
      color: "bg-gradient-to-br from-pawsome-orange to-pawsome-blue text-white",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to discuss opportunities and collaborate on your next technical
            challenge
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Professional workspace image */}
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
            alt="Professional workspace with modern technology setup"
            className="rounded-2xl shadow-lg w-full h-64 object-cover"
          />

          <Card className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-12 h-12 ${info.color} rounded-2xl flex items-center justify-center mr-4`}
                    >
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pawsome-blue hover:text-pawsome-orange transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pawsome-blue to-pawsome-orange text-white p-8 rounded-2xl shadow-xl">
            <CardContent className="p-0 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-blue-100">
                Whether you're looking for technical leadership, AWS expertise,
                or agile team management, I'm here to help drive your projects
                to success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}