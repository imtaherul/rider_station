// import ContactPage from "@/components/contact-from";
// import React from "react";

// function ContactUS() {
//   return <ContactPage />;
// }

// export default ContactUS;

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Building, Headphones } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "@/components/mobile-menu";

import React from "react";
import ContactPage from "@/components/contact-from";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/rider-station-logo.png"
              alt="Rider Station Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Rider Station</h1>
              <p className="text-xs text-orange-600">Your Delivery Partner</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-orange-600"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-sm font-medium text-gray-600 hover:text-orange-600"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-gray-600 hover:text-orange-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-orange-800 hover:text-orange-600"
            >
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu currentPage="contact" />
        </div>
      </header>
      <ContactPage />
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-gray-800">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to the most common questions about our services and
              how we can help your business.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  How quickly can you deploy riders for my business?
                </h3>
                <p className="text-gray-600">
                  We can typically deploy qualified riders within 24-48 hours
                  for urgent needs. For larger deployments, we recommend 3-5
                  business days to ensure proper onboarding and training.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What areas do you cover in Saudi Arabia?
                </h3>
                <p className="text-gray-600">
                  We provide comprehensive coverage across all major Saudi
                  cities including Riyadh, Jeddah, Dammam, Khobar, Mecca,
                  Medina, and expanding to smaller cities based on demand.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Do you provide insurance coverage for deliveries?
                </h3>
                <p className="text-gray-600">
                  Yes, all our riders are fully insured with comprehensive
                  coverage including vehicle insurance, liability insurance, and
                  goods in transit coverage for complete peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Can you integrate with our existing systems?
                </h3>
                <p className="text-gray-600">
                  Our technology platform offers robust API integration
                  capabilities and can seamlessly connect with most existing
                  e-commerce, POS, and management systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/rider-station-logo.png"
                  alt="Rider Station Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold">Rider Station</h3>
                  <p className="text-sm text-gray-400">Your Delivery Partner</p>
                </div>
              </div>
              <p className="text-gray-400">
                Saudi Arabia's premier rider supplier and manpower solutions
                provider, dedicated to excellence in delivery services.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <div className="space-y-2">
                <Link
                  href="/#services"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Rider Supply
                </Link>
                <Link
                  href="/#services"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Manpower Solutions
                </Link>
                <Link
                  href="/#services"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Food Delivery
                </Link>
                <Link
                  href="/#services"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  E-commerce Delivery
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Company</h4>
              <div className="space-y-2">
                <Link
                  href="/#about"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  News
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+966 11 234 5678</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>info@riderstation.sa</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>Riyadh, Saudi Arabia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Rider Station. All rights
              reserved. | Proudly serving Saudi Arabia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Badge } from "@/components/ui/badge";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   MessageSquare,
//   Building,
//   Users,
//   Headphones,
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { MobileMenu } from "@/components/mobile-menu";

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
//       {/* Header */}
//       <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
//         <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
//           <Link href="/" className="flex items-center space-x-2">
//             <Image
//               src="/images/rider-station-logo.png"
//               alt="Rider Station Logo"
//               width={40}
//               height={40}
//               className="rounded-lg"
//             />
//             <div>
//               <h1 className="text-xl font-bold text-gray-800">Rider Station</h1>
//               <p className="text-xs text-orange-600">Your Delivery Partner</p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-6">
//             <Link
//               href="/"
//               className="text-sm font-medium text-gray-600 hover:text-orange-600"
//             >
//               Home
//             </Link>
//             <Link
//               href="/#services"
//               className="text-sm font-medium text-gray-600 hover:text-orange-600"
//             >
//               Services
//             </Link>
//             <Link
//               href="/#about"
//               className="text-sm font-medium text-gray-600 hover:text-orange-600"
//             >
//               About
//             </Link>
//             <Link
//               href="/contact"
//               className="text-sm font-medium text-orange-800 hover:text-orange-600"
//             >
//               Contact
//             </Link>
//             <Button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700">
//               Get Started
//             </Button>
//           </nav>

//           {/* Mobile Menu */}
//           <MobileMenu currentPage="contact" />
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="py-12 md:py-20 lg:py-32">
//         <div className="container max-w-7xl mx-auto px-4 md:px-6">
//           <div className="text-center space-y-8 max-w-4xl mx-auto">
//             <Badge className="bg-orange-100 text-gray-800">Get In Touch</Badge>
//             <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
//               <span className="text-gray-800">Let's Build the Future</span>
//               <br />
//               <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
//                 of Delivery Together
//               </span>
//             </h1>
//             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Ready to transform your delivery operations? Our team of experts
//               is here to help you find the perfect solution for your business
//               needs in Saudi Arabia.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Methods */}
//       <section className="py-16 bg-white">
//         <div className="container max-w-7xl mx-auto px-4 md:px-6">
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//             <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
//               <CardContent className="p-8">
//                 <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Phone className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   Call Us
//                 </h3>
//                 <p className="text-gray-600 mb-4">
//                   Speak directly with our experts
//                 </p>
//                 <div className="space-y-2">
//                   <div className="text-orange-600 font-semibold">
//                     +966 11 234 5678
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     24/7 Support Available
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
//               <CardContent className="p-8">
//                 <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Mail className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   Email Us
//                 </h3>
//                 <p className="text-gray-600 mb-4">
//                   Send us your detailed requirements
//                 </p>
//                 <div className="space-y-2">
//                   <div className="text-blue-600 font-semibold">
//                     info@riderstation.sa
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     Response within 2 hours
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
//               <CardContent className="p-8">
//                 <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <MessageSquare className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   Live Chat
//                 </h3>
//                 <p className="text-gray-600 mb-4">
//                   Instant support and quick answers
//                 </p>
//                 <div className="space-y-2">
//                   <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
//                     Start Chat
//                   </Button>
//                   <div className="text-sm text-gray-500">Available 24/7</div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
//               <CardContent className="p-8">
//                 <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <MapPin className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   Visit Us
//                 </h3>
//                 <p className="text-gray-600 mb-4">Meet our team in person</p>
//                 <div className="space-y-2">
//                   <div className="text-orange-600 font-semibold">
//                     Riyadh Office
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     King Fahd Road, Riyadh
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form and Info */}
//       <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
//         <div className="container max-w-7xl mx-auto px-4 md:px-6">
//           <div className="grid gap-12 lg:grid-cols-2">
//             {/* Contact Form */}
//             <Card className="border-0 shadow-xl">
//               <CardHeader className="pb-8">
//                 <CardTitle className="text-3xl text-gray-800">
//                   Send Us a Message
//                 </CardTitle>
//                 <CardDescription className="text-lg text-gray-600">
//                   Fill out the form below and we'll get back to you within 24
//                   hours with a customized solution for your business.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="grid gap-4 md:grid-cols-2">
//                   <div className="space-y-2">
//                     <Label htmlFor="firstName">First Name *</Label>
//                     <Input id="firstName" placeholder="Ahmed" required />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="lastName">Last Name *</Label>
//                     <Input id="lastName" placeholder="Al-Rashid" required />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email Address *</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="ahmed@company.com"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="phone">Phone Number *</Label>
//                   <Input
//                     id="phone"
//                     type="tel"
//                     placeholder="+966 50 123 4567"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="company">Company Name</Label>
//                   <Input id="company" placeholder="Your Company Name" />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="city">City *</Label>
//                   <Input
//                     id="city"
//                     placeholder="Riyadh, Jeddah, Dammam..."
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="service">Service Interest</Label>
//                   <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
//                     <option value="">Select a service</option>
//                     <option value="rider-supply">Rider Supply</option>
//                     <option value="manpower-solutions">
//                       Complete Manpower Solutions
//                     </option>
//                     <option value="food-delivery">
//                       Food Delivery Specialists
//                     </option>
//                     <option value="ecommerce-delivery">
//                       E-commerce Delivery
//                     </option>
//                     <option value="technology-integration">
//                       Technology Integration
//                     </option>
//                     <option value="custom-solution">Custom Solution</option>
//                   </select>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="message">Message *</Label>
//                   <Textarea
//                     id="message"
//                     placeholder="Tell us about your delivery needs, expected volume, coverage areas, and any specific requirements..."
//                     className="min-h-[120px]"
//                     required
//                   />
//                 </div>

//                 <Button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-lg py-6">
//                   Send Message
//                 </Button>

//                 <p className="text-sm text-gray-600 text-center">
//                   By submitting this form, you agree to our privacy policy and
//                   terms of service.
//                 </p>
//               </CardContent>
//             </Card>

//             {/* Contact Information */}
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-6">
//                   Get in Touch
//                 </h2>
//                 <p className="text-lg text-gray-600 leading-relaxed">
//                   Whether you're a startup looking to launch your delivery
//                   service or an established business seeking to optimize
//                   operations, our team is ready to help you succeed in Saudi
//                   Arabia's dynamic market.
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 <Card className="border-0 shadow-lg">
//                   <CardContent className="p-6">
//                     <div className="flex items-start space-x-4">
//                       <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                         <Building className="h-6 w-6 text-orange-600" />
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                           Headquarters
//                         </h3>
//                         <p className="text-gray-600">
//                           King Fahd Road, Al Olaya District
//                           <br />
//                           Riyadh 12213, Saudi Arabia
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="border-0 shadow-lg">
//                   <CardContent className="p-6">
//                     <div className="flex items-start space-x-4">
//                       <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                         <Clock className="h-6 w-6 text-blue-600" />
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                           Business Hours
//                         </h3>
//                         <div className="space-y-1 text-gray-600">
//                           <p>Sunday - Thursday: 8:00 AM - 8:00 PM</p>
//                           <p>Friday - Saturday: 10:00 AM - 6:00 PM</p>
//                           <p className="text-orange-600 font-medium">
//                             24/7 Emergency Support Available
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="border-0 shadow-lg">
//                   <CardContent className="p-6">
//                     <div className="flex items-start space-x-4">
//                       <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                         <Users className="h-6 w-6 text-purple-600" />
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                           Regional Offices
//                         </h3>
//                         <div className="space-y-1 text-gray-600">
//                           <p>Jeddah: Red Sea Mall District</p>
//                           <p>Dammam: King Fahd Port Area</p>
//                           <p>Khobar: Corniche Commercial District</p>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="border-0 shadow-lg">
//                   <CardContent className="p-6">
//                     <div className="flex items-start space-x-4">
//                       <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                         <Headphones className="h-6 w-6 text-orange-600" />
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                           Support Channels
//                         </h3>
//                         <div className="space-y-2 text-gray-600">
//                           <p>📞 Phone: +966 11 234 5678</p>
//                           <p>📧 Email: support@riderstation.sa</p>
//                           <p>💬 WhatsApp: +966 50 123 4567</p>
//                           <p>🌐 Live Chat: Available on website</p>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>

//               <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white">
//                 <h3 className="text-2xl font-bold mb-4">
//                   Ready to Get Started?
//                 </h3>
//                 <p className="mb-6 text-orange-100">
//                   Schedule a free consultation with our delivery experts and
//                   discover how we can transform your business operations.
//                 </p>
//                 <Button className="bg-white text-orange-600 hover:bg-orange-50">
//                   <Phone className="mr-2 h-4 w-4" />
//                   Schedule Free Consultation
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-white">
//         <div className="container max-w-7xl mx-auto px-4 md:px-6">
//           <div className="text-center space-y-4 mb-16">
//             <Badge className="bg-orange-100 text-gray-800">
//               Frequently Asked Questions
//             </Badge>
//             <h2 className="text-4xl font-bold text-gray-900">
//               Common Questions
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Find answers to the most common questions about our services and
//               how we can help your business.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2">
//             <Card className="border-0 shadow-lg">
//               <CardContent className="p-8">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                   How quickly can you deploy riders for my business?
//                 </h3>
//                 <p className="text-gray-600">
//                   We can typically deploy qualified riders within 24-48 hours
//                   for urgent needs. For larger deployments, we recommend 3-5
//                   business days to ensure proper onboarding and training.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg">
//               <CardContent className="p-8">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                   What areas do you cover in Saudi Arabia?
//                 </h3>
//                 <p className="text-gray-600">
//                   We provide comprehensive coverage across all major Saudi
//                   cities including Riyadh, Jeddah, Dammam, Khobar, Mecca,
//                   Medina, and expanding to smaller cities based on demand.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg">
//               <CardContent className="p-8">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                   Do you provide insurance coverage for deliveries?
//                 </h3>
//                 <p className="text-gray-600">
//                   Yes, all our riders are fully insured with comprehensive
//                   coverage including vehicle insurance, liability insurance, and
//                   goods in transit coverage for complete peace of mind.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-lg">
//               <CardContent className="p-8">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                   Can you integrate with our existing systems?
//                 </h3>
//                 <p className="text-gray-600">
//                   Our technology platform offers robust API integration
//                   capabilities and can seamlessly connect with most existing
//                   e-commerce, POS, and management systems.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="container max-w-7xl mx-auto px-4 md:px-6">
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//             <div className="space-y-4">
//               <div className="flex items-center space-x-2">
//                 <Image
//                   src="/images/rider-station-logo.png"
//                   alt="Rider Station Logo"
//                   width={32}
//                   height={32}
//                   className="rounded-lg"
//                 />
//                 <div>
//                   <h3 className="text-xl font-bold">Rider Station</h3>
//                   <p className="text-sm text-gray-400">Your Delivery Partner</p>
//                 </div>
//               </div>
//               <p className="text-gray-400">
//                 Saudi Arabia's premier rider supplier and manpower solutions
//                 provider, dedicated to excellence in delivery services.
//               </p>
//             </div>

//             <div className="space-y-4">
//               <h4 className="text-lg font-semibold">Services</h4>
//               <div className="space-y-2">
//                 <Link
//                   href="/#services"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   Rider Supply
//                 </Link>
//                 <Link
//                   href="/#services"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   Manpower Solutions
//                 </Link>
//                 <Link
//                   href="/#services"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   Food Delivery
//                 </Link>
//                 <Link
//                   href="/#services"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   E-commerce Delivery
//                 </Link>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <h4 className="text-lg font-semibold">Company</h4>
//               <div className="space-y-2">
//                 <Link
//                   href="/#about"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   About Us
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   Contact
//                 </Link>
//                 <Link
//                   href="#"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   Careers
//                 </Link>
//                 <Link
//                   href="#"
//                   className="block text-gray-400 hover:text-white transition-colors"
//                 >
//                   News
//                 </Link>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <h4 className="text-lg font-semibold">Contact Info</h4>
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2 text-gray-400">
//                   <Phone className="h-4 w-4" />
//                   <span>+966 11 234 5678</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-gray-400">
//                   <Mail className="h-4 w-4" />
//                   <span>info@riderstation.sa</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-gray-400">
//                   <MapPin className="h-4 w-4" />
//                   <span>Riyadh, Saudi Arabia</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>
//               &copy; {new Date().getFullYear()} Rider Station. All rights
//               reserved. | Proudly serving Saudi Arabia
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
