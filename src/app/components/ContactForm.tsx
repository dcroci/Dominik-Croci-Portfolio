'use client';
import { useState } from 'react';
import FadeOnScroll from './FadeOnScroll';
import emailjs from '@emailjs/browser';
import { Button, Input, Textarea } from '@nextui-org/react';

function ContactForm() {
  const [nameValue, setNameValue] = useState('');

  const [emailValue, setEmailValue] = useState('');

  const [messageValue, setMessageValue] = useState('');

  const fields = [
    {
      id: 'name',
      label: 'Name',
      name: 'from_name',
      autoFocus: true,
      multiline: false,
    },
    {
      id: 'email',
      label: 'Email Address',
      name: 'user_email',
      autoFocus: false,
      multiline: false,
    },
    {
      id: 'message',
      label: 'Message',
      name: 'message',
      autoFocus: false,
      multiline: true,
    },
  ];

  function sendEmail(e: any) {
    e.preventDefault();

    const isNameValid = nameValue.trim() !== '';
    const isEmailValid = emailValue.trim() !== '';
    const isMessageValid = messageValue.trim() !== '';

    if (isNameValid && isEmailValid && isMessageValid) {
      emailjs
        .sendForm(
          'service_viiezjj',
          'template_80wtb1h',
          e.target,
          'bsET1a5yB0esjGNfS'
        )
        .then(
          (result) => {
            console.log(result.text);
            alert('Email sent!');
            // Reset the form state
            setNameValue('');
            setEmailValue('');
            setMessageValue('');
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  return (
    <section
      className="min-h-screen container mx-auto px-6 snap flex flex-col items-center justify-center w-full"
      id="contact"
    >
      <h2 className="col-span-full text-center text-6xl p-6">
        <FadeOnScroll>{`Let's get in touch`}</FadeOnScroll>
      </h2>
      <form
        className="flex flex-col w-full mx-auto text-2xl p-6 text-black max-w-3xl gap-6"
        onSubmit={sendEmail}
      >
        <Input
          type="text"
          label="Name"
          placeholder="Enter your name"
          aria-label="Name"
          name="from_name"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          size="lg"
          isRequired
        />

        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          aria-label="Email"
          name="user_email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          size="lg"
          isRequired
        />

        <Textarea
          name="message"
          label="Message"
          placeholder="Enter your description"
          className="w-full text-xl"
          aria-label="Message"
          onChange={(e) => setMessageValue(e.target.value)}
          value={messageValue}
          size="lg"
          isRequired
        />
        <Button
          className="flex mx-auto text-3xl bg-blue-500 text-white rounded p-6 mt-6 items-center justify-center gap-4 hover:bg-blue-600 hover:-translate-y-1"
          type="submit"
          spinner
          endContent={
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
          }
        >
          Send message
        </Button>
      </form>
    </section>
  );
}

export default ContactForm;
