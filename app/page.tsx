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
  ChevronDown,
} from "lucide-react"

export default function MeshkatAILanding() {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, role }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage("Thank you! You've been added to our waitlist. We'll notify you when we launch!")
        setEmail("")
        setRole("")
      } else {
        setSubmitMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error('Waitlist signup error:', error)
      setSubmitMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-8 lg:py-16">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column - Text Content */}
              <div className="text-center lg:text-left">
                {/* Logo */}
                <div className="mb-8 lg:mb-12">
                  <img
                    src="/logo.png"
                    alt="HRCounsel.AI Logo"
                    className="h-11 w-auto"
                  />
                </div>

                <div className="inline-flex items-center bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                  <Zap className="w-4 h-4 mr-2" />
                  Coming Soon - Join the Revolution
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  The First{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                    Full-stack AI Firm{" "}
                  </span>
                  for HR Legal Services
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Revolutionizing HR Legal Work with Intelligent AI Lawyers. 
                </p>

                <Button
                  size="lg"
                  onClick={() => {
                    // Scroll to the waitlist form
                    document.getElementById('waitlist-form')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    })
                  }}
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
                      src="/hero.jpg"
                      alt="HRCounsel.AI Product Interface - AI Lawyer with Contract Generator"
                      className="w-full h-auto"
                    />

                    {/* Floating UI Elements */}
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                      AI Online
                    </div>

                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-slate-700 font-medium">Drafting contract...</span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
                </div>

                {/* Additional Floating Cards */}
                <div className="absolute -left-8 top-2/3 transform -translate-y-1/2 hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-6 h-6 text-teal-400" />
                      <div>
                        <div className="text-white font-medium text-sm">HR Legal Documents</div>
                        <div className="text-slate-300 text-xs">Instant, Affordable, 24/7</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-8 bottom-1/4 hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-blue-400" />
                      <div>
                        <div className="text-white font-medium text-sm">Legally Curated</div>
                        <div className="text-slate-300 text-xs">Expert verified</div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three simple ways to get expert HR legal support powered by AI lawyers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <MessageCircle className="w-10 h-10 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Legal Advisory</h3>
              <p className="text-slate-600">
              Get instant guidance from AI lawyers trained in your jurisdiction and HR compliance
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <FileText className="w-10 h-10 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">2. Document Drafting</h3>
              <p className="text-slate-600">
                Receive professionally drafted legal documents tailored to your specific requirements
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Handshake className="w-10 h-10 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">3. Expert Audit</h3>
              <p className="text-slate-600">
              Have your legal documents reviewed by AI lawyers using expert-built playbooks for compliance and accuracy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/3 via-transparent to-blue-500/3"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Comprehensive Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Cover</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive employment law solutions for all your HR needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative items-start">
            {/* Card 1: Recruitment & Selection */}
            <Card className="bg-slate-50 border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => setExpandedCard(expandedCard === 1 ? null : 1)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-100/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Recruitment & Selection</h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                      expandedCard === 1 ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedCard === 1 && (
                  <div className="px-6 pb-6 border-t border-slate-200/50 pt-4 animate-in slide-in-from-top-2 duration-200">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Draft & review job descriptions</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Advise on job ad compliance</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Review interview questions</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Prepare offer letters & onboarding documents</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Card 2: Employment & Engagement */}
            <Card className="bg-slate-50 border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => setExpandedCard(expandedCard === 2 ? null : 2)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-100/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Handshake className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Employment & Engagement</h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                      expandedCard === 2 ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedCard === 2 && (
                  <div className="px-6 pb-6 border-t border-slate-200/50 pt-4 animate-in slide-in-from-top-2 duration-200">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Draft & negotiate employment, contractor, and internship agreements</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Draft non-compete, non-solicitation, and confidentiality clauses</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Prepare IP assignment and secondment agreements</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Card 3: HR Policies & Governance */}
            <Card className="bg-slate-50 border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => setExpandedCard(expandedCard === 3 ? null : 3)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-100/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">HR Policies & Governance</h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                      expandedCard === 3 ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedCard === 3 && (
                  <div className="px-6 pb-6 border-t border-slate-200/50 pt-4 animate-in slide-in-from-top-2 duration-200">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Create & review employee handbooks</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Draft disciplinary, grievance, social media, and IT policies</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Conduct HR compliance audits</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Card 4: Compensation & Benefits */}
            <Card className="bg-slate-50 border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => setExpandedCard(expandedCard === 4 ? null : 4)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-100/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Compensation & Benefits</h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                      expandedCard === 4 ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedCard === 4 && (
                  <div className="px-6 pb-6 border-t border-slate-200/50 pt-4 animate-in slide-in-from-top-2 duration-200">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Draft stock option plans and grant agreements</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Review benefit policies and equity plans</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Card 5: Termination & Offboarding */}
            <Card className="bg-slate-50 border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => setExpandedCard(expandedCard === 5 ? null : 5)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-100/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Termination & Offboarding</h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                      expandedCard === 5 ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedCard === 5 && (
                  <div className="px-6 pb-6 border-t border-slate-200/50 pt-4 animate-in slide-in-from-top-2 duration-200">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Advise on layoffs, notice, and severance</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Draft just cause and without cause termination documentation</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Review settlement terms and release of claims</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Card 6: Dispute Resolution */}
            <Card className="bg-slate-50 border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => setExpandedCard(expandedCard === 6 ? null : 6)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-100/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Dispute Resolution</h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                      expandedCard === 6 ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedCard === 6 && (
                  <div className="px-6 pb-6 border-t border-slate-200/50 pt-4 animate-in slide-in-from-top-2 duration-200">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Manage arbitration and litigation matters</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 text-sm">Draft settlement and release of claim agreements</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why HRCounsel.AI */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why HRCounsel.AI?</h2>
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
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Cross-Border Expertise</h3>
                <p className="text-slate-600">Get clear legal guidance for HR and hiring across multiple jurisdictions</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                  <Bot className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Agentic UX Design</h3>
                <p className="text-slate-600">Agentic AI and intuitive design for fast, seamless results—available 24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sneak Peek */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sneak Peek</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Preview our AI lawyer in action - see how easy it is to generate professional legal documents
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <img
                  src="/hrcounsel-screen.png"
                  alt="HRCounsel.AI Product Interface - AI Lawyer Dashboard"
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
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

            <form id="waitlist-form" onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                required
                disabled={isSubmitting}
              />

              <Select value={role} onValueChange={setRole} disabled={isSubmitting}>
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
                disabled={isSubmitting}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    Get Early Access
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              {submitMessage && (
                <div className={`text-center p-3 rounded-lg text-sm ${
                  submitMessage.includes("Thank you") 
                    ? "bg-green-500/20 text-green-300 border border-green-500/30" 
                    : "bg-red-500/20 text-red-300 border border-red-500/30"
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Contact/CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
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
              services. Let's discuss how HRCounsel.AI can transform your legal workflows.
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
              onClick={() => {
                // Open email client with demo request
                const subject = encodeURIComponent("HRCounsel.AI Demo Request")
                const body = encodeURIComponent(`Hi HRCounsel.AI team,

I'm interested in scheduling a demo of your AI legal services platform.

Please contact me to arrange a demonstration.

Best regards,
[Your Name]`)
                window.open(`mailto:info@meshkat-partners.com?subject=${subject}&body=${body}`)
              }}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="max-w-6xl mx-auto">
            {/* Company Info */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">HRCounsel.AI</h3>
              <p className="text-slate-400">The Future of Employment Law is Here</p>
            </div>

            {/* Office Addresses */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

              {/* Abu Dhabi Office */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                  <h4 className="text-lg font-semibold text-teal-400">Abu Dhabi Office</h4>
                </div>
                <div className="space-y-2 text-slate-300">
                  <p className="font-medium">Meshkat Partners LTD</p>
                  <p className="text-sm leading-relaxed">
                    Abu Dhabi Global Market (ADGM)<br />
                    No. 18, 11th Floor, Sky Tower, Al Reem Island<br />
                     Shams Abu Dhabi, Abu Dhabi - United Arab Emirates
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
