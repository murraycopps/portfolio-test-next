import axios from 'axios';

const ContactForm= () => {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        if (!name || !email || !message) return alert("Please fill out all fields");    

        // Send the form submission to Formspree
        axios.post('https://formspree.io/f/mzbqpzwo', {
            name,
            email,
            message,
        })
            .then((response: any) => {
                // Form submission was successful, do something here (e.g. display a success message)
                console.log(response);
            })
            .catch((error: any) => {
                // Form submission failed, do something here (e.g. display an error message)
                console.log(error);
            });
        event.target.reset();

    };

    return (
        <form className="mx-auto max-w-lg" onSubmit={handleSubmit}>
            <label className="block font-medium text-sm text-gray-400 mb-2" htmlFor="name">Name</label>
            <input className="w-full px-4 py-2 rounded-full text-gray-700 bg-gray-200 focus:outline-none focus:bg-white" type="text" id="name" name="name" placeholder="John Smith" />
            <label className="block font-medium text-sm text-gray-400 mt-4 mb-2" htmlFor="email">Email</label>
            <input className="w-full px-4 py-2 rounded-full text-gray-700 bg-gray-200 focus:outline-none focus:bg-white" type="email" id="email" name="email" placeholder="johnsmith@gmail.com" />
            <label className="block font-medium text-sm text-gray-400 mt-4 mb-2" htmlFor="message">Message</label>
            <textarea
                className="w-full px-4 py-2 rounded-md text-gray-700 bg-gray-200 focus:outline-none focus:bg-white resize-none"
                id="message"
                name="message"
                placeholder="I am interested in exploring opportunities in computer science and related fields. I would love to hear from you!"
                rows={4}
                style={{ borderRadius: '3rem' }}
            ></textarea>
            <button type='submit' className="w-full mt-4 py-2 rounded-full text-white font-medium bg-blue-500 hover:bg-blue-700 focus:outline-none">Send Message</button>
        </form>
    )
}

export default ContactForm