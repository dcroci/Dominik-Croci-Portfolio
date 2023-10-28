import FadeOnScroll from './FadeOnScroll';

function ContactForm() {
  return (
    <section>
      <FadeOnScroll>
        <h2 className="col-span-full text-center text-3xl">
          {`Let's get in touch`}
        </h2>
        <form className="flex flex-col max-w-lg mx-auto">
          <label htmlFor="name">Name:</label>
          <input type="text" />
          <label htmlFor="email">Email:</label>
          <input type="email" />
          <label htmlFor="message">Message:</label>
          <textarea name="message" cols={30} rows={10}></textarea>
          <button className="flex mx-auto">
            Send message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </form>
      </FadeOnScroll>
    </section>
  );
}

export default ContactForm;
