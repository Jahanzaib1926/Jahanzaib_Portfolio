import { useState } from 'react';
import { Mail, Send, CheckCircle, Loader2, Linkedin, Github, MessageCircle, Sparkles } from 'lucide-react';

export const Contact = () => {
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

    try {
      // Using FormSubmit - free service that works immediately
      const response = await fetch('https://formsubmit.co/ajax/jahanzaib192005@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Contact Form Message from ${formData.name}`,
          _captcha: false,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (err) {
      console.error('Form submission error:', err);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-24 pb-16 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      {/* Loader Overlay */}
      {sending && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 flex flex-col items-center space-y-6 shadow-2xl border-2 border-teal-200 dark:border-teal-800 max-w-sm w-full mx-4">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl animate-pulse"></div>
              <Loader2 className="text-teal-600 dark:text-teal-400 animate-spin relative" size={56} />
            </div>
            <div className="text-center">
              <p className="text-gray-900 dark:text-white text-xl font-bold mb-2">Sending your message...</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Please wait while we process your request</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-teal-600 dark:text-teal-400" size={24} />
            <span className="text-teal-600 dark:text-teal-400 text-sm font-semibold uppercase tracking-wider">
              Let's Work Together
            </span>
            <Sparkles className="text-teal-600 dark:text-teal-400" size={24} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm here to help you build exceptional digital experiences.
            Let's discuss your project and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Contact Information Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-gray-100 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <MessageCircle className="text-teal-600 dark:text-teal-400" size={32} />
              Let's Connect
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
              I'm always excited to collaborate on innovative projects. Whether you're looking to build a new application,
              enhance an existing platform, or explore new possibilities, I'm here to help turn your vision into reality.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:jahanzaib192005@gmail.com"
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-teal-50 to-teal-100/50 dark:from-teal-900/20 dark:to-teal-800/10 rounded-xl hover:shadow-lg transition-all duration-300 group border border-teal-200 dark:border-teal-800"
              >
                <div className="p-3 bg-teal-600 dark:bg-teal-500 rounded-xl group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Email Address</p>
                  <p className="text-gray-900 dark:text-white font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    jahanzaib192005@gmail.com
                  </p>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 group border border-gray-200 dark:border-gray-600 hover:border-teal-500 dark:hover:border-teal-400"
                >
                  <Linkedin className="text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 mb-2 transition-colors" size={28} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 group border border-gray-200 dark:border-gray-600 hover:border-teal-500 dark:hover:border-teal-400"
                >
                  <Github className="text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 mb-2 transition-colors" size={28} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-gray-100 dark:border-gray-700">
            {submitted ? (
              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-900/30 dark:to-teal-800/20 border-2 border-teal-200 dark:border-teal-800 rounded-2xl p-10 text-center animate-fade-in">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl animate-pulse"></div>
                  <CheckCircle className="text-teal-600 dark:text-teal-400 relative" size={64} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                  Thank you for reaching out. I've received your message and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-4 flex items-center gap-3 animate-fade-in">
                    <div className="text-red-600 dark:text-red-400">
                      <MessageCircle size={20} />
                    </div>
                    <p className="text-red-700 dark:text-red-400 text-sm font-medium">{error}</p>
                  </div>
                )}
                
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 dark:text-white mb-3"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700/50 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 hover:border-teal-300 dark:hover:border-teal-600"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 dark:text-white mb-3"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700/50 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 hover:border-teal-300 dark:hover:border-teal-600"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 dark:text-white mb-3"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700/50 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 hover:border-teal-300 dark:hover:border-teal-600"
                    placeholder="Tell me about your project, ideas, or how I can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-semibold text-lg transition-all transform hover:scale-[1.02] active:scale-100 shadow-lg hover:shadow-xl disabled:transform-none"
                >
                  {sending ? (
                    <>
                      <Loader2 className="animate-spin" size={22} />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={22} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
