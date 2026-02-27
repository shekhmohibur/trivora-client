const Contact = () => {
  return (
    <section className="space-y-6 text-center">
      <h1 className="text-4xl font-bold text-primary">Contact</h1>
      <p className="max-w-xl mx-auto text-gray-500">
        Reach out to us for collaborations, freelance work, or questions.
      </p>

      <div className="max-w-md mx-auto card bg-base-100 shadow p-6">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full mb-3"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full mb-3"
        />
        <textarea
          placeholder="Message"
          className="textarea textarea-bordered w-full"
        />
        <button className="btn btn-primary w-full mt-4">
          Send Message
        </button>
      </div>
    </section>
  );
};

export default Contact;