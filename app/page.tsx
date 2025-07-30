"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  Zap,
  Clock,
  Award,
} from "lucide-react"

export default function MeshkatAILanding() {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle waitlist signup
    console.log("Waitlist signup:", { email, role })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90" />

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                  <Zap className="w-4 h-4 mr-2" />
                  Coming Soon - Join the Revolution
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Revolutionizing HR Legal Work with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                    Human-Like AI Lawyers
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  MeshkatAI is the first full-stack AI law firm specialized in Employment Law, providing instant legal
                  document generation, compliance guidance, and negotiation support through our advanced digital human
                  interface.
                </p>

                <Button
                  size="lg"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Right Column - Product Image */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                  {/* Main Product Image */}
                  <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <img
                      src="/placeholder.svg?height=600&width=800&text=MeshkatAI+Dashboard+-+AI+Lawyer+Avatar+with+Contract+Generator+Interface"
                      alt="MeshkatAI Product Interface - AI Lawyer Avatar with Contract Generator"
                      className="w-full h-auto"
                    />

                    {/* Floating UI Elements */}
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      AI Online
                    </div>

                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-slate-700 font-medium">Generating contract...</span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
                </div>

                {/* Additional Floating Cards */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-6 h-6 text-teal-400" />
                      <div>
                        <div className="text-white font-medium text-sm">Employment Contract</div>
                        <div className="text-slate-300 text-xs">Fast, Affordable, 24/7</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-8 bottom-1/4 hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-blue-400" />
                      <div>
                        <div className="text-white font-medium text-sm">100% Compliant</div>
                        <div className="text-slate-300 text-xs">Legal verified</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Three simple steps to get professional legal support for your HR needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <MessageCircle className="w-10 h-10 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Chat with Avatar</h3>
              <p className="text-slate-600">
                Interact with our AI lawyer through natural conversation to explain your legal needs
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <FileText className="w-10 h-10 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Document Generation</h3>
              <p className="text-slate-600">
                Receive professionally drafted legal documents tailored to your specific requirements
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Handshake className="w-10 h-10 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Negotiation Support</h3>
              <p className="text-slate-600">
                Get ongoing support for document review, revisions, and negotiation strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Cover</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive employment law solutions for all your HR needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="documents" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-100 p-1 rounded-lg">
                <TabsTrigger
                  value="documents"
                  className="text-lg py-3 px-6 rounded-md font-semibold transition-all duration-200 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:text-slate-800 data-[state=inactive]:hover:bg-slate-50"
                >
                  Legal Documents
                </TabsTrigger>
                <TabsTrigger
                  value="letters"
                  className="text-lg py-3 px-6 rounded-md font-semibold transition-all duration-200 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:text-slate-800 data-[state=inactive]:hover:bg-slate-50"
                >
                  HR Letters
                </TabsTrigger>
              </TabsList>

              <TabsContent value="documents">
                <Card>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-slate-700">Employment Contracts</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-slate-700">Non-Disclosure Agreements</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-slate-700">Non-Compete Clauses</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-slate-700">Severance Agreements</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-slate-700">Employee Handbooks</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-slate-700">Policy Documents</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-slate-700">Compliance Forms</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-slate-700">Termination Documents</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="letters">
                <Card>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-slate-700">Offer Letters</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-slate-700">Termination Letters</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-slate-700">Warning Letters</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-slate-700">Performance Reviews</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-slate-700">Reference Letters</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-slate-700">Promotion Letters</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-slate-700">Leave Approvals</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                          <span className="text-slate-700">Disciplinary Actions</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Why MeshkatAI */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why MeshkatAI?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The future of legal services is here—faster, smarter, available anytime, anywhere, and more affordable than ever
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">AI Legal Precision</h3>
                <p className="text-slate-600">
                  AI plus expert-curated legal knowledge ensures accuracy and compliance
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <Users className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">HR Focus</h3>
                <p className="text-slate-600">Specialized exclusively in employment law and HR needs</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <Shield className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Compliance</h3>
                <p className="text-slate-600">Stay up-to-date with the latest employment laws and regulations</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <DollarSign className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Cost Reduction</h3>
                <p className="text-slate-600">Reduce legal costs significantly compared to traditional law firms</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <Handshake className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Negotiation Help</h3>
                <p className="text-slate-600">Get strategic guidance for contract negotiations and disputes</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <Bot className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Digital Human UX</h3>
                <p className="text-slate-600">Intuitive interface with human-like AI interaction, accessible 24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sneak Peek */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sneak Peek</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Preview our AI lawyer in action - see how easy it is to generate professional legal documents
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <img
                  src="/placeholder.svg?height=450&width=800"
                  alt="MeshkatAI Product Interface"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4 mr-2" />
              Coming Soon
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Early Access</h2>
            <p className="text-xl text-slate-300 mb-8">
              Be among the first to experience the future of HR legal services. Join our waitlist and get exclusive
              early access when we launch.
            </p>

            <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                required
              />

              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hr-professional">HR Professional</SelectItem>
                  <SelectItem value="startup-founder">Startup Founder</SelectItem>
                  <SelectItem value="enterprise-executive">Enterprise Executive</SelectItem>
                  <SelectItem value="legal-counsel">Legal Counsel</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact/CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Partnership Opportunities
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to Transform Your HR Legal Operations?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              We're looking for forward-thinking organizations to partner with us in revolutionizing employment law
              services. Let's discuss how MeshkatAI can transform your legal workflows.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center text-slate-700">
                <Mail className="w-5 h-5 mr-2 text-teal-500" />
                <a href="mailto:info@meshkat-partners.com" className="hover:text-teal-600 transition-colors">
                info@meshkat-partners.com
                </a>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Company Info */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">MeshkatAI</h3>
              <p className="text-slate-400">The Future of Employment Law is Here</p>
            </div>

            {/* Office Addresses */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Abu Dhabi Office */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                  <h4 className="text-lg font-semibold text-teal-400">Abu Dhabi Office</h4>
                </div>
                <div className="space-y-2 text-slate-300">
                  <p className="font-medium">Abu Dhabi Global Market (ADGM)</p>
                  <p className="text-sm leading-relaxed">
                    No. 18, 11th Floor, Sky Tower<br />
                    Al Reem Island - Shams Abu Dhabi<br />
                    Abu Dhabi - United Arab Emirates
                  </p>
                </div>
              </div>

              {/* Toronto Office */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                  <h4 className="text-lg font-semibold text-teal-400">Toronto Office</h4>
                </div>
                <div className="space-y-2 text-slate-300">
                  <p className="font-medium">Meshkat Partners Inc.</p>
                  <p className="text-sm leading-relaxed">
                    Unit 502, 55 Commerce Valley Dr. West, #21<br />
                    Thornhill, ON, L3T 7V9<br />
                    Canada
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center mt-8 pt-8 border-t border-slate-700">
              <div className="flex items-center justify-center text-slate-400 mb-4">
                <Mail className="w-4 h-4 mr-2 text-teal-400" />
                <a href="mailto:info@meshkat-partners.com" className="hover:text-teal-400 transition-colors">
                  info@meshkat-partners.com
                </a>
              </div>
              
              {/* Copyright */}
              <div className="text-center text-slate-500 text-sm">
                <p>&copy; 2025 Meshkat Partners Inc. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
