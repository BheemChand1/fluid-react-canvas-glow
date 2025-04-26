
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";

// 1. Update schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  image: z.any().optional(), // File input doesn't validate via Zod directly
  video: z.any().optional(),
});


const InquiryForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      image: undefined,
      video: undefined,
    },
  });

 // 3. Update onSubmit handler
const onSubmit = async (values: z.infer<typeof formSchema>) => {
  const formData = new FormData();
  formData.append("name", values.name);
  formData.append("email", values.email);
  formData.append("phone", values.phone);
  formData.append("message", values.message);

  if (values.image?.[0]) formData.append("image", values.image[0]);
  if (values.video?.[0]) formData.append("video", values.video[0]);

  // Here you would send formData to your backend with fetch or axios

  toast.success("Thank you for your inquiry! We'll get back to you soon.");
  form.reset();
};


  return (
    <div className="py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our roofing services? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Full Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            placeholder="John Doe" 
                            className="pl-10 bg-white/80"
                            {...field} 
                          />
                          <div className="absolute left-3 top-3 text-gray-400">
                            <Mail className="h-4 w-4" />
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            placeholder="john@example.com" 
                            className="pl-10 bg-white/80"
                            {...field} 
                          />
                          <div className="absolute left-3 top-3 text-gray-400">
                            <Mail className="h-4 w-4" />
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Phone Number</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            placeholder="+44 1234 567890" 
                            className="pl-10 bg-white/80"
                            {...field} 
                          />
                          <div className="absolute left-3 top-3 text-gray-400">
                            <Phone className="h-4 w-4" />
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel className="text-gray-700">Your Message</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Textarea 
                            placeholder="Tell us about your roofing needs..." 
                            className="pl-10 min-h-[120px] bg-white/80"
                            {...field} 
                          />
                          <div className="absolute left-3 top-3 text-gray-400">
                            <MessageSquare className="h-4 w-4" />
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Upload Image</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => field.onChange(e.target.files)}
                            className="bg-white/80"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="video"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700">Upload Video</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept="video/*"
                            onChange={(e) => field.onChange(e.target.files)}
                            className="bg-white/80"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Inquiry
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
