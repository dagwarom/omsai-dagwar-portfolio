import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

/**
 * Contact form component with validation and error handling
 * Uses Formspree React for submission handling and success state
 */
export function ContactForm() {
  const [projectType, setProjectType] = useState('commercial');
  const [state, handleSubmit] = useForm('meenzooe');

  // Show success message
  if (state.succeeded) {
    return (
      <motion.div
        className="bg-accent border border-border rounded-sm p-8 text-center space-y-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <CheckCircle2 className="size-16 mx-auto text-green-600 dark:text-green-400" />
        </motion.div>
        <h3 className="text-2xl font-light tracking-wide">Message Sent!</h3>
        <p className="text-muted-foreground font-light leading-relaxed">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-light tracking-wide">
          Name
        </label>
        <Input id="name" name="name" placeholder="Your full name" className="font-light" required minLength={2} maxLength={100} />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-light tracking-wide">
          Email
        </label>
        <Input id="email" type="email" name="email" placeholder="your.email@example.com" className="font-light" required maxLength={255} />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Project Type */}
      <div className="space-y-2">
        <label htmlFor="projectType" className="text-sm font-light tracking-wide">
          Purpose of Contact
        </label>
        <select
          id="projectType"
          name="projectType"
          value={projectType}
          onChange={(event) => setProjectType(event.target.value)}
          className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-light ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          required
        >
          <option value="commercial">Commercial</option>
          <option value="editorial">Editorial</option>
          <option value="personal">Personal</option>
        </select>
      </div>

      {/* Message Textarea */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-light tracking-wide">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me how I can assist you..."
          className="min-h-32 font-light resize-none"
          required
          minLength={10}
          maxLength={1000}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <ValidationError errors={state.errors} />

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full py-6 text-base font-light tracking-wide"
        disabled={state.submitting}
      >
        {state.submitting ? (
          <>
            <Loader2 className="mr-2 size-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}
