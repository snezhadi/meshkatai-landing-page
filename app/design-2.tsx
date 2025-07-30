"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MessageCircle,
  FileText,
  Users,
  CheckCircle,
  Target,
  Shield,
  DollarSign,
  Handshake,
  Bot,
  Mail,
  Sparkles,
  Rocket,
} from "lucide-react"

export default function MeshkatAIDesign2() {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Waitlist signup:", { email, role })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Bold Hero with Geometric Shapes */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-8 bg-teal-500/20 text-teal-300 border-teal-500/30 px-6 py-2 text-lg">
              <Rocket className="w-4 h-4 mr-2" />
              LAUNCHING SOON
            </Badge>

            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-none">
              <span className="block text-white">REVOLUTIONIZING</span>
              <span className="block bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                HR LEGAL WORK
              </span>
            </h1>

            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
              MeshkatAI is the world's first full-stack AI law firm specialized in Employment Law. Experience the future
              of legal services today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-12 py-4 text-xl font-bold rounded-full"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                JOIN WAITLIST
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-12 py-4 text-xl rounded-full bg-transparent"
              >
                WATCH DEMO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Process Steps */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6">HOW IT WORKS</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {[
                {
                  icon: MessageCircle,
                  number: "01",
                  title: "CHAT WITH AI",
                  desc: "Engage in natural conversation with our advanced AI lawyer avatar",
                  color: "from-teal-400 to-teal-600",
                },
                {
                  icon: FileText,
                  number: "02",
                  title: "GENERATE DOCS",
                  desc: "Receive professionally crafted legal documents in minutes",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  icon: Handshake,
                  number: "03",
                  title: "GET SUPPORT",
                  desc: "Ongoing negotiation guidance and document review assistance",
                  color: "from-purple-400 to-purple-600",
                },
              ].map((step, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-6xl font-black text-gray-600 mb-4">{step.number}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300 text-lg">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Coverage Section */}
      <section className="py-32 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6">WHAT WE COVER</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
              <Card className="relative bg-gray-800/80 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <FileText className="w-8 h-8 mr-4 text-teal-400" />
                    LEGAL DOCUMENTS
                  </h3>
                  <div className="grid gap-4">
                    {[
                      "Employment Contracts",
                      "Non-Disclosure Agreements",
                      "Non-Compete Clauses",
                      "Severance Agreements",
                      "Employee Handbooks",
                      "Policy Documents",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-700/50 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-teal-400 mr-4" />
                        <span className="text-white font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <Card className="relative bg-gray-800/80 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <Mail className="w-8 h-8 mr-4 text-blue-400" />
                    HR LETTERS
                  </h3>
                  <div className="grid gap-4">
                    {[
                      "Offer Letters",
                      "Termination Letters",
                      "Warning Letters",
                      "Performance Reviews",
                      "Reference Letters",
                      "Promotion Letters",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-700/50 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-blue-400 mr-4" />
                        <span className="text-white font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Value Props */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-white mb-6">WHY MESHKATAI?</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "AI PRECISION", desc: "Unmatched accuracy", color: "from-red-400 to-red-600" },
              { icon: Users, title: "HR FOCUSED", desc: "Employment law experts", color: "from-teal-400 to-teal-600" },
              { icon: Shield, title: "COMPLIANCE", desc: "Always up-to-date", color: "from-blue-400 to-blue-600" },
              {
                icon: DollarSign,
                title: "COST EFFECTIVE",
                desc: "80% cost reduction",
                color: "from-green-400 to-green-600",
              },
              {
                icon: Handshake,
                title: "NEGOTIATION",
                desc: "Strategic guidance",
                color: "from-purple-400 to-purple-600",
              },
              {
                icon: Bot,
                title: "HUMAN-LIKE UX",
                desc: "Intuitive interaction",
                color: "from-orange-400 to-orange-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:bg-gray-900/70 transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bold CTA */}
      <section className="py-32 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-black text-white mb-8">GET EARLY ACCESS</h2>
            <p className="text-2xl text-white/90 mb-12">Be the first to experience the future of legal services</p>

            <form onSubmit={handleWaitlistSubmit} className="max-w-lg mx-auto space-y-6">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 text-lg py-4"
                required
              />
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="bg-white/20 border-white/30 text-white text-lg py-4">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hr-professional">HR Professional</SelectItem>
                  <SelectItem value="startup-founder">Startup Founder</SelectItem>
                  <SelectItem value="enterprise-executive">Enterprise Executive</SelectItem>
                </SelectContent>
              </Select>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-black hover:bg-gray-900 text-white font-bold py-4 text-xl rounded-full"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                GET EARLY ACCESS
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Bold Footer */}
      <footer className="py-16 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-4xl font-black text-white mb-4">MESHKATAI</h3>
            <p className="text-gray-400 text-lg mb-4">hello@meshkatai.com</p>
            <p className="text-gray-600">© 2024 MeshkatAI. The future is here.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
