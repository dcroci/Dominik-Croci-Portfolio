'use client';
import { useState } from 'react';
import FadeOnScroll from './FadeOnScroll';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [nameValue, setNameValue] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [messageError, setMessageError] = useState('');

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

    setNameError(isNameValid ? '' : 'Name is invalid');
    setEmailError(isEmailValid ? '' : 'Email is invalid');
    setMessageError(isMessageValid ? '' : 'Message is invalid');

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
    <section className="min-h-screen container mx-auto px-6 snap flex flex-col items-center justify-center w-full">
      <h2 className="col-span-full text-center text-6xl p-6">
        <FadeOnScroll>{`Let's get in touch`}</FadeOnScroll>
      </h2>
      <form
        className="flex flex-col w-full mx-auto text-2xl p-6 text-black max-w-3xl"
        onSubmit={sendEmail}
      >
        <label htmlFor="from_name" className="text-white">
          Name:
        </label>
        <input
          type="text"
          className="rounded text-xl indent-2 mb-4 p-2"
          name="from_name"
          aria-label="Name"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        {nameError && (
          <p className="text-white font-bold w-fit p-4 bg-red-700 rounded-md mt-2 mb-4">
            {nameError}
          </p>
        )}
        <label htmlFor="user_email" className="text-white">
          Email:
        </label>
        <input
          type="email"
          className="rounded text-xl indent-2 mb-4 p-2"
          name="user_email"
          aria-label="Email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        {emailError && (
          <p className="text-white font-bold w-fit p-4 bg-red-700 rounded-md mt-2 mb-4">
            {emailError}
          </p>
        )}
        <label htmlFor="message" className="text-white">
          Message:
        </label>
        <textarea
          name="message"
          cols={30}
          rows={10}
          className="rounded text-xl indent-2 p-2"
          aria-label="Message"
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
        ></textarea>
        {messageError && (
          <p className="text-white font-bold w-fit p-4 bg-red-700 rounded-md mt-2 mb-4">
            {messageError}
          </p>
        )}
        <button className="flex mx-auto text-3xl bg-blue-500 text-white rounded p-6 mt-6 items-center justify-center gap-4 hover:bg-blue-600 hover:-translate-y-1">
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
    </section>
  );
}

export default ContactForm;
