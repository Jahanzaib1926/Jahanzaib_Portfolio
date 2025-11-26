import { useRef, useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        { publicKey }
      );
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Message send failed. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-lg">
                  <Mail className="text-teal-600 dark:text-teal-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    dev.jahanzaib@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 rounded-xl p-8 text-center">
                <CheckCircle className="text-teal-600 dark:text-teal-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="text-red-600 dark:text-red-400 text-sm">{error}</div>
                )}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all transform hover:scale-105"
                >
                  <Send size={20} />
                  <span>{sending ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
