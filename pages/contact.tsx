import React, { FC } from 'react';
import PageWrapper from '../components/PageWrapper';
import ContactForm from '../components/ContactForm';

const Contact: FC = () => {
    return (<PageWrapper title="Contact Me">
        <h1 className="text-3xl font-bold leading-tight text-center text-gray-300 mb-4">Contact Me</h1>
        <ContactForm />
        <div className="text-center mt-8">
            <p className="text-lg font-medium leading-tight text-gray-600">
                You can also reach me at <a href="mailto:murraycopps@gmail.com" className="font-bold text-blue-600 hover:text-blue-800">murraycopps@gmail.com</a>
            </p>
        </div>
    </PageWrapper>)
}
export default Contact;
