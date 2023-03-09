import axios from "axios";

const ContactForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    if (!name || !email || !message) return alert("Please fill out all fields");

    // Send the form submission to Formspree
    axios
      .post("https://formspree.io/f/mzbqpzwo", {
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
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      <label
        className="block mb-2 text-sm font-medium text-gray-400"
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:bg-white"
        type="text"
        id="name"
        name="name"
        placeholder="John Smith"
        required
      />
      <label
        className="block mt-4 mb-2 text-sm font-medium text-gray-400"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:bg-white"
        type="email"
        id="email"
        name="email"
        placeholder="johnsmith@gmail.com"
        required
      />
      <label
        className="block mt-4 mb-2 text-sm font-medium text-gray-400"
        htmlFor="message"
      >
        Message
      </label>
      <textarea
        className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md resize-none focus:outline-none focus:bg-white"
        id="message"
        name="message"
        placeholder="I am interested in exploring opportunities in computer science and related fields. I would love to hear from you!"
        rows={4}
        style={{ borderRadius: "3rem" }}
      ></textarea>
      <button
        type="submit"
        className="w-full py-2 mt-4 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
