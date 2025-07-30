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
  ArrowRight,
  Zap,
  Play,
} from "lucide-react"

export default function MeshkatAIDesign1() {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Waitlist signup:", { email, role })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Minimalist Hero */}
      <section className="relative bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-6 text-teal-600 border-teal-200">
                  <Zap className="w-3 h-3 mr-2" />
                  Coming Soon
                </Badge>

                <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                  Revolutionizing
                  <br />
                  <span className="font-semibold text-teal-600">HR Legal Work</span>
                  <br />
                  with AI Lawyers
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                  The first full-stack AI law firm specialized in Employment Law. Generate documents, ensure compliance,
                  and get negotiation support instantly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8">
                    Join Waitlist
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-300 bg-transparent">
                    <Play className="mr-2 w-4 h-4" />
                    Watch Demo
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 shadow-sm">
                  <img
                    src="/placeholder.svg?height=400&width=500&text=AI+Avatar+Interface"
                    alt="AI Lawyer Interface"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">How It Works</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: MessageCircle, title: "Chat with Avatar", desc: "Natural conversation with our AI lawyer" },
                { icon: FileText, title: "Document Generation", desc: "Professional legal documents in minutes" },
                { icon: Handshake, title: "Negotiation Support", desc: "Ongoing guidance and review support" },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100">
                    <step.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Coverage Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-4">What We Cover</h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-0 shadow-sm bg-gray-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-medium text-gray-900 mb-6">Legal Documents</h3>
                  <div className="space-y-3">
                    {[
                      "Employment Contracts",
                      "Non-Disclosure Agreements",
                      "Non-Compete Clauses",
                      "Severance Agreements",
                      "Employee Handbooks",
                      "Policy Documents",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-gray-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-medium text-gray-900 mb-6">HR Letters</h3>
                  <div className="space-y-3">
                    {[
                      "Offer Letters",
                      "Termination Letters",
                      "Warning Letters",
                      "Performance Reviews",
                      "Reference Letters",
                      "Promotion Letters",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Value Props */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light text-gray-900 mb-16">Why Choose MeshkatAI?</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Target, title: "AI Precision", desc: "Advanced accuracy in every document" },
                { icon: Users, title: "HR Focused", desc: "Specialized in employment law" },
                { icon: Shield, title: "Compliance", desc: "Always up-to-date regulations" },
                { icon: DollarSign, title: "Cost Effective", desc: "80% cost reduction" },
                { icon: Handshake, title: "Negotiation", desc: "Strategic guidance included" },
                { icon: Bot, title: "Human-like UX", desc: "Intuitive AI interaction" },
              ].map((item, index) => (
                <div key={index} className="p-6">
                  <item.icon className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clean Signup */}
      <section className="py-24 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6">Get Early Access</h2>
            <p className="text-xl text-teal-100 mb-12">Join the waitlist for exclusive early access to MeshkatAI</p>

            <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-gray-900 border-0"
                required
              />
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="bg-white text-gray-900 border-0">
                  <SelectValue placeholder="Your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hr-professional">HR Professional</SelectItem>
                  <SelectItem value="startup-founder">Startup Founder</SelectItem>
                  <SelectItem value="enterprise-executive">Enterprise Executive</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" size="lg" className="w-full bg-white text-teal-600 hover:bg-gray-100">
                Get Early Access
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-light text-gray-900 mb-2">MeshkatAI</h3>
            <p className="text-gray-600 mb-4">hello@meshkatai.com</p>
            <p className="text-sm text-gray-500">© 2024 MeshkatAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
