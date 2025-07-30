"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
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
  ArrowRight,
  Building,
  TrendingUp,
  Globe,
} from "lucide-react"

export default function MeshkatAIDesign3() {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Waitlist signup:", { email, role })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Professional Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">MeshkatAI</span>
            </div>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white">Contact Sales</Button>
          </div>
        </div>
      </header>

      {/* Corporate Hero */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-slate-100 text-slate-700 hover:bg-slate-200">
                  <Building className="w-3 h-3 mr-2" />
                  Enterprise Ready
                </Badge>

                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Revolutionizing HR Legal Work with
                  <span className="text-slate-600"> Human-Like AI Lawyers</span>
                </h1>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  MeshkatAI is the first full-stack AI law firm specialized in Employment Law. Trusted by HR
                  professionals, startups, and enterprises worldwide for instant legal document generation and
                  compliance guidance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8">
                    Request Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 bg-transparent">
                    Join Waitlist
                  </Button>
                </div>

                <div className="flex items-center space-x-8 text-sm text-slate-500">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    SOC 2 Compliant
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    GDPR Ready
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Enterprise Support
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="shadow-2xl border-0">
                  <CardContent className="p-0">
                    <img
                      src="/placeholder.svg?height=500&width=600&text=Professional+AI+Interface"
                      alt="MeshkatAI Professional Interface"
                      className="w-full h-auto rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Streamlined Legal Process</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our enterprise-grade platform simplifies complex legal workflows into three efficient steps
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: MessageCircle,
                  title: "Consultation",
                  desc: "Engage with our AI legal expert through secure, encrypted conversations",
                  features: ["Natural language processing", "Context-aware responses", "Multi-language support"],
                },
                {
                  icon: FileText,
                  title: "Document Generation",
                  desc: "Generate compliant legal documents with enterprise-grade accuracy",
                  features: ["Template customization", "Compliance checking", "Version control"],
                },
                {
                  icon: Handshake,
                  title: "Ongoing Support",
                  desc: "Continuous legal guidance and document management support",
                  features: ["Review workflows", "Amendment tracking", "Legal updates"],
                },
              ].map((step, index) => (
                <Card key={index} className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-500">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Coverage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive Legal Coverage</h2>
              <p className="text-xl text-slate-600">Complete employment law solutions for modern businesses</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-slate-600" />
                    Legal Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {[
                      { name: "Employment Contracts", desc: "Comprehensive employment agreements" },
                      { name: "Non-Disclosure Agreements", desc: "Confidentiality and IP protection" },
                      { name: "Non-Compete Clauses", desc: "Competitive restriction agreements" },
                      { name: "Severance Agreements", desc: "Termination and separation terms" },
                      { name: "Employee Handbooks", desc: "Policy and procedure documentation" },
                      { name: "Compliance Forms", desc: "Regulatory requirement documents" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start p-3 bg-slate-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-slate-900">{item.name}</div>
                          <div className="text-sm text-slate-500">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 flex items-center">
                    <Mail className="w-6 h-6 mr-3 text-slate-600" />
                    HR Communications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {[
                      { name: "Offer Letters", desc: "Professional employment offers" },
                      { name: "Termination Letters", desc: "Compliant separation notices" },
                      { name: "Warning Letters", desc: "Disciplinary action documentation" },
                      { name: "Performance Reviews", desc: "Evaluation and feedback forms" },
                      { name: "Reference Letters", desc: "Employment verification documents" },
                      { name: "Promotion Letters", desc: "Career advancement notifications" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start p-3 bg-slate-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-medium text-slate-900">{item.name}</div>
                          <div className="text-sm text-slate-500">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Value Props */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Enterprise Advantages</h2>
              <p className="text-xl text-slate-600">
                Why leading organizations choose MeshkatAI for their legal operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "AI-Powered Precision",
                  desc: "99.9% accuracy in document generation with continuous learning algorithms",
                  metric: "99.9% Accuracy",
                },
                {
                  icon: Users,
                  title: "HR Specialization",
                  desc: "Exclusively focused on employment law with deep domain expertise",
                  metric: "Employment Law Only",
                },
                {
                  icon: Shield,
                  title: "Regulatory Compliance",
                  desc: "Always current with latest employment regulations and legal requirements",
                  metric: "Real-time Updates",
                },
                {
                  icon: DollarSign,
                  title: "Cost Optimization",
                  desc: "Reduce legal expenses by up to 80% compared to traditional law firms",
                  metric: "80% Cost Reduction",
                },
                {
                  icon: TrendingUp,
                  title: "Scalable Operations",
                  desc: "Handle unlimited legal requests with consistent quality and speed",
                  metric: "Unlimited Scale",
                },
                {
                  icon: Globe,
                  title: "Global Coverage",
                  desc: "Multi-jurisdiction support with localized legal requirements",
                  metric: "50+ Countries",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-white border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-slate-600" />
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        {item.metric}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Legal Operations?</h2>
            <p className="text-xl text-slate-300 mb-12">
              Join forward-thinking organizations already using MeshkatAI to streamline their HR legal processes
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise Demo</h3>
                  <p className="text-slate-300 mb-6">Schedule a personalized demonstration for your organization</p>
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 w-full">
                    Request Demo
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">Early Access</h3>
                  <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Business email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                    <Select value={role} onValueChange={setRole}>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hr-director">HR Director</SelectItem>
                        <SelectItem value="legal-counsel">Legal Counsel</SelectItem>
                        <SelectItem value="ceo">CEO/Founder</SelectItem>
                        <SelectItem value="operations">Operations</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button type="submit" size="lg" className="w-full bg-slate-600 hover:bg-slate-500">
                      Get Early Access
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-slate-400 mb-4">Questions? Contact our enterprise team</p>
              <a href="mailto:enterprise@meshkatai.com" className="text-white hover:text-slate-300 font-medium">
                enterprise@meshkatai.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-slate-900">MeshkatAI</span>
                </div>
                <p className="text-slate-600 text-sm">
                  The future of employment law services, powered by artificial intelligence.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Product</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Security</li>
                  <li>Integrations</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Company</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Press</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Support</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>Documentation</li>
                  <li>Help Center</li>
                  <li>Status</li>
                  <li>Enterprise</li>
                </ul>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-slate-500">© 2024 MeshkatAI. All rights reserved.</p>
              <div className="flex space-x-6 text-sm text-slate-500 mt-4 md:mt-0">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Cookie Policy</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
