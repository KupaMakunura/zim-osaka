"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Book,
  ChevronDown,
  Globe,
  MapPin,
  MessageCircle,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function ExpoSite() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);

  const slides = [
    {
      image: "/great-zim.jpg",
      title: "ZIMBABWE AT EXPO 2025",
    },
    {
      image: "/vic-falls.jpg",
      title: "DISCOVER OUR CULTURE",
    },
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideTimer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/osaka.png"
                alt="Zimbabwe Expo 2025"
                width={250}
                height={250}
                className="h-12 w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-[#008000] font-medium hover:text-[#006400] transition-colors"
              >
                Home
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 font-medium">
                  <span>Expo 2025 Osaka</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>About Expo</DropdownMenuItem>
                  <DropdownMenuItem>Schedule</DropdownMenuItem>
                  <DropdownMenuItem>Venue</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 font-medium">
                  <span>Zimbabwe Pavilion</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Overview</DropdownMenuItem>
                  <DropdownMenuItem>Cultural Events</DropdownMenuItem>
                  <DropdownMenuItem>Art Gallery</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/news"
                className="font-medium hover:text-[#008000] transition-colors"
              >
                News
              </Link>

              <Link
                href="/opportunity"
                className="font-medium hover:text-[#008000] transition-colors"
              >
                Opportunity
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1">
                  <Globe className="h-5 w-5" />
                  <span>EN</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>日本語</DropdownMenuItem>
                  <DropdownMenuItem>Shona</DropdownMenuItem>
                  <DropdownMenuItem>Ndebele</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button className="bg-[#008000] text-white hover:bg-[#006400] transition-colors">
                Register
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-20 left-20">
              <h1 className="text-white text-7xl font-bold">{slide.title}</h1>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 right-8 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                index === currentSlide ? "bg-white" : "bg-white/50",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Virtual Tours Section */}
      <section className="py-20 bg-[#F0E68C]/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Virtual Tours
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Great Zimbabwe",
                image:
                  "/great-zim.jpg",
              },
              {
                name: "Victoria Falls",
                image:
                  "/vic-falls.jpg",
              },
              {
                name: "Hwange National Park",
                image:
                  "/hwange.jpg",
              },
            ].map((tour) => (
              <Card key={tour.name} className="overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {tour.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full ">Start Virtual Tour</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Exchange Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Cultural Exchange
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#F0E68C]/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Traditional Dance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Experience the rhythmic beauty of Zimbabwean traditional
                  dances, from the spiritual Mbira dance to the celebratory
                  Jerusarema.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#F0E68C]/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Craft Workshops
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Learn the art of stone sculpture, basket weaving, and pottery
                  from master craftspeople of Zimbabwe.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#F0E68C]/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Music Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Immerse yourself in the sounds of mbira, marimba, and
                  traditional drums in interactive music sessions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cultural Library Section */}
      <section className="py-20 bg-[#008000]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Cultural Library
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Literature & Poetry",
              "Traditional Music",
              "Art & Sculpture",
              "History & Heritage",
              "Folk Tales",
              "Language Resources",
              "Cultural Practices",
              "Contemporary Arts",
            ].map((category) => (
              <Card
                key={category}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full ">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#008000] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about-zimbabwe" className="hover:underline">
                    About Zimbabwe
                  </Link>
                </li>
                <li>
                  <Link href="/about-expo" className="hover:underline">
                    About Expo 2025
                  </Link>
                </li>
                <li>
                  <Link href="/our-mission" className="hover:underline">
                    Our Mission
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/virtual-tours" className="hover:underline">
                    Virtual Tours
                  </Link>
                </li>
                <li>
                  <Link href="/cultural-events" className="hover:underline">
                    Cultural Events
                  </Link>
                </li>
                <li>
                  <Link href="/art-gallery" className="hover:underline">
                    Art Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Participate</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/register" className="hover:underline">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/volunteer" className="hover:underline">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="hover:underline">
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter" className="hover:underline">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>&copy; 2024 Zimbabwe at Expo 2025 Osaka. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot FAB */}
      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-8 right-8 h-14 w-14 rounded-full shadow-lg bg-[#008000] hover:bg-[#006400]"
            size="icon"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Chat with us</DialogTitle>
          </DialogHeader>
          <div className="h-[400px] flex items-center justify-center text-muted-foreground">
            Chat interface would go here
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
