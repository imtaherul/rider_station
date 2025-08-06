"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Clock, Building, Headphones } from "lucide-react";

import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { send } from "@/components/email/email";
import { useRouter } from "next/navigation";
import { formSchema } from "@/components/email/schema";

import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      city: "",
      service: "",
      message: "",
    },
  });
  const router = useRouter();
  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   send(values);
  //   form.reset();
  //   router.push("/");
  // }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Handle form submission here
      send(values);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-32">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-orange-100 text-gray-800">Get In Touch</Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-gray-800">Let's Build the Future</span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                of Delivery Together
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your delivery operations? Our team of experts
              is here to help you find the perfect solution for your business
              needs in Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50 ">
        <div>
          <div className="container max-w-7xl mx-auto p-10 md:px-6 border border-black rounded-lg">
            <div className="grid gap-12 lg:grid-cols-2">
              <Card className="border-0 shadow-xl">
                <CardHeader className="pb-8">
                  <CardTitle className="text-3xl text-gray-800">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Fill out the form below and we'll get back to you within 48
                    hours with a customized solution for your business.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="grid gap-8"
                    >
                      <div className="grid gap-8 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="relative">
                                  <Input
                                    className="border-border peer h-14 rounded-sm border-0 border-b px-3 pb-2 pt-6 transition-all duration-200 focus-visible:border-primary focus-visible:ring-0"
                                    {...field}
                                    id="firstName"
                                    placeholder=" "
                                  />
                                  <label
                                    htmlFor="firstName"
                                    className="text-muted-foreground absolute left-3 top-4 transition-all duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90"
                                  >
                                    First Name *
                                  </label>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="relative">
                                  <Input
                                    className="border-border peer h-14 rounded-sm border-0 border-b px-3 pb-2 pt-6 transition-all duration-200 focus-visible:border-primary focus-visible:ring-0"
                                    {...field}
                                    id="lastName"
                                    placeholder=" "
                                  />
                                  <label
                                    htmlFor="lastName"
                                    className="text-muted-foreground absolute left-3 top-4 transition-all duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90"
                                  >
                                    Last Name *
                                  </label>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  className="border-border peer h-14 rounded-sm border-0 border-b px-3 pb-2 pt-6 transition-all duration-200 focus-visible:border-primary focus-visible:ring-0"
                                  {...field}
                                  id="email"
                                  type="email"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="email"
                                  className="text-muted-foreground absolute left-3 top-4 transition-all duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90"
                                >
                                  Email Address *
                                </label>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  className="border-border peer h-14 rounded-sm border-0 border-b px-3 pb-2 pt-6 transition-all duration-200 focus-visible:border-primary focus-visible:ring-0"
                                  {...field}
                                  id="phone"
                                  type="tel"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="phone"
                                  className="text-muted-foreground absolute left-3 top-4 transition-all duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90"
                                >
                                  Phone Number *
                                </label>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  className="border-border peer h-14 rounded-sm border-0 border-b px-3 pb-2 pt-6 transition-all duration-200 focus-visible:border-primary focus-visible:ring-0"
                                  {...field}
                                  id="company"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="company"
                                  className="text-muted-foreground absolute left-3 top-4 transition-all duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90"
                                >
                                  Company Name *
                                </label>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  className="border-border peer h-14 rounded-sm border-0 border-b px-3 pb-2 pt-6 transition-all duration-200 focus-visible:border-primary focus-visible:ring-0"
                                  {...field}
                                  id="city"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="city"
                                  className="text-muted-foreground absolute left-3 top-4 transition-all duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90"
                                >
                                  City *
                                </label>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="relative">
                                <select
                                  className="border-border peer h-14 w-full rounded-sm border-0 border-b bg-transparent px-3 pb-2 pt-6 transition-all duration-200 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-0 appearance-none cursor-pointer"
                                  {...field}
                                  id="service"
                                >
                                  <option
                                    value=""
                                    className="text-gray-500"
                                  ></option>
                                  <option value="rider-supply">
                                    Rider Supply
                                  </option>
                                  <option value="manpower-solutions">
                                    Complete Manpower Solutions
                                  </option>
                                  <option value="food-delivery">
                                    Food Delivery Specialists
                                  </option>
                                  <option value="ecommerce-delivery">
                                    E-commerce Delivery
                                  </option>
                                  <option value="technology-integration">
                                    Technology Integration
                                  </option>
                                  <option value="custom-solution">
                                    Custom Solution
                                  </option>
                                </select>
                                <label
                                  htmlFor="service"
                                  className="text-muted-foreground absolute left-3 top-4 transition-all duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 pointer-events-none"
                                >
                                  Service Interest *
                                </label>
                                {/* Custom dropdown arrow */}
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                  <svg
                                    className="h-4 w-4 text-muted-foreground"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="relative">
                                <Textarea
                                  className="border-border peer min-h-[120px] rounded-sm border-0 border-b px-3 pb-2 pt-6 transition-all duration-200 focus-visible:border-primary focus-visible:ring-0 resize-none"
                                  {...field}
                                  id="message"
                                  placeholder=" "
                                />
                                <label
                                  htmlFor="message"
                                  className="text-muted-foreground absolute left-3 top-4 transition-all duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90"
                                >
                                  Message *
                                </label>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-lg py-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>

                      <p className="text-sm text-gray-600 text-center">
                        By submitting this form, you agree to our privacy policy
                        and terms of service.
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Whether you're a startup looking to launch your delivery
                    service or an established business seeking to optimize
                    operations, our team is ready to help you succeed in Saudi
                    Arabia's dynamic market.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Building className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Headquarters
                          </h3>
                          <p className="text-gray-600">
                            King Fahd Road, Al Olaya District
                            <br />
                            Riyadh 12213, Saudi Arabia
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Business Hours
                          </h3>
                          <div className="space-y-1 text-gray-600">
                            <p>Sunday - Thursday: 8:00 AM - 8:00 PM</p>
                            <p>Friday - Saturday: 10:00 AM - 6:00 PM</p>
                            <p className="text-orange-600 font-medium">
                              24/7 Emergency Support Available
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Headphones className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Support Channels
                          </h3>
                          <div className="space-y-2 text-gray-600">
                            <p>📞 Phone: +966 11 234 5678</p>
                            <p>📧 Email: support@riderstation.sa</p>
                            <p>💬 WhatsApp: +966 50 123 4567</p>
                            <p>🌐 Live Chat: Available on website</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
