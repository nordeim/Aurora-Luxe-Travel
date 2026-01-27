"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { ChipGroup } from "@/components/ui/ChipGroup";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  travelType: string;
  interests: string[];
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  travelType?: string;
  interests?: string;
  message?: string;
}

const travelTypeOptions = [
  { value: "", label: "Select travel type" },
  { value: "destination", label: "Destination Inquiry" },
  { value: "experience", label: "Experience Booking" },
  { value: "membership", label: "Membership Information" },
  { value: "custom", label: "Custom Itinerary" },
];

const interestOptions = [
  { value: "luxury-resorts", label: "Luxury Resorts" },
  { value: "private-jets", label: "Private Jets" },
  { value: "yacht-charters", label: "Yacht Charters" },
  { value: "culinary", label: "Culinary Experiences" },
  { value: "adventure", label: "Adventure Travel" },
  { value: "wellness", label: "Wellness Retreats" },
];

export function ConciergeForm() {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    travelType: "",
    interests: [],
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.travelType) {
      newErrors.travelType = "Please select a travel type";
    }

    if (formData.interests.length === 0) {
      newErrors.interests = "Please select at least one interest";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowToast(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      travelType: "",
      interests: [],
      message: "",
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Speak with a Curator"
          subtitle="Let us craft your perfect journey"
          className="mb-16"
        />

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <GlassPanel>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  error={errors.name}
                  placeholder="John Doe"
                />

                <Input
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  error={errors.phone}
                  placeholder="+1 (555) 000-0000"
                />

                <Select
                  label="Travel Type"
                  options={travelTypeOptions}
                  value={formData.travelType}
                  onChange={(e) => setFormData({ ...formData, travelType: e.target.value })}
                  error={errors.travelType}
                />
              </div>

              <ChipGroup
                label="Interests"
                options={interestOptions}
                selected={formData.interests}
                onChange={(interests) => setFormData({ ...formData, interests })}
                error={errors.interests}
              />

              <Textarea
                label="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                error={errors.message}
                placeholder="Tell us about your dream journey..."
                rows={6}
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </GlassPanel>
        </motion.div>
      </div>

      <Toast
        message="Thank you! We'll be in touch within 24 hours."
        type="success"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
}
