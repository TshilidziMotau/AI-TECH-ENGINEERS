"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const services = [
  "Drone Mapping",
  "Drone Surveying",
  "LiDAR Scanning",
  "Hydrology Studies",
  "Structural Design",
  "Inspections & Progress Monitoring",
  "Road Design Support",
  "Quantity Surveying (QS)",
];

const quoteSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  companyName: z.string().min(2, "Enter company name"),
  phone: z.string().min(7, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  projectLocation: z.string().min(3, "Project location is required"),
  serviceNeeded: z.string().min(2, "Select a service"),
  scope: z.string().min(20, "Please provide at least 20 characters"),
  siteSize: z.string().min(1, "Site size is required"),
  turnaround: z.string().min(2, "Specify preferred turnaround"),
});

type QuoteValues = z.infer<typeof quoteSchema>;

type InquiryResponse = {
  success: boolean;
  notifyTo?: string;
};

export function QuoteForm() {
  const [success, setSuccess] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteValues>();

  const onSubmit = async (values: QuoteValues) => {
    setServerError(null);
    const parsed = quoteSchema.safeParse(values);

    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof QuoteValues;
        setError(field, { message: issue.message });
      });
      return;
    }

    const payload = { ...parsed.data, submittedAt: new Date().toISOString() };
    const res = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      setServerError("Submission failed. Please try again or contact us directly.");
      return;
    }

    const json = (await res.json()) as InquiryResponse;
    if (json.notifyTo) {
      const subject = encodeURIComponent(`Quote request from ${payload.fullName}`);
      const body = encodeURIComponent(
        `Name: ${payload.fullName}\nCompany: ${payload.companyName}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nLocation: ${payload.projectLocation}\nService: ${payload.serviceNeeded}\nScope: ${payload.scope}\nSite Size: ${payload.siteSize}\nTurnaround: ${payload.turnaround}`,
      );
      window.open(`mailto:${json.notifyTo}?subject=${subject}&body=${body}`, "_blank");
    }

    setSuccess("Your project inquiry has been received and prepared for email delivery.");
    reset();
  };

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-card p-6 backdrop-blur-xl md:p-8">
      {success && <div className="mb-5 rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm text-accent">{success}</div>}
      {serverError && <div className="mb-5 rounded-xl border border-rose-400/40 bg-rose-500/10 p-4 text-sm text-rose-300">{serverError}</div>}
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 md:grid-cols-2">
        {[
          ["fullName", "Full Name"],
          ["companyName", "Company Name"],
          ["phone", "Phone Number"],
          ["email", "Email Address"],
          ["projectLocation", "Project Location"],
          ["siteSize", "Estimated Site Size / Area"],
          ["turnaround", "Preferred Turnaround Time"],
        ].map(([name, label]) => (
          <label key={name} className="text-sm text-muted">
            {label}
            <input {...register(name as keyof QuoteValues)} className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 p-3 text-foreground outline-none ring-accent/40 focus:ring" />
            <span className="text-xs text-rose-300">{errors[name as keyof QuoteValues]?.message as string | undefined}</span>
          </label>
        ))}

        <label className="text-sm text-muted">
          Service Needed
          <select {...register("serviceNeeded")} className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 p-3 text-foreground outline-none ring-accent/40 focus:ring">
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <span className="text-xs text-rose-300">{errors.serviceNeeded?.message}</span>
        </label>

        <label className="text-sm text-muted">
          Optional File Upload
          <input type="file" className="mt-1 w-full rounded-xl border border-dashed border-white/20 bg-slate-950/60 p-3 text-foreground" />
        </label>

        <label className="text-sm text-muted md:col-span-2">
          Brief Scope of Works
          <textarea {...register("scope")} rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 p-3 text-foreground outline-none ring-accent/40 focus:ring" />
          <span className="text-xs text-rose-300">{errors.scope?.message}</span>
        </label>

        <div className="md:col-span-2">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting inquiry..." : "Submit Quotation Request"}
          </Button>
        </div>
      </form>
    </div>
  );
}
