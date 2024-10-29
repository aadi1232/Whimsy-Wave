import React from 'react';

function TravelBlog() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 pb-24 pt-40  dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
      {/* Title and Meta Information */}
      <h1 className="text-5xl font-bold mb-6">Travel Diaries: Exploring the World</h1>

      {/* Blog Content */}
      <div className="blog-content">
        <p className="text-xl mb-6 leading-relaxed">
          Traveling is one of the most enriching experiences in life. Whether you are exploring bustling cities or tranquil landscapes, each destination offers its own unique charm and adventure. Here are some insights and tips from my journey around the world.
        </p>

        {/* Section 1: Immersing in Local Culture */}
        <h2 className="text-3xl font-bold mt-10 mb-6">The Importance of Immersing in Local Culture</h2>
        <p className="text-xl mb-6 leading-relaxed">
          One of the best ways to truly experience a new place is to immerse yourself in the local culture. Try local food, attend cultural festivals, and engage with locals to understand their way of life. This not only enriches your travel experience but also broadens your perspective of the world.
        </p>

        {/* Section 2: Planning Your Itinerary */}
        <h2 className="text-3xl font-bold mt-10 mb-6">Planning Your Itinerary for Maximum Exploration</h2>
        <p className="text-xl mb-6 leading-relaxed">
          While spontaneity is exciting, a well-planned itinerary can help you make the most of your trip. Research the must-visit spots, but leave some room for unexpected adventures. Prioritize quality over quantity — it’s better to explore a few places in depth than to rush through multiple locations without really experiencing them.
        </p>

        {/* Section 3: Traveling on a Budget */}
        <h2 className="text-3xl font-bold mt-10 mb-6">How to Travel on a Budget Without Missing Out</h2>
        <p className="text-xl mb-6 leading-relaxed">
          Traveling doesn’t have to break the bank. Look for budget-friendly accommodation options like hostels or short-term apartment rentals. Eat at local markets instead of expensive restaurants, and use public transportation to get around. With some research and planning, you can enjoy amazing experiences without overspending.
        </p>

        {/* Section 4: Staying Safe While Traveling */}
        <h2 className="text-3xl font-bold mt-10 mb-6">Staying Safe While Traveling Abroad</h2>
        <p className="text-xl mb-6 leading-relaxed">
          Safety should always be a priority when traveling. Before heading to your destination, familiarize yourself with local customs, laws, and potential risks. Keep important documents in a safe place, stay aware of your surroundings, and make copies of your passport and travel insurance. Trust your instincts — if something feels off, it probably is.
        </p>

        {/* Section 5: Documenting Your Journey */}
        <h2 className="text-3xl font-bold mt-10 mb-6">Tips for Documenting Your Journey</h2>
        <p className="text-xl mb-6 leading-relaxed">
          Whether through photography, journaling, or blogging, documenting your travels allows you to relive your adventures long after they’ve ended. It also provides an opportunity to share your experiences with others, inspiring them to embark on their own journeys.
        </p>
      </div>
    </div>
  );
}

export default TravelBlog;
