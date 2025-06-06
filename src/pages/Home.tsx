import React, { useState, useEffect } from 'react';
import { Search, Instagram, Facebook, Twitter, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentAboutSlide, setCurrentAboutSlide] = useState(0);
  const [showFashionMenu, setShowFashionMenu] = useState(false);
  const [currentFeaturedSlide, setCurrentFeaturedSlide] = useState(0);
  
  // Added automatic carousel functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeaturedSlide((prev) => (prev + 1) % featuredCarouselItems.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  // Featured carousel items that match the design shown in the image
  const featuredCarouselItems = [
    {
      image: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "FASHION, TRENDS",
      title: "The 15 Most Wearable 2025 Fashion Trends"
    },
    {
      image: "https://media.istockphoto.com/id/75593194/photo/woman-receiving-a-facial-treatment.webp?a=1&b=1&s=612x612&w=0&k=20&c=uSxRjG7dt_I3Vhhbx27cSwr9bbn0ADWG96OHJxLJLFc=",
      category: "FASHION",
      title: "9 Romantic Galentine's Day Outfits To Wear In 2025"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1679064287823-fbd549bf47dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D",
      category: "FASHION, TRENDS",
      title: "Spring Wedding Guest Dress Trends: What's In For 2025?"
    },
    {
      image: "https://media.istockphoto.com/id/2148998982/photo/young-woman-is-nourishing-herself.webp?a=1&b=1&s=612x612&w=0&k=20&c=EpHqwTbl-FU4KzU4DqKIVF_SJYeOhDwbK0QyyKeMolQ=",
      category: "FASHION, BEAUTY",
      title: "Summer Accessories That Complete Any Outfit"
    },
    {
      image: "https://images.unsplash.com/photo-1547887538-047f814bfb64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D",
      category: "FASHION, LIFESTYLE",
      title: "How To Build A Sustainable Wardrobe In 2025"
    },
    {
      image: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "FASHION, LIFESTYLE",
      title: "How To Build A Sustainable Wardrobe In 2025"
    },
    {
      image: "https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "FASHION, LIFESTYLE",
      title: "How To Build A Sustainable Wardrobe In 2025"
    },
    {
      image: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "FASHION, LIFESTYLE",
      title: "How To Build A Sustainable Wardrobe In 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJlYXV0eXxlbnwwfHwwfHx8MA%3D%3D",
      category: "FASHION, LIFESTYLE",
      title: "How To Build A Sustainable Wardrobe In 2025"
    }
  ];

  // Added the missing aboutItems array
  const aboutItems = [
    {
      image: "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Evening Dress",
    },
    {
      image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg",
      title: "Summer Collection",
    },
    {
      image: "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg",
      title: "Skincare Set",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Summer Collection",
    },
    {
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmVhdXR5fGVufDB8fDB8fHww",
      title: "Beauty",
    }
  ];

  // UPDATED: Latest Posts Section data with exact text from the image
  const latestPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1694354739576-beb031f7a2ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbiUyMG1vZGVscyUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "12 Outfit Ideas You'll Love In 2025",
      content: "2025 fashion is all about balance—mixing comfort with bold style. These 12 outfit ideas will keep you on trend and true to your vibe, no matter the season."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1717674798019-53eee50c61f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb24lMjBtb2RlbHMlMjBmZW1hbGV8ZW58MHx8MHx8fDA%3D",
      title: "Old Money Style: How To Look Expensive On A Budget",
      content: "Old money style is all about timeless elegance—think tailored fits, classic accessories, and quiet luxury. Here's how to get the look without the price tag."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1700557478789-5e3fdb3e29ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb24lMjBtb2RlbHMlMjBmZW1hbGV8ZW58MHx8MHx8fDA%3D",
      title: "16 Chic Details That Elevate Any Outfit in 2025",
      content: "Sometimes, it's the subtle touches that make the biggest impact. From tailored cuts to polished accessories, these 16 chic details will take your 2025 looks to the next level."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1552046122-03184de85e08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2tpbmNhcmV8ZW58MHx8MHx8fDA%3D",
      title: "Summer Skincare Essentials for Glowing Skin",
      content: "The right skincare can elevate your summer glow just like the perfect accessory elevates an outfit."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNraW5jYXJlfGVufDB8fDB8fHww",
      title: "Essential Summer Skincare Routine For 2025",
      content: "As temperatures rise, your skincare routine needs adjusting. The essential products and steps to keep your skin."
    },
    {
      id: 6,
      image: "https://plus.unsplash.com/premium_photo-1679046948909-ab47e96082e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2tpbmNhcmV8ZW58MHx8MHx8fDA%3D",
      title: "Night Skincare Routine for Radiant Mornings",
      content: "The skincare steps you take before bed are crucial for waking up with glowing skin. Our dermatologist-approved."
    }
  ];

  const featuredPosts = [
    {
      image: "https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg",
      category: "BEAUTY",
      title: "Slay this Summer 2025 with clothing that you want",
      date: "MAY 20, 2023"
    },
    {
      image: "https://images.pexels.com/photos/6492179/pexels-photo-6492179.jpeg",
      category: "FASHION",
      title: "Summer Fashion Trends That Will Define 2025",
      date: "MAY 18, 2023"
    },
    {
      image: "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg",
      category: "SKINCARE",
      title: "Essential Summer Skincare Routine For Glowing Skin",
      date: "MAY 15, 2023"
    },
    {
      image: "https://images.pexels.com/photos/7319158/pexels-photo-7319158.jpeg",
      category: "FASHION",
      title: "The Art of Layering: Fall Fashion Guide",
      date: "MAY 14, 2023"
    },
    {
      image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg",
      category: "BEAUTY",
      title: "Minimalist Makeup Looks for Every Day",
      date: "MAY 12, 2023"
    },
    {
      image: "https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg",
      category: "SKINCARE",
      title: "Night Skincare Routine for Radiant Mornings",
      date: "MAY 10, 2023"
    }
  ];

  const fashionMenuItems = [
    {
      image: "https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg",
      title: "Summer Style",
      description: "Latest summer trends and must-haves"
    },
    {
      image: "https://images.pexels.com/photos/6492179/pexels-photo-6492179.jpeg",
      title: "Workwear",
      description: "Professional looks for every office"
    },
    {
      image: "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg",
      title: "Evening Wear",
      description: "Elegant options for special occasions"
    }
  ];

  // Added the missing nextAboutSlide and prevAboutSlide functions
  const nextAboutSlide = () => {
    setCurrentAboutSlide((prev) => (prev + 1) % aboutItems.length);
  };

  const prevAboutSlide = () => {
    setCurrentAboutSlide((prev) => (prev - 1 + aboutItems.length) % aboutItems.length);
  };

  // Helper function to get featured articles based on screen size
  const getFeaturedArticles = () => {
    // For medium screens and larger, show 3 articles
    if (window.innerWidth >= 768) {
      return [0, 1, 2].map((offset) => {
        const index = (currentFeaturedSlide + offset) % featuredCarouselItems.length;
        return featuredCarouselItems[index];
      });
    } 
    // For small screens, just show 1 article (the current one)
    else {
      return [featuredCarouselItems[currentFeaturedSlide]];
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section - FIXED: Removed padding-top that was causing white space */}
      <div className="relative h-screen border-b border-gray-200">
        <img 
          src="https://images.pexels.com/photos/32096532/pexels-photo-32096532/free-photo-of-fashion-model-posing-on-rocky-beach-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Fashion Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-5xl font-serif mb-4">Spring Collection 2025</h2>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Fashion', 'Beauty', 'Skincare'].map((category) => (
            <div key={category} className="relative group cursor-pointer border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <img 
                src={
                  category === 'Fashion'
                    ? 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg'
                    : category === 'Beauty'
                      ? 'https://media.istockphoto.com/id/1309405105/photo/beauty-portrait-of-young-brunette.jpg?b=1&s=612x612&w=0&k=20&c=GbkDFqOSH4q4fl_xI94QvmzkhBJvEoBipcx9csKe3YY='
                      : 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600'
                }
                alt={category}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-3xl font-serif">{category}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UPDATED: Latest Posts Section with center alignment and specific text content */}
      <div className="w-full bg-white py-16 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative">
            <h2 className="text-3xl font-serif inline-block relative">
              Latest Posts
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gray-400"></span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.content}</p>
                
                <div className="flex items-center justify-between">
                  <a href="#" className="inline-block text-xs font-medium uppercase tracking-wider text-black border-b border-black hover:text-gray-600 hover:border-gray-600 transition-colors">
                    VIEW POST
                  </a>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                      {/* Pinterest icon */}
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 relative">
            <h2 className="text-4xl font-serif inline-block relative">
              About SuKnows
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gray-400"></span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to SuKnows — Hey gorgeous!

I’m just a girl 🤭 who’s totally in love with all things makeup, fashion, and skincare 💅. I’ve spent years trying out products, picking up tips, and figuring out what actually works—and now I’m here to share it all with you!

Whether you’re short on time ⏰, unsure where to start, or just want real, honest reviews before you buy, I’ve got you covered. My goal is to make beauty fun, simple, and something that truly fits into your life.

Let’s glow, grow, and glam together! 💄✨
.
            </p>
          </div>
          
          <div className="flex flex-col items-center mb-10">
            <div className="border-t border-b border-gray-300 py-8 w-full max-w-2xl">
              <div className="text-center mb-4">
                <h3 className="text-xl font-serif">For You</h3>
              </div>
              
              <div className="relative">
                <div className="flex justify-center items-center">
                  <button 
                    onClick={prevAboutSlide} 
                    className="absolute left-0 z-10 bg-white rounded-full p-1 shadow-md border border-gray-100 hover:border-gray-300 transition-all"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  <div className="w-64 h-64 mx-auto border border-gray-200 overflow-hidden">
                    <img 
                      src={aboutItems[currentAboutSlide].image}
                      alt={aboutItems[currentAboutSlide].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <button 
                    onClick={nextAboutSlide} 
                    className="absolute right-0 z-10 bg-white rounded-full p-1 shadow-md border border-gray-100 hover:border-gray-300 transition-all"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="flex justify-center mt-4">
                  {aboutItems.map((_, index) => (
                    <div 
                      key={index}
                      className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
                        index === currentAboutSlide ? 'bg-black' : 'bg-gray-300'
                      }`}
                      onClick={() => setCurrentAboutSlide(index)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <a className="bg-black text-white text-sm px-6 py-2 hover:bg-gray-800 transition uppercase tracking-wider border border-black hover:border-gray-800">
                  Discover Magic
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-100 hover:border-gray-200 transition-all">
              <h3 className="text-xl font-serif mb-2">Our Vision</h3>
              <p className="text-gray-600">Inspiring confidence through style by celebrating individuality, self-expression, and the beauty of authenticity in every look.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-100 hover:border-gray-200 transition-all">
              <h3 className="text-xl font-serif mb-2">Experience</h3>
              <p className="text-gray-600">Backed by over years of fashion industry expertise, we blend timeless insight with modern trends to deliver style that empowers and evolves.</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-10">
            <a className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition border border-black hover:border-gray-800">
              More Than a Look
            </a>
          </div>
        </div>
      </div>

      {/* Featured Articles Carousel with modified layout for small screens */}
      <div className="w-full bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative">
            <h2 className="text-3xl font-serif inline-block relative">
              Featured Articles
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gray-400"></span>
            </h2>
          </div>
          
          <div className="relative overflow-hidden">
            {/* For medium screens and up */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {[0, 1, 2].map((offset) => {
                const index = (currentFeaturedSlide + offset)
                  % featuredCarouselItems.length;
                const item = featuredCarouselItems[index];
                
                return (
                  <div key={index} className="relative group cursor-pointer overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="relative h-[350px]">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                          <span className="text-sm font-light tracking-wider">{item.category}</span>
                          <h3 className="text-2xl font-serif mt-2 leading-tight">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* For small screens - vertical layout */}
            <div className="md:hidden">
              <div className="relative group cursor-pointer overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-[250px]">
                  <img 
                    src={featuredCarouselItems[currentFeaturedSlide].image}
                    alt={featuredCarouselItems[currentFeaturedSlide].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-sm font-light tracking-wider">{featuredCarouselItems[currentFeaturedSlide].category}</span>
                      <h3 className="text-xl font-serif mt-2 leading-tight">{featuredCarouselItems[currentFeaturedSlide].title}</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Carousel nav buttons for small screens */}
              <div className="flex justify-between mt-4">
                <button 
                  onClick={() => setCurrentFeaturedSlide((prev) => (prev - 1 + featuredCarouselItems.length) % featuredCarouselItems.length)}
                  className="bg-white rounded-full p-2 shadow-md border border-gray-100 hover:border-gray-300 transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => setCurrentFeaturedSlide((prev) => (prev + 1) % featuredCarouselItems.length)}
                  className="bg-white rounded-full p-2 shadow-md border border-gray-100 hover:border-gray-300 transition-all"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              {featuredCarouselItems.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full mx-1 ${
                    index === currentFeaturedSlide ? 'bg-black' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentFeaturedSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Black and White Banner */}
      <div className="w-full overflow-hidden py-24 border-b border-gray-200">
        <div className="grid grid-cols-6 gap-0">
          {[
            "https://images.pexels.com/photos/7319158/pexels-photo-7319158.jpeg",
            "https://images.unsplash.com/photo-1548733865-2ff7802d2b3f",
            "https://images.pexels.com/photos/6492179/pexels-photo-6492179.jpeg",
            "https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg",
            "https://images.unsplash.com/photo-1547060055-23cec1ce27b7",
            "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg"
          ].map((src, index) => (
            <div key={index} className="border-r last:border-r-0 border-gray-100">
              <img 
                src={src} 
                alt="Fashion" 
                className="w-full h-40 sm:h-48 md:h-64 lg:h-80 object-cover filter grayscale hover:grayscale-0 transition-all duration-500" 
              />
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
};

export default Home;