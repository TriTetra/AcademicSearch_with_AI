
import React from 'react'

const Terms = () => {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">Consumer Terms</h1>
        <div className="prose">
          <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using our services, you agree to be bound by these terms and conditions.
          </p>
  
          <h2 className="text-xl font-semibold mb-4">2. Service Description</h2>
          <p className="mb-4">
            We provide AI-powered services for various use cases. The service may be modified or updated periodically.
          </p>
  
          <h2 className="text-xl font-semibold mb-4">3. User Obligations</h2>
          <p className="mb-4">
            Users must provide accurate information and maintain the security of their accounts.
          </p>
        </div>
      </div>
    )
  }
  
  export default Terms
  