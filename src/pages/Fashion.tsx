import React from 'react';

function Fashion() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Banner Section */}
      <div className="h-[48rem] bg-white">
  <img 
    src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
    alt="Fashion Banner"
    className="mx-auto w-full h-[48rem] object-cover"
        />
        <div className="absolute bottom-10 left-10">
          <h1 className="text-4xl font-serif text-white">Fashion</h1>
          <p className="text-white mt-2">127 POSTS</p>
          <p className="text-white mt-4 max-w-lg">
            Bringing to you the latest fashion and style trends directly from designers, 
            influencers, fashion weeks, and more. Want the look for less? No problem—we 
            cover all the high-end dupes too!
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Articles Column */}
          <div className="w-full md:w-2/3">
            {/* Featured Article */}
            <article className="mb-12">
              <div className="flex items-center text-sm mb-2">
                <span className="text-blue-800 font-medium">FASHION</span>
                <span className="mx-2">|</span>
                <span className="text-blue-800 font-medium">TRENDS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif mb-2">Summer 2025 Fashion Trends You Need To Know</h2>
              <p className="text-gray-600 mb-4">MAY 18, 2025</p>
              
              <div className="relative h-[400px] mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=500&auto=format&fit=crop&q=60&..." 
                  alt="Summer Fashion Trends"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-gray-700 mb-6">
                Fashion is a cycle. What was once forgotten in the back of your wardrobe somehow 
                finds its way back—sometimes reinvented, sometimes exactly as you remember it. Summer 2025 
                fashion trends are all about embracing natural fabrics, vibrant patterns, and unexpected silhouettes
                that make a statement while remaining comfortable in the heat.
              </p>
              
              <button className="bg-black text-white px-6 py-2 text-sm">VIEW POST</button>
              
              <div className="flex items-center mt-6">
                <span className="text-gray-400 mr-4">SHARE</span>
                <a href="#" className="mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" className="mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </article>
            
            <hr className="mb-12" />
            
            {/* Second Article */}
            <article className="mb-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" 
                    alt="Capsule Wardrobe"
                    className="w-full h-[300px] object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-center text-sm mb-2">
                    <span className="text-blue-800 font-medium">FASHION</span>
                    <span className="mx-2">|</span>
                    <span className="text-blue-800 font-medium">CAPSULE WARDROBE</span>
                  </div>
                  <h2 className="text-2xl font-serif mb-2">How To Build A Spring Capsule Wardrobe</h2>
                  <p className="text-gray-600 mb-4">MAY 15, 2025</p>
                  <p className="text-gray-700 mb-4">
                    A well-curated capsule wardrobe is the secret to effortless style. Learn how to select versatile pieces 
                    that work together seamlessly to create countless outfits for any occasion this spring...
                  </p>
                  <button className="bg-black text-white px-6 py-2 text-sm">VIEW POST</button>
                </div>
              </div>
            </article>
            
            <hr className="mb-12" />
            
            {/* Third Article */}
            <article className="mb-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" 
                    alt="Polka Dot Dresses"
                    className="w-full h-[300px] object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-center text-sm mb-2">
                    <span className="text-blue-800 font-medium">FASHION</span>
                    <span className="mx-2">|</span>
                    <span className="text-blue-800 font-medium">STYLE GUIDE</span>
                  </div>
                  <h2 className="text-2xl font-serif mb-2">10 Polka Dot Dresses You Need For Your Summer Holiday</h2>
                  <p className="text-gray-600 mb-4">MAY 10, 2025</p>
                  <p className="text-gray-700 mb-4">
                    Polka dots are making a major comeback this season. These playful prints are perfect
                    for your summer getaway, offering a blend of vintage charm and contemporary style...
                  </p>
                  <button className="bg-black text-white px-6 py-2 text-sm">VIEW POST</button>
                </div>
              </div>
            </article>
          </div>
          
          {/* Sidebar */}
          <div className="w-full md:w-1/3">
            
            
            {/* Latest Posts */}
            <div className="mb-12">
              <h3 className="font-serif text-2xl mb-6">The Latest</h3>
              <div className="space-y-6">
                {/* Latest Post 1 */}
                <div className="flex gap-4">
                  <div className="w-1/4">
                    <div className="relative bg-black text-white w-10 h-10 flex items-center justify-center">
                      <span className="text-lg">1</span>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" 
                      alt="Summer Fashion Trends"
                      className="w-full h-20 object-cover"
                    />
                  </div>
                  <div className="w-3/4">
                    <h4 className="font-serif">Summer 2025 Fashion Trends You Need To Know</h4>
                    <p className="text-gray-600 text-sm mt-1">MAY 18, 2025</p>
                  </div>
                </div>
                
                {/* Latest Post 2 */}
                <div className="flex gap-4">
                  <div className="w-1/4">
                    <div className="relative bg-black text-white w-10 h-10 flex items-center justify-center">
                      <span className="text-lg">2</span>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" 
                      alt="Spring Capsule Wardrobe"
                      className="w-full h-20 object-cover"
                    />
                  </div>
                  <div className="w-3/4">
                    <h4 className="font-serif">How To Build A Spring Capsule Wardrobe</h4>
                    <p className="text-gray-600 text-sm mt-1">MAY 15, 2025</p>
                  </div>
                </div>
                
                {/* Latest Post 3 */}
                <div className="flex gap-4">
                  <div className="w-1/4">
                    <div className="relative bg-black text-white w-10 h-10 flex items-center justify-center">
                      <span className="text-lg">3</span>
                    </div>
                    <img 
                      src="https://media.istockphoto.com/id/2155498776/photo/woman-walking-with-shopping-bags-on-city-street.webp?a=1&b=1&s=612x612&w=0&k=20&c=aF9rkTbesDO3X04nP7Xid23BP0or1i5gUfHP-rhw724=" 
                      alt="Polka Dot Dresses"
                      className="w-full h-20 object-cover"
                    />
                  </div>
                  <div className="w-3/4">
                    <h4 className="font-serif">10 Polka Dot Dresses You Need For Your Summer Holiday</h4>
                    <p className="text-gray-600 text-sm mt-1">MAY 10, 2025</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Categories */}
            <div className="mb-12">
              <h3 className="font-serif text-2xl mb-6">Categories</h3>
              <ul className="space-y-2">
                <li><a className="hover:text-blue-800">Summer Style</a></li>
                <li><a className="hover:text-blue-800">Capsule Wardrobe</a></li>
                <li><a className="hover:text-blue-800">Workwear</a></li>
                <li><a className="hover:text-blue-800">Evening Wear</a></li>
                <li><a className="hover:text-blue-800">Accessories</a></li>
              </ul>
            </div>
            
            {/* Featured Post */}
            <div className="border p-6">
              <h3 className="font-serif text-xl mb-4">Editor's Pick</h3>
              <img 
                src="https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Editor's Pick"
                className="w-full h-40 object-cover mb-4"
              />
              <h4 className="font-serif text-lg mb-2">Old Money Style: How To Look Expensive On A Budget</h4>
              <p className="text-gray-700 text-sm mb-4">
                We've curated a collection of affordable pieces that channel that coveted old money aesthetic without breaking the bank.
              </p>
              <a className="border border-black text-black px-4 py-1 text-sm hover:bg-black hover:text-white transition-colors">Fashion</a>
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
}

export default Fashion;