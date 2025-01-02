
import React from 'react'
import googlePNG from '../assets_comp/google.png'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <div>

        {/* Giriş Form Kısmı */}
        <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-md py-7 border-2">
          <button className="w-full py-3 px-4 mb-4 flex items-center justify-center bg-gray-50 text-gray-800 font-semibold rounded-full shadow border-2 border-transparent hover:border-gray-600 transition duration-300 gap-3">
            <img className="h-4 w-4" src={googlePNG} alt="google-png" /> Continue with Google
          </button>


            <p className="text-center text-sm text-gray-400 mb-4">OR</p>

            <input
              type="email"
              placeholder="Enter your personal or work email"
              className="w-full py-2 px-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="w-full py-3 px-4 bg-amber-600 text-white font-semibold rounded-full shadow hover:bg-orange-700 transition">
              Continue with email
            </button>

            <p className="text-xs text-gray-600 mt-4 text-center">
              By continuing, you agree to the ArtificialTeam's{' '}
              <Link to="/terms" className="underline mx-1 decoration-gray-700">Consumer Terms</Link>
              and{' '}
              <Link to="/usage-policy" className="underline mx-1 decoration-gray-700">Usage Policy</Link>, and acknowledge their{' '}
              <Link to="/privacy" className="underline mx-1 decoration-gray-700">Privacy Policy</Link>.
            </p>

        </div>
    </div>
  )
}

export default LoginForm 