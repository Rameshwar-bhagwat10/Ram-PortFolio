'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface ContactFormData {
  message: string;
  name: string;
  email: string;
}

interface ContactFormProps {
  onClose?: () => void;
}

export default function ContactForm({ onClose }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Form submitted:', data);

    setIsSubmitting(false);
    setIsSuccess(true);

    // Close modal and reset after 2 seconds
    setTimeout(() => {
      setIsSuccess(false);
      reset();
      if (onClose) {
        onClose();
      }
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Textarea */}
      <div>
        <textarea
          {...register('message', { required: 'Please enter your message' })}
          placeholder="Your message..."
          rows={5}
          className="w-full rounded-xl bg-[#141414] border border-white/10 p-4 text-white placeholder-white/40 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all resize-none"
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl bg-[#141414] border border-white/10 p-3 text-white placeholder-white/40 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            type="email"
            placeholder="Your email"
            className="w-full rounded-xl bg-[#141414] border border-white/10 p-3 text-white placeholder-white/40 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting || isSuccess}
        whileHover={{ scale: isSuccess ? 1 : 1.02 }}
        whileTap={{ scale: isSuccess ? 1 : 0.98 }}
        className={`
          w-auto min-w-[200px] mx-auto block mt-6 px-8 py-4 rounded-full font-semibold text-black
          transition-all duration-300 relative overflow-hidden
          ${
            isSuccess
              ? 'bg-green-500'
              : 'bg-primary-gradient hover:brightness-110'
          }
        `}
        style={{
          boxShadow: isSuccess
            ? '0 0 20px rgba(34, 197, 94, 0.3)'
            : '0 0 20px rgba(255, 140, 0, 0.3)',
        }}
      >
        {isSuccess ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            Message Sent Successfully
          </span>
        ) : isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </motion.button>
    </form>
  );
}
