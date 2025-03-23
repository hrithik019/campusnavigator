
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import BlurCard from "@/components/ui/BlurCard";
import CustomButton from "@/components/ui/CustomButton";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CareerSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);

  const careerOptions = [
    {
      id: "engineering",
      title: "Engineering",
      description: "Explore computer science, electrical, mechanical, civil, and other engineering fields.",
      icon: "👨‍💻",
    },
    {
      id: "management",
      title: "Management",
      description: "Discover MBA, finance, marketing, and other business management programs.",
      icon: "📊",
    },
    {
      id: "medicine",
      title: "Medicine & Healthcare",
      description: "Explore medical, dental, nursing, pharmacy, and other healthcare fields.",
      icon: "🏥",
    },
    {
      id: "arts",
      title: "Arts & Humanities",
      description: "Discover literature, history, philosophy, fine arts, and more.",
      icon: "🎭",
    },
    {
      id: "science",
      title: "Science",
      description: "Explore physics, chemistry, biology, and other scientific disciplines.",
      icon: "🔬",
    },
    {
      id: "law",
      title: "Law",
      description: "Discover programs in law, legal studies, and international law.",
      icon: "⚖️",
    },
  ];

  const handleContinue = () => {
    if (selectedCareer) {
      navigate("/location-selection", { state: { career: selectedCareer } });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gradient">
              What career path interests you?
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Select a career field to discover colleges and programs that match your interests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerOptions.map((career, index) => (
              <div 
                key={career.id}
                onClick={() => setSelectedCareer(career.id)}
                className={`cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                  selectedCareer === career.id ? "ring-2 ring-blue-600 shadow-lg shadow-blue-500/20" : ""
                }`}
              >
                <BlurCard 
                  variant={index % 2 === 0 ? "gleam" : "neuro"}
                  className="relative h-full shimmer"
                >
                  {selectedCareer === career.id && (
                    <div className="absolute top-4 right-4">
                      <CheckCircle2 className="text-blue-600" size={24} />
                    </div>
                  )}
                  <div className="flex flex-col h-full">
                    <div className="text-4xl mb-4">{career.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {career.title}
                    </h3>
                    <p className="text-gray-600 flex-grow">
                      {career.description}
                    </p>
                  </div>
                </BlurCard>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <CustomButton 
              onClick={handleContinue}
              disabled={!selectedCareer}
              variant="gleam"
              size="lg"
              className="gap-2"
            >
              Continue <ArrowRight size={18} />
            </CustomButton>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareerSelection;
