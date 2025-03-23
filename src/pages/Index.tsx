import React, { useEffect, useRef } from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import CustomButton from "@/components/ui/CustomButton";
import BlurCard from "@/components/ui/BlurCard";
import { ArrowRight, GraduationCap, Globe, BookOpen, Building } from "lucide-react";

const Index: React.FC = () => {
  const featureRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const features = [
    {
      icon: <GraduationCap size={24} className="text-blue-600" />,
      title: "Find Your Perfect Match",
      description: "Discover colleges that align with your academic achievements, interests, and career goals.",
    },
    {
      icon: <Globe size={24} className="text-blue-600" />,
      title: "Explore Options Worldwide",
      description: "Browse through top institutions in India and abroad to find your ideal educational destination.",
    },
    {
      icon: <BookOpen size={24} className="text-blue-600" />,
      title: "Take Aptitude Tests",
      description: "Gain insights into your strengths and find the most suitable academic programs through our tests.",
    },
    {
      icon: <Building size={24} className="text-blue-600" />,
      title: "Easy Application Process",
      description: "Streamline your college application journey with our guided step-by-step process.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <main className="flex-grow">
        <section className="pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Find Your Perfect <span className="text-blue-600">College Match</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-lg">
                  Navigate your educational journey with confidence. Discover the right college based on your aptitude, preferences, and career aspirations.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <CustomButton to="/career-selection" size="lg" className="gap-2">
                    Get Started <ArrowRight size={16} />
                  </CustomButton>
                  <CustomButton to="/login" variant="outline" size="lg">
                    Log In
                  </CustomButton>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
                <BlurCard className="p-0 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Students in a college campus" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </BlurCard>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Choose Campus Navigator?
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We're dedicated to helping you make the most informed decision for your academic future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  ref={el => featureRefs.current[index] = el} 
                  className="opacity-0"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <BlurCard hoverEffect className="h-full">
                    <div className="p-2 rounded-full bg-blue-50 w-fit mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </BlurCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Find Your Dream College?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              Start your journey today and discover the best educational path tailored just for you.
            </p>
            <CustomButton to="/career-selection" size="lg" className="gap-2 mx-auto">
              Explore Colleges <ArrowRight size={16} />
            </CustomButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
