"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

// Zod schema for form validation
const formSchema = z.object({
  applicantName: z.string().min(2, "Applicant name must be at least 2 characters"),
  fatherName: z.string().min(2, "Father's name must be at least 2 characters"),
  motherName: z.string().optional(),
  husbandName: z.string().optional(),
  gender: z.enum(["MALE", "FEMALE", "THIRD_GENDER"]),
  mobileNumber: z.string().min(10, "Mobile number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  state: z.string().min(1, "State is required"),
  district: z.string().min(1, "District is required"),
  subDivision: z.string().min(1, "Sub-division is required"),
  block: z.string().min(1, "Block is required"),
  wardNo: z.string().min(1, "Ward number is required"),
  villageTown: z.string().min(1, "Village or Town is required"),
  postOffice: z.string().min(1, "Post Office is required"),
  policeStation: z.string().min(1, "Police Station is required"),
  pinCode: z.string().min(6, "Pincode must be 6 digits"),
  aadhaarNumber: z.string().min(12, "Aadhaar number must be 12 digits"),
  residenceType: z.string().min(1, "Residence type is required"),
  purpose: z.string().min(10, "Purpose must be at least 10 characters"),
  selfDeclaration: z.string().min(10, "Self Declaration must be at least 10 characters"),
  expiryDate: z.string().optional(),
  status: z.enum(["PENDING", "APPROVED", "REJECTED", "EXPIRED"]),
});

const genderOptions = ["MALE", "FEMALE", "THIRD_GENDER"];
const statusOptions = ["PENDING", "APPROVED", "REJECTED", "EXPIRED"];

export default function CasteCertificateForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      applicantName: "",
      fatherName: "",
      motherName: "",
      husbandName: "",
      gender: "MALE",
      mobileNumber: "",
      email: "",
      state: "",
      district: "",
      subDivision: "",
      block: "",
      wardNo: "",
      villageTown: "",
      postOffice: "",
      policeStation: "",
      pinCode: "",
      aadhaarNumber: "",
      residenceType: "",
      purpose: "",
      selfDeclaration: "",
      expiryDate: "",
      status: "PENDING",
    },
  });

  // Submit the form data
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const response = await fetch("/api/caste", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Certificate Created",
          description: `Certificate Number: ${data.certificate.certificateNumber}`,
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to create certificate",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

        <FormField
          control={form.control}
          name="applicantName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Applicant Name</FormLabel>
              <Input placeholder="Enter applicant's name" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fatherName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fathers Name</FormLabel>
              <Input placeholder="Enter father's name" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="motherName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mothers Name</FormLabel>
              <Input placeholder="Enter mother's name" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="husbandName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Husbands Name</FormLabel>
              <Input placeholder="Enter husband's name (optional)" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  {genderOptions.map((gender) => (
                    <SelectItem key={gender} value={gender}>
                      {gender}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mobileNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number</FormLabel>
              <Input placeholder="Enter mobile number" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Enter email address" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Add similar fields for state, district, subDivision, block, etc. */}

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select certificate status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={loading} size="lg">
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}