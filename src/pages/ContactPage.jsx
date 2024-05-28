import React, { useState } from 'react';
import ErrorModal from '../components/ErrorModal';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        body: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        subject: '',
        email: '',
        body: ''
    });

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name || formData.name.length < 3) {
            errors.name = 'Name must be at least 3 characters';
            isValid = false;
        }

        if (!formData.subject || formData.subject.length < 3) {
            errors.subject = 'Subject must be at least 3 characters';
            isValid = false;
        }

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid';
            isValid = false;
        }

        if (!formData.body || formData.body.length < 3) {
            errors.body = 'Body must be at least 3 characters';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData);
            setFormData({
                name: '',
                subject: '',
                email: '',
                body: ''
            });
            setSuccessMessage('Your message has been submitted successfully!');
            setTimeout(() => setSuccessMessage(''), 5000); // Clear the message after 5 seconds
        } else {
            setModalMessage('Please correct the errors in the form');
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
            {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                    {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                    {formErrors.subject && <p className="text-red-500 text-sm">{formErrors.subject}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                    {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                </div>
                <div>
                    <label htmlFor="body" className="block text-sm font-medium">Body</label>
                    <textarea
                        id="body"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    ></textarea>
                    {formErrors.body && <p className="text-red-500 text-sm">{formErrors.body}</p>}
                </div>
                <button type="submit" className="bg-primary text-white py-2 px-4 rounded">
                    Submit
                </button>
            </form>
            {showModal && <ErrorModal message={modalMessage} onClose={closeModal} />}
        </div>
    );
};

export default ContactPage;
