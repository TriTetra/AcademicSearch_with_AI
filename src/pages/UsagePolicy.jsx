
import React from 'react'

const UsagePolicy = () => {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">Usage Policy</h1>
        <div className="prose">
          <h2 className="text-xl font-semibold mb-4">1. Acceptable Use</h2>
          <p className="mb-4">
            Users must use the service in compliance with all applicable laws and regulations.
          </p>
  
          <h2 className="text-xl font-semibold mb-4">2. Prohibited Activities</h2>
          <p className="mb-4">
            Users may not engage in activities that could harm the service or other users.
          </p>
  
          <h2 className="text-xl font-semibold mb-4">3. Content Guidelines</h2>
          <p className="mb-4">
            All content must adhere to our community standards and ethical guidelines.
          </p>
        </div>
      </div>
    )
  }
  
  export default UsagePolicy