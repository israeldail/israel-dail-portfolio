import { useState } from 'react';
import { Resend } from 'resend';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const resend = new Resend('re_eKEfdEAR_B1jZdSWJnMcS4LMY5DJP7mkA');
      
      await resend.emails.send({
        from: 'contact.dailwebdev.com', // This needs to be your verified domain or Resend's default
        to: 'israeldail2@gmail.com',
        replyTo: formData.email,
        subject: formData.subject,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${formData.name} (${formData.email})</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        `
      });

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col gap-8 mx-auto max-w-[1200px] w-[calc(100%-40px)] p-8 lg:p-12">
      <h1 className="text-3xl font-bold text-center">Get in Touch</h1>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors mt-4 disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status messages */}
            {status === 'success' && (
              <div className="text-green-500 text-sm mt-2">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="text-red-500 text-sm mt-2">
                Failed to send message. Please try again later.
              </div>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Other Ways to Connect</h2>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-envelope text-2xl text-blue-500"></i>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:israeldail2@gmail.com" className="text-blue-500 hover:underline">
                    israeldail2@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <i className="fa-brands fa-linkedin text-2xl text-blue-500"></i>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/israeldail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    linkedin.com/in/israeldail
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <i className="fa-brands fa-github text-2xl text-blue-500"></i>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <a
                    href="https://github.com/israeldail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    github.com/israeldail
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <p className="text-gray-600">
              Miami, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
