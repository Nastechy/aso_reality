import Footer from '@/components/footer'
import { Navbar } from '@/components/navbar'
import PrivacyPolicy from '@/components/privacyPolicy'
import React from 'react'

const PrivacyPolicyPage = () => {
    return (
        <div>
            <div className="absolute top-0 left-0 w-full z-20">
                <Navbar />
            </div>
            <PrivacyPolicy />
            <Footer />
        </div>
    )
}

export default PrivacyPolicyPage
