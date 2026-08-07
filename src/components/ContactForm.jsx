'use client';

import { useState, useCallback } from 'react';
import { Send, CheckCircle, User, Mail, Phone, MessageSquare, Loader2 } from 'lucide-react';

const subjectOptions = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'bulk-order', label: 'Bulk Order' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'complaint', label: 'Complaint' },
  { value: 'other', label: 'Other' },
];

const MAX_MESSAGE_LENGTH = 500;

function validateField(name, value) {
  switch (name) {
    case 'name':
      return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
    case 'email':
      return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
        ? 'Please enter a valid email address'
        : '';
    case 'phone':
      return !/^(\+91\s?)?[6-9]\d{9}$/.test(value.replace(/\s/g, ''))
        ? 'Please enter a valid 10-digit Indian mobile number'
        : '';
    case 'message':
      return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
    default:
      return '';
  }
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [focused, setFocused] = useState(null);

  const validateAll = useCallback(() => {
    const newErrors = {};
    ['name', 'email', 'phone', 'message'].forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });
    return newErrors;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError('');
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const err = validateField(name, value);
      setErrors((prev) => {
        if (err) return { ...prev, [name]: err };
        const { [name]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setFocused(null);
    const err = validateField(name, value);
    setErrors((prev) => {
      if (err) return { ...prev, [name]: err };
      const { [name]: _, ...rest } = prev;
      return rest;
    });
  };

  const handleFocus = (field) => {
    setFocused(field);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const allTouched = { name: true, email: true, phone: true, message: true };
    setTouched(allTouched);

    const validationErrors = validateAll();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.focus();
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }
      
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' });
      setErrors({});
      setTouched({});
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err.message || 'Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // ... rest of your form JSX (same as before)

  const baseInputClasses = 
    'w-full bg-white dark:bg-gray-800/80 backdrop-blur-sm border-2 rounded-xl pl-11 pr-4 py-3.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400/60 dark:placeholder:text-gray-500/60 outline-none transition-all duration-300';

  const getInputClasses = (fieldName) => {
    const hasError = touched[fieldName] && errors[fieldName];
    const isValid = touched[fieldName] && !errors[fieldName] && formData[fieldName].length > 0;
    const isFocused = focused === fieldName;

    if (hasError) {
      return `${baseInputClasses} border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 hover:border-red-400`;
    }
    if (isValid) {
      return `${baseInputClasses} border-emerald-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 hover:border-emerald-400`;
    }
    if (isFocused) {
      return `${baseInputClasses} border-blue-400 focus:ring-4 focus:ring-blue-500/10`;
    }
    return `${baseInputClasses} border-gray-200/80 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600`;
  };

  const getIconColor = (fieldName) => {
    const hasError = touched[fieldName] && errors[fieldName];
    const isValid = touched[fieldName] && !errors[fieldName] && formData[fieldName].length > 0;
    const isFocused = focused === fieldName;

    if (hasError) return 'text-red-400';
    if (isValid) return 'text-emerald-400';
    if (isFocused) return 'text-blue-400';
    return 'text-gray-400 dark:text-gray-500';
  };

  const selectClasses = 
    'w-full bg-white dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200/80 dark:border-gray-700/50 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-white focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600 appearance-none cursor-pointer';

  const textareaClasses = getInputClasses('message');

  const messageLength = formData.message.length;
  const isNearLimit = messageLength > 450;

  if (submitted) {
    return (
      <div className="relative overflow-hidden">
        {/* Success animation background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-2xl" />
        <div className="relative glass-card rounded-2xl p-8 md:p-10 text-center border-2 border-emerald-500/20 animate-fadeIn">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-emerald-500/30 animate-bounce-in">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enquiry Submitted Successfully!</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md mx-auto">
            Thank you for reaching out to Manyam Foods. Our team will review your enquiry and get back to you within 24 hours.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
         
            <span>We'll be in touch soon!</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header */}


      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative group">
            <User className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 pointer-events-none transition-colors duration-300 ${getIconColor('name')}`} />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={() => handleFocus('name')}
              placeholder="John Doe"
              required
              className={getInputClasses('name')}
            />
            {touched.name && !errors.name && formData.name.length > 0 && (
              <CheckCircle className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400 pointer-events-none" />
            )}
          </div>
          {touched.name && errors.name && (
            <p className="text-xs text-red-500 mt-1 animate-slideDown">{errors.name}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative group">
            <Mail className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 pointer-events-none transition-colors duration-300 ${getIconColor('email')}`} />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={() => handleFocus('email')}
              placeholder="john@example.com"
              required
              className={getInputClasses('email')}
            />
            {touched.email && !errors.email && formData.email.length > 0 && (
              <CheckCircle className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400 pointer-events-none" />
            )}
          </div>
          {touched.email && errors.email && (
            <p className="text-xs text-red-500 mt-1 animate-slideDown">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Phone & Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative group">
            <Phone className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 pointer-events-none transition-colors duration-300 ${getIconColor('phone')}`} />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={() => handleFocus('phone')}
              placeholder="9876543210"
              required
              className={getInputClasses('phone')}
            />
            {touched.phone && !errors.phone && formData.phone.length > 0 && (
              <CheckCircle className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400 pointer-events-none" />
            )}
          </div>
          {touched.phone && errors.phone && (
            <p className="text-xs text-red-500 mt-1 animate-slideDown">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            Subject
          </label>
          <div className="relative">
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={selectClasses}
            >
              {subjectOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
          Message <span className="text-red-500">*</span>
        </label>
        <div className="relative group">
          <MessageSquare className={`absolute left-3.5 top-3.5 w-4.5 h-4.5 pointer-events-none transition-colors duration-300 ${getIconColor('message')}`} />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={() => handleFocus('message')}
            placeholder="Write your message here..."
            required
            rows={5}
            maxLength={MAX_MESSAGE_LENGTH}
            className={`${textareaClasses} pl-11 resize-none min-h-[140px]`}
          />
        </div>
        <div className="flex justify-between items-start gap-4">
          {touched.message && errors.message ? (
            <p className="text-xs text-red-500 mt-1 animate-slideDown flex-1">{errors.message}</p>
          ) : (
            <span className="flex-1" />
          )}
          <p className={`text-xs font-medium mt-1 ${isNearLimit ? 'text-red-500 dark:text-red-400' : 'text-gray-400 dark:text-gray-500'}`}>
            {messageLength}/{MAX_MESSAGE_LENGTH}
          </p>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800/50 text-red-700 dark:text-red-400 rounded-xl px-4 py-3.5 flex items-center gap-3 animate-shake">
          <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 animate-pulse" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-primary to-primary text-white font-semibold rounded-xl px-8 py-3.5 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 w-full sm:w-auto min-w-[200px] overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform duration-300" />
              Submit Enquiry
            </>
          )}
        </button>
    
      </div>
    </form>
  );
}