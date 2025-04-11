import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ActiveProps } from './Navbar';
import './Contact.scss';
import emailjs from '@emailjs/browser';

interface FormErrors {
  fullname?: string;
  email?: string;
  message?: string;
}

const Contact = ({ active }: ActiveProps) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.fullname.trim()) newErrors.fullname = 'Full name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    } else if (formData.message.length > 10000) {
      newErrors.message = 'Message is too long. Please keep it under 10,000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        fullname: formData.fullname,
        email: formData.email,
        message: formData.message.substring(0, 10000),
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        'service_qhvyzoo',
        'template_8w74eag',
        templateParams,
        {
          publicKey: 'XO6S2rjTNIp1NSo1k'
        }
      );

      setSubmitStatus('success');
      setFormData({ fullname: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error sending email:', error);
      if (error.status === 413) {
        setSubmitStatus('error');
        setErrors({
          message: 'Message is too long. Please shorten your message and try again.',
        });
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className={active ? "contact active" : "contact"} data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.486274634073!2d73.847772315367!3d18.5204300873986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06c0e9b1a1b%3A0x1a2b3c4d5e6f7g8h!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1697041234567!5m2!1sen!2sin"
            width="100%"
            height="300"
            loading="lazy"
            title="Google Maps"
            aria-label="Location map"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        {submitStatus === 'success' && (
          <div className="alert alert-success" role="alert">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="alert alert-error" role="alert">
            There was an error sending your message. Please try again later.
          </div>
        )}

        <form onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className={`form-input ${errors.fullname ? 'error' : ''}`}
              placeholder="Full name"
              value={formData.fullname}
              onChange={handleInputChange}
              aria-invalid={!!errors.fullname}
              aria-describedby={errors.fullname ? 'fullname-error' : undefined}
            />
            {errors.fullname && (
              <span id="fullname-error" className="error-message">{errors.fullname}</span>
            )}

            <input
              type="email"
              name="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" className="error-message">{errors.email}</span>
            )}
          </div>

          <textarea
            name="message"
            className={`form-input ${errors.message ? 'error' : ''}`}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          ></textarea>
          {errors.message && (
            <span id="message-error" className="error-message">{errors.message}</span>
          )}

          <button
            className="form-btn"
            type="submit"
            disabled={isSubmitting}
            data-form-btn
          >
            {isSubmitting ? (
              <>
                <FontAwesomeIcon icon={faSpinner} spin />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
