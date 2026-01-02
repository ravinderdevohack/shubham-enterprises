import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="/images/betonka-4784341_1280.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12 text-center">
                      <h2 className="text-2xl text-center font-bold md:text-4xl text-orange-800">
                          Shubham Enterprises
                      </h2>
                      <p className="mt-6 text-gray-600 tracking-tight">
                          <span className='text-lg font-bold tracking-tight'>who we are </span><br />
                          At Shubham Enterprises, we understand that in the construction industry, downtime is the enemy of progress. 
                          As a specialized manufacturer and service provider, we have dedicated ourselves to maintaining the backbone of your job site: THE TOWER CRANES.
                          <br /><br />
                          We provide end-to-end support for your Cranes, ensuring every lift is safe and every machine is reliable. 
                          Our expertise spans across the industry’s most trusted models, providing a one-stop solution for crane owners and contractors.
                      </p>
                      <p className="mt-6 text-gray-600">
                          <span className='text-lg font-bold tracking-tight'>Our Core Specializations: </span><br />
                          <span className='text-lg font-bold tracking-tight'>Precision Spare Parts Manufacturing </span><br />
                          Precision Spare Parts Manufacturing We manufacture high-grade, durable spare parts designed to meet or exceed original specifications. 
                          Whether you need critical mechanical components or wear-and-tear parts, our inventory is built to keep Mobile Tower Crane and Fixed Tower  
                          Cranes operational under the toughest conditions.
                      </p>
                      <p className="mt-6 text-gray-600">
                          <span className='text-lg font-bold tracking-tight'>Comprehensive Repairing & Maintenance </span><br />
                          Our technical team specializes in the intricate mechanical and structural repair of MTC-2418, SP-453, MTC-3625 and SP-2430 series, 
                          as well as FTC cranes (POTAIN, ACE, ZOOMLION, HAUTA. HAUXIA etc.). From troubleshooting complex hoist issues to routine 
                          structural maintenance, we bring years of hands-on experience to every project.
                      </p>
                      <p className="mt-6 text-gray-600">
                          <span className='text-lg font-bold tracking-tight'>Professional Refurbishment Rubbing & Painting</span><br />
                          Extreme weather and constant use take a toll on crane structures. We provide professional rubbing and painting services that do more 
                          than just improve aesthetics—our high-quality finishes protect your investment against corrosion, rust, and structural fatigue, 
                          extending the lifespan of your MTC and FTC models.
                      </p>
                      <p className="mt-4 text-gray-600">
                          <span className='text-lg font-bold tracking-tight'>Why Choose Shubham Enterprises? </span><br />
                          We combine technical precision with a commitment to fast turnaround times. 
                          We know that every hour a crane is idle costs money, which is why we focus on delivering quality parts and expert service without delay. 
                          When you partner with us, you aren't just getting a vendor; you're getting a technical partner dedicated to your project's success
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}