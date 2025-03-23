import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import BlurCard from "@/components/ui/BlurCard";
import CustomButton from "@/components/ui/CustomButton";
import { Search, Filter, Star, MapPin, Building, Users, Banknote } from "lucide-react";

interface LocationState {
  career: string;
  location: string;
}

interface College {
  id: string;
  name: string;
  location: string;
  rating: number;
  image: string;
  fees: string;
  students: string;
  courses: string[];
}

const CollegeList: React.FC = () => {
  const location = useLocation();
  const { career, location: studyLocation } = (location.state as LocationState) || { career: "", location: "" };
  
  const [searchTerm, setSearchTerm] = useState("");
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call to fetch colleges
    setTimeout(() => {
      // Mock data based on selected career and location
      const mockColleges: College[] = [
        {
          id: "1",
          name: "Indian Institute of Technology (IIT)",
          location: "Mumbai, India",
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          fees: "₹8,00,000 per year",
          students: "10,000+",
          courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"]
        },
        {
          id: "2",
          name: "Delhi University",
          location: "Delhi, India",
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          fees: "₹2,50,000 per year",
          students: "22,000+",
          courses: ["Business Administration", "Economics", "Computer Applications"]
        },
        {
          id: "3",
          name: "National Institute of Technology (NIT)",
          location: "Warangal, India",
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          fees: "₹1,25,000 per year",
          students: "6,000+",
          courses: ["Civil Engineering", "Computer Science", "Electronics"]
        },
        {
          id: "4",
          name: "Indian Institute of Management (IIM)",
          location: "Ahmedabad, India",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
          fees: "₹23,00,000 per year",
          students: "1,200+",
          courses: ["MBA", "Business Analytics", "Executive Management"]
        },
      ];
      
      setColleges(mockColleges);
      setLoading(false);
    }, 1500);
  }, [career, studyLocation]);

  const filteredColleges = colleges.filter(college => 
    college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium mb-3">
                {studyLocation === "india" ? "India" : "International"} • {career.charAt(0).toUpperCase() + career.slice(1)}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {studyLocation === "india" ? "Colleges in India" : "International Universities"}
              </h1>
              <p className="mt-2 text-gray-600 max-w-2xl">
                Explore top colleges and universities based on your preferences.
              </p>
            </div>
            
            <div className="mt-6 md:mt-0 relative">
              <div className="relative">
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full md:w-80 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Search colleges..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-64 shrink-0">
              <BlurCard className="sticky top-24">
                <div className="flex items-center mb-6">
                  <Filter size={18} className="text-blue-600 mr-2" />
                  <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Course Type</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="undergraduate" 
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="undergraduate" className="ml-2 text-sm text-gray-700">
                          Undergraduate
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="postgraduate" 
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="postgraduate" className="ml-2 text-sm text-gray-700">
                          Postgraduate
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="diploma" 
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="diploma" className="ml-2 text-sm text-gray-700">
                          Diploma
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Rating</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="4plus" 
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="4plus" className="ml-2 text-sm text-gray-700 flex items-center">
                          4+ <Star size={14} className="text-yellow-400 ml-1" />
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="3plus" 
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="3plus" className="ml-2 text-sm text-gray-700 flex items-center">
                          3+ <Star size={14} className="text-yellow-400 ml-1" />
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Fees Range</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="range1" 
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="range1" className="ml-2 text-sm text-gray-700">
                          ₹0 - ₹2,00,000
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="range2" 
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="range2" className="ml-2 text-sm text-gray-700">
                          ₹2,00,000 - ₹5,00,000
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="range3" 
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="range3" className="ml-2 text-sm text-gray-700">
                          ₹5,00,000+
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <CustomButton variant="outline" className="w-full">Apply Filters</CustomButton>
                </div>
              </BlurCard>
            </div>
            
            <div className="flex-grow">
              {loading ? (
                <div className="flex flex-col items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mb-4"></div>
                  <p className="text-gray-600">Loading colleges...</p>
                </div>
              ) : filteredColleges.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {filteredColleges.map((college) => (
                    <BlurCard 
                      key={college.id} 
                      className="hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3 h-48 rounded-lg overflow-hidden">
                          <img 
                            src={college.image} 
                            alt={college.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <h3 className="text-xl font-semibold text-gray-900">{college.name}</h3>
                            <div className="flex items-center mt-2 md:mt-0">
                              <Star size={18} className="text-yellow-400 mr-1" />
                              <span className="text-sm font-medium">{college.rating}/5</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-sm text-gray-600 mb-4">
                            <MapPin size={16} className="mr-1" />
                            {college.location}
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center text-sm">
                              <Banknote size={16} className="text-blue-600 mr-2" />
                              <div>
                                <div className="text-gray-500">Fees</div>
                                <div className="font-medium">{college.fees}</div>
                              </div>
                            </div>
                            <div className="flex items-center text-sm">
                              <Users size={16} className="text-blue-600 mr-2" />
                              <div>
                                <div className="text-gray-500">Students</div>
                                <div className="font-medium">{college.students}</div>
                              </div>
                            </div>
                            <div className="flex items-center text-sm">
                              <Building size={16} className="text-blue-600 mr-2" />
                              <div>
                                <div className="text-gray-500">Type</div>
                                <div className="font-medium">Private</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mb-6">
                            <div className="text-sm font-medium text-gray-700 mb-2">Available Courses:</div>
                            <div className="flex flex-wrap gap-2">
                              {college.courses.map((course, index) => (
                                <span 
                                  key={index}
                                  className="inline-block px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-medium"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex justify-end">
                            <CustomButton 
                              variant="outline" 
                              className="mr-3"
                            >
                              Compare
                            </CustomButton>
                            <CustomButton>
                              View Details
                            </CustomButton>
                          </div>
                        </div>
                      </div>
                    </BlurCard>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600">No colleges found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CollegeList;
