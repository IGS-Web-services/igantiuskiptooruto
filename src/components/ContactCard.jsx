import React from 'react'
import SectionHeading from './SectionHeading'
function ContactCard() {
    return (
        <div className="section_hidden w-full sm:w-[80%] mx-auto">
            <div className="text-center">
            <SectionHeading subTitle="contact" title=" Get in touch"/>
                <p className="text-gray-600">Have questions or want to get in touch?</p>
            </div>
            <div className="mt-8">
                <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                    <p className="text-gray-600 mb-4">
                        Feel free to reach out to me for any questions or inquiries. I am here to help!
                    </p>
                    <p className="text-gray-600">
                        <strong>Email: </strong>ignatiusruto001@gmail.com
                    </p>
                    <p className="text-gray-600">
                        <strong>Phone: </strong> +254724998544
                    </p>
                    <p className="text-gray-600">
                        <strong>Address: </strong> P.O.BOX 30303-107, Mosoriot
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactCard