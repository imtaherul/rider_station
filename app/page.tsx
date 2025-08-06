import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Shield,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Smartphone,
  BarChart3,
  Zap,
  Globe,
  Award,
  TrendingUp,
  Target,
  Headphones,
  Building2,
  Package,
  ShoppingCart,
  Utensils,
  Heart,
  Store,
  Laptop,
  Gem,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "@/components/mobile-menu";
import ContactPage from "@/components/contact-from";

export default function HomePage() {
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
              className="text-sm font-medium text-orange-800 hover:text-orange-600"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-gray-600 hover:text-orange-600"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-gray-600 hover:text-orange-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-orange-600"
            >
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu currentPage="home" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-32">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <Badge className="bg-orange-100 text-gray-800 w-fit">
                🇸🇦 Proudly Serving Saudi Arabia
              </Badge>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className="text-gray-800">Revolutionizing</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    Delivery Excellence
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Saudi Arabia's premier rider supplier and manpower solutions
                  provider. We connect businesses with skilled delivery
                  professionals, powering the Kingdom's booming food delivery
                  and e-commerce sectors with unmatched reliability and
                  innovation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Start Your Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-orange-600">
                    5000+
                  </div>
                  <div className="text-sm text-gray-600">Active Riders</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-orange-600">
                    200+
                  </div>
                  <div className="text-sm text-gray-600">Partner Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-orange-600">
                    99.8%
                  </div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 p-8 shadow-2xl">
                  <img
                    // src="/placeholder.svg?height=500&width=500"
                    src="/rider_01.jpg?height=500&width=500"
                    alt="Rider Station Delivery Professional"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live Tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-orange-100 text-gray-800">
              Trusted Partners
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Powering Saudi Arabia's Leading Delivery Platforms
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve as the backbone for the Kingdom's most trusted
              delivery and e-commerce platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {[
              { name: "Amazon", type: "E-commerce Giant" },
              { name: "Noon", type: "Regional E-commerce" },
              { name: "Noon Food", type: "Food Delivery" },
              { name: "Noon Minutes", type: "Quick Commerce" },
              { name: "Keeta", type: "Food Delivery" },
              { name: "HungerStation", type: "Food Platform" },
              { name: "Jahez", type: "Local Delivery" },
              { name: "ToYou", type: "Multi-service" },
            ].map((partner, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-orange-100 group-hover:to-amber-100 transition-all duration-300">
                    <img
                      src={`/placeholder.svg?height=40&width=40&query=${partner.name} logo`}
                      alt={`${partner.name} Logo`}
                      className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600">{partner.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partnership Stats */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">2M+</div>
                <div className="text-orange-100">Monthly Deliveries</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
                <div className="text-orange-100">Major Cities Covered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-orange-100">Operations Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-r from-orange-50 to-amber-50"
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-gray-800">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Comprehensive Delivery Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From individual riders to complete workforce management, we
              provide end-to-end solutions tailored to your business needs in
              Saudi Arabia's dynamic market.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Elite Rider Supply
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Access our network of 5,000+ verified, licensed, and insured
                  delivery professionals. All riders undergo comprehensive
                  background checks and specialized training programs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Licensed & Insured Professionals
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 Availability
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multi-language Support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Complete Manpower Solutions
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  End-to-end workforce management including recruitment,
                  training, payroll, and performance monitoring. Focus on your
                  business while we handle your delivery operations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Full HR Management
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance Analytics
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Compliance Management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Smart Technology Integration
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced tracking systems, route optimization, and seamless
                  API integration with your existing platforms. Real-time
                  analytics and reporting for complete visibility.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    API Integration
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time Tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Advanced Analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Utensils className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Food Delivery Specialists
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Specialized food delivery services with temperature-controlled
                  transportation, food safety certified riders, and optimized
                  routes for hot food delivery.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Food Safety Certified
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Temperature Control
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Optimized Routes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  E-commerce Delivery Network
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive e-commerce logistics covering all major Saudi
                  cities. Same-day, next-day, and scheduled delivery options
                  with full package tracking.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Same-day Delivery
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Package Tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Nationwide Coverage
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Headphones className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  24/7 Operations Support
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Round-the-clock operational support with dedicated account
                  managers, emergency response teams, and multilingual customer
                  service.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 Support
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dedicated Managers
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Emergency Response
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-gray-800">
              Why Choose Rider Station
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              The Smart Choice for Saudi Businesses
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges and opportunities in Saudi
              Arabia's delivery market. Our local expertise combined with
              international standards makes us the preferred partner.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Local Expertise
              </h3>
              <p className="text-gray-600">
                Deep understanding of Saudi market dynamics, cultural nuances,
                and regulatory requirements.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Full Compliance
              </h3>
              <p className="text-gray-600">
                100% compliant with Saudi labor laws, insurance requirements,
                and industry regulations.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Scalable Solutions
              </h3>
              <p className="text-gray-600">
                Flexible services that grow with your business, from startup to
                enterprise level operations.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Proven Excellence
              </h3>
              <p className="text-gray-600">
                Track record of success with 200+ satisfied clients and 99.8%
                service reliability rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-gray-800">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How We Transform Your Delivery Operations
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures seamless integration and optimal
              results for your business.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Consultation & Analysis",
                description:
                  "We analyze your business needs, delivery volume, coverage areas, and specific requirements to design the perfect solution.",
                icon: Target,
              },
              {
                step: "02",
                title: "Custom Solution Design",
                description:
                  "Our experts create a tailored delivery strategy with the right mix of riders, technology, and support services.",
                icon: BarChart3,
              },
              {
                step: "03",
                title: "Rapid Deployment",
                description:
                  "Quick onboarding of riders, system integration, and training to get your operations running smoothly within days.",
                icon: Zap,
              },
              {
                step: "04",
                title: "Ongoing Optimization",
                description:
                  "Continuous monitoring, performance optimization, and scaling support to ensure maximum efficiency and growth.",
                icon: TrendingUp,
              },
            ].map((process, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group"
              >
                <CardContent className="p-8 text-center">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-orange-100 group-hover:text-orange-200 transition-colors">
                    {process.step}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <process.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-gray-800">
              Industries We Serve
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Specialized Solutions for Every Sector
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From restaurants to e-commerce giants, we provide
              industry-specific delivery solutions tailored to meet unique
              operational requirements and customer expectations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Restaurants & Food",
                icon: Utensils,
                color: "from-red-500 to-orange-500",
                description: "Hot food delivery with temperature control",
              },
              {
                name: "E-commerce",
                icon: ShoppingCart,
                color: "from-blue-500 to-indigo-500",
                description: "Package delivery and returns management",
              },
              {
                name: "Healthcare",
                icon: Heart,
                color: "from-green-500 to-emerald-500",
                description: "Medical supplies and pharmacy delivery",
              },
              {
                name: "Retail Stores",
                icon: Store,
                color: "from-purple-500 to-pink-500",
                description: "Same-day retail fulfillment",
              },
              {
                name: "Groceries",
                icon: Package,
                color: "from-yellow-500 to-orange-500",
                description: "Fresh groceries and perishables",
              },
              {
                name: "Technology",
                icon: Laptop,
                color: "from-indigo-500 to-purple-500",
                description: "Electronics and tech products",
              },
              {
                name: "Luxury Goods",
                icon: Gem,
                color: "from-pink-500 to-rose-500",
                description: "High-value item secure delivery",
              },
              {
                name: "Corporate",
                icon: Briefcase,
                color: "from-gray-500 to-slate-500",
                description: "B2B document and package delivery",
              },
            ].map((industry, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-gray-800">
              Technology Platform
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Powered by Cutting-Edge Innovation
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced technology platform provides real-time visibility,
              seamless integration, and powerful analytics to optimize your
              delivery operations.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mobile App Integration
                </h3>
                <p className="text-gray-600 mb-6">
                  Seamless integration with your existing mobile applications
                  and e-commerce platforms. Real-time order tracking and status
                  updates for customers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    iOS & Android Apps
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time Tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Push Notifications
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Analytics Dashboard
                </h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive analytics and reporting dashboard with key
                  performance indicators, delivery metrics, and business
                  intelligence insights.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance Metrics
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom Reports
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Data Export
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  API Integration
                </h3>
                <p className="text-gray-600 mb-6">
                  Robust RESTful APIs for seamless integration with your
                  existing systems. Easy-to-implement webhooks and real-time
                  data synchronization.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    RESTful APIs
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Webhook Support
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Developer Documentation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Areas Section */}
      <section id="coverage" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-gray-800">
              Coverage Areas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Serving All of Saudi Arabia
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage across the Kingdom with specialized focus
              on major metropolitan areas and expanding reach to support Vision
              2030 development projects.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "Central Region",
                cities: ["Riyadh", "Al Kharj", "Al Majma'ah", "Al Qassim"],
                riders: "2000+",
                coverage: "100%",
              },
              {
                region: "Western Region",
                cities: ["Jeddah", "Mecca", "Medina", "Taif"],
                riders: "1500+",
                coverage: "95%",
              },
              {
                region: "Eastern Region",
                cities: ["Dammam", "Khobar", "Dhahran", "Jubail"],
                riders: "1200+",
                coverage: "90%",
              },
              {
                region: "Northern Region",
                cities: ["Tabuk", "Hail", "Arar", "Sakaka"],
                riders: "400+",
                coverage: "75%",
              },
              {
                region: "Southern Region",
                cities: ["Abha", "Jazan", "Najran", "Khamis Mushait"],
                riders: "300+",
                coverage: "70%",
              },
              {
                region: "NEOM & Future Cities",
                cities: ["NEOM", "Al Ula", "Red Sea Project", "Qiddiya"],
                riders: "200+",
                coverage: "Expanding",
              },
            ].map((area, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {area.region}
                    </h3>
                    <Badge className="bg-orange-100 text-orange-800">
                      {area.coverage}
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">
                        Major Cities:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {area.cities.map((city, cityIndex) => (
                          <span
                            key={cityIndex}
                            className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-700"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">
                          {area.riders}
                        </div>
                        <div className="text-xs text-gray-600">
                          Active Riders
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">
                          {area.coverage}
                        </div>
                        <div className="text-xs text-gray-600">Coverage</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-orange-50 to-amber-50"
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-orange-100 text-gray-800 mb-4">
                  About Rider Station
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Pioneering the Future of Delivery in Saudi Arabia
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Founded with a vision to revolutionize Saudi Arabia's delivery
                  landscape, Rider Station has grown from a startup to the
                  Kingdom's most trusted delivery partner. We combine local
                  market expertise with international best practices to deliver
                  exceptional results.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our commitment to excellence, innovation, and customer
                  satisfaction has made us the preferred choice for businesses
                  ranging from local restaurants to international e-commerce
                  giants.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    2019
                  </div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    5000+
                  </div>
                  <div className="text-sm text-gray-600">Riders</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    200+
                  </div>
                  <div className="text-sm text-gray-600">Partners</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">Cities</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <img
                  src="/delivery-jobs-on-a-bike.png?height=400&width=600"
                  alt="Rider Station Headquarters"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        ISO Certified
                      </div>
                      <div className="text-sm text-gray-600">
                        Quality Management
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower Saudi businesses with world-class delivery
                  solutions that drive growth, enhance customer satisfaction,
                  and contribute to the Kingdom's Vision 2030 objectives.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Excellence</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Innovation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Reliability</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Integrity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-gray-800">
              Client Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Partners Say
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what leading Saudi
              businesses say about their experience with Rider Station.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Rider Station transformed our delivery operations completely.
                  Their professional riders and advanced tracking system helped
                  us achieve 99% customer satisfaction rates."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AH</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Ahmed Al-Hassan
                    </div>
                    <div className="text-sm text-gray-600">
                      CEO, Riyadh Restaurant Group
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "The scalability and reliability of Rider Station's services
                  allowed us to expand to 5 new cities within 6 months. Their
                  support team is exceptional."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Sarah Al-Mahmoud
                    </div>
                    <div className="text-sm text-gray-600">
                      Operations Director, TechMart KSA
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Working with Rider Station has been a game-changer. Their
                  technology integration and professional service helped us
                  reduce delivery costs by 30%."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">KA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Khalid Al-Rashid
                    </div>
                    <div className="text-sm text-gray-600">
                      Founder, Fresh Market Online
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactPage />

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Revolutionize Your Delivery Operations?
            </h2>
            <p className="text-xl text-gray-300">
              Join 200+ successful businesses that trust Rider Station for their
              delivery needs. Start your journey to delivery excellence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
              >
                <Zap className="mr-2 h-5 w-5" />
                Get Started Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +966 11 234 5678
              </Button>
            </div>
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
                  href="#services"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Rider Supply
                </Link>
                <Link
                  href="#services"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Manpower Solutions
                </Link>
                <Link
                  href="#services"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Food Delivery
                </Link>
                <Link
                  href="#services"
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
                  href="#about"
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
