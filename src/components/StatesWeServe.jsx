import  { useState } from 'react';
import Map from './Map';

const StatesWeServe = () => {
  const [hoveredState, setHoveredState] = useState(null);

  const states = [
    { name: 'AL', fullName: 'Alabama', region: 'South' },
    { name: 'AK', fullName: 'Alaska', region: 'West' },
    { name: 'AZ', fullName: 'Arizona', region: 'West' },
    { name: 'AR', fullName: 'Arkansas', region: 'South' },
    { name: 'CA', fullName: 'California', region: 'West' },
    { name: 'CO', fullName: 'Colorado', region: 'West' },
    { name: 'CT', fullName: 'Connecticut', region: 'Northeast' },
    { name: 'DE', fullName: 'Delaware', region: 'Northeast' },
    { name: 'FL', fullName: 'Florida', region: 'South' },
    { name: 'GA', fullName: 'Georgia', region: 'South' },
    { name: 'HI', fullName: 'Hawaii', region: 'West' },
    { name: 'ID', fullName: 'Idaho', region: 'West' },
    { name: 'IL', fullName: 'Illinois', region: 'Midwest' },
    { name: 'IN', fullName: 'Indiana', region: 'Midwest' },
    { name: 'IA', fullName: 'Iowa', region: 'Midwest' },
    { name: 'KS', fullName: 'Kansas', region: 'Midwest' },
    { name: 'KY', fullName: 'Kentucky', region: 'South' },
    { name: 'LA', fullName: 'Louisiana', region: 'South' },
    { name: 'ME', fullName: 'Maine', region: 'Northeast' },
    { name: 'MD', fullName: 'Maryland', region: 'Northeast' },
    { name: 'MA', fullName: 'Massachusetts', region: 'Northeast' },
    { name: 'MI', fullName: 'Michigan', region: 'Midwest' },
    { name: 'MN', fullName: 'Minnesota', region: 'Midwest' },
    { name: 'MS', fullName: 'Mississippi', region: 'South' },
    { name: 'MO', fullName: 'Missouri', region: 'Midwest' },
    { name: 'MT', fullName: 'Montana', region: 'West' },
    { name: 'NE', fullName: 'Nebraska', region: 'Midwest' },
    { name: 'NV', fullName: 'Nevada', region: 'West' },
    { name: 'NH', fullName: 'New Hampshire', region: 'Northeast' },
    { name: 'NJ', fullName: 'New Jersey', region: 'Northeast' },
    { name: 'NM', fullName: 'New Mexico', region: 'West' },
    { name: 'NY', fullName: 'New York', region: 'Northeast' },
    { name: 'NC', fullName: 'North Carolina', region: 'South' },
    { name: 'ND', fullName: 'North Dakota', region: 'Midwest' },
    { name: 'OH', fullName: 'Ohio', region: 'Midwest' },
    { name: 'OK', fullName: 'Oklahoma', region: 'South' },
    { name: 'OR', fullName: 'Oregon', region: 'West' },
    { name: 'PA', fullName: 'Pennsylvania', region: 'Northeast' },
    { name: 'RI', fullName: 'Rhode Island', region: 'Northeast' },
    { name: 'SC', fullName: 'South Carolina', region: 'South' },
    { name: 'SD', fullName: 'South Dakota', region: 'Midwest' },
    { name: 'TN', fullName: 'Tennessee', region: 'South' },
    { name: 'TX', fullName: 'Texas', region: 'South' },
    { name: 'UT', fullName: 'Utah', region: 'West' },
    { name: 'VT', fullName: 'Vermont', region: 'Northeast' },
    { name: 'VA', fullName: 'Virginia', region: 'South' },
    { name: 'WA', fullName: 'Washington', region: 'West' },
    { name: 'WV', fullName: 'West Virginia', region: 'South' },
    { name: 'WI', fullName: 'Wisconsin', region: 'Midwest' },
    { name: 'WY', fullName: 'Wyoming', region: 'West' },
  ];

  // Add international locations
  const internationalLocations = [
    { name: 'HI', fullName: 'Hawaii', region: 'West', position: { top: '75%', left: '20%' } },
    { name: 'Toronto', fullName: 'Toronto', region: 'International', position: { top: '20%', left: '85%' } },
  ];

  const renderState = (state) => {
    const isHovered = hoveredState === state.name;
    
    return (
      <div 
        key={state.name}
        className={`state ${isHovered ? 'hovered' : ''}`}
        style={{
          backgroundColor: isHovered ? '#1ea88a' : '#40D3B8',
          color: 'white',
          padding: '4px 6px',
          fontSize: '12px',
          borderRadius: '4px',
          margin: '2px',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={() => setHoveredState(state.name)}
        onMouseLeave={() => setHoveredState(null)}
      >
        {state.name}
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="text-center">
        <div className="text-teal-500 text-sm font-medium mb-2">STATES WE</div>
        <h2 className="text-3xl font-bold mb-6">Currently Serve</h2>
        <p className="text-center max-w-3xl mx-auto mb-8 text-gray-600">
          We believe everyone should have access to treatment and care. That's why we're teaming up with providers 
          all over the country. Click on a green state to see the insurance companies we currently accept and to 
          learn more about online Suboxone doctors in your area.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex justify-center items-start gap-8">
        {/* Location Card */}
        <div
          className="relative rounded-lg overflow-hidden shadow-lg"
          style={{ width: "498px", height: "540px" }}
        >
          {/* Image */}
          <img
            src="/Rectangle 9308.png"
            alt="Toronto skyline with CN Tower"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute bottom-0 left-0 bg-white p-4 w-full">
            <h3 className="text-xl font-bold">Toronto</h3>
            <p className="text-teal-500 flex items-center text-sm">
              <span className="mr-1">📍</span> Ottawa St. and Homer Watson Blvd.
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full md:w-2/3 flex justify-center">
          <div className="relative w-full max-w-3xl border border-gray-200 rounded-lg overflow-hidden p-4">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatesWeServe;