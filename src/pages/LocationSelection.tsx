
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import BlurCard from "@/components/ui/BlurCard";
import CustomButton from "@/components/ui/CustomButton";
import { MapPin, ArrowRight } from "lucide-react";

interface LocationState {
  career: string;
}

const LocationSelection: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { career } = (location.state as LocationState) || { career: "" };

  const handleLocationSelect = (location: string) => {
    navigate("/college-list", { state: { career, location } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Where would you like to study?
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Select your preferred study location to find colleges that match your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              onClick={() => handleLocationSelect("india")}
              className="cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
            >
              <BlurCard className="h-64 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="India"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                  <div className="flex items-center mb-3">
                    <MapPin size={18} className="mr-2" />
                    <span className="text-sm font-medium">India</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Study in India</h3>
                  <p className="text-white/80 text-sm">
                    Explore top colleges and universities across India
                  </p>
                  <CustomButton 
                    variant="primary" 
                    className="mt-4 bg-white text-gray-900 hover:bg-gray-100"
                  >
                    View Colleges
                  </CustomButton>
                </div>
              </BlurCard>
            </div>
            
            <div 
              onClick={() => handleLocationSelect("abroad")}
              className="cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
            >
              <BlurCard className="h-64 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Abroad"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
                  <div className="flex items-center mb-3">
                    <MapPin size={18} className="mr-2" />
                    <span className="text-sm font-medium">International</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Study Abroad</h3>
                  <p className="text-white/80 text-sm">
                    Discover international universities and global opportunities
                  </p>
                  <CustomButton 
                    variant="primary" 
                    className="mt-4 bg-white text-gray-900 hover:bg-gray-100"
                  >
                    View Colleges
                  </CustomButton>
                </div>
              </BlurCard>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <CustomButton 
              variant="outline" 
              onClick={() => navigate(-1)}
              size="lg"
              className="gap-2"
            >
              Back to Career Selection
            </CustomButton>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LocationSelection;
