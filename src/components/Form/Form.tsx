import { Container, ContainerSucces } from './styles';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';
import validator from 'validator';
import emailjs from '@emailjs/browser';

export function Form() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('6zp2iUZZbY96EGMDW'); // Public Key
  }, []);

  function verifyEmail(email:string) {
    setValidEmail(validator.isEmail(email));
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
  
    emailjs
      .sendForm('service_vauofuj', 'template_mewhain', formRef.current!)
      .then(() => {
        setSubmitted(true);
        setSubmitting(false);
        toast.success('Email successfully sent!', {
          position: toast.POSITION.BOTTOM_LEFT,
          toastId: 'succeeded',
        });
      })
      .catch(() => {
        setSubmitting(false);
        toast.error('Failed to send message.', {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };
  
  useEffect(() => {
    if (submitted && formRef.current) {
      formRef.current.reset();
    }
  }, [submitted]);

  if (submitted) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form ref={formRef} onSubmit={sendEmail}>
        <input
          placeholder="Email"
          type="email"
          name="email" // IMPORTANT: Must match the variable in your EmailJS template
          onChange={(e) => verifyEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Send a message to get started."
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" disabled={submitting || !validEmail || !message}>
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
