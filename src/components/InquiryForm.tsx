import { useState, useEffect } from "react";
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
import { Mail, Phone, MessageSquare, Send, CheckCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const apiUrl = import.meta.env.VITE_API_URL;

// Update schema to include service
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  image: z.any().optional(),
  video: z.any().optional(),
});

interface Service {
  id: number;
  service_name: string;
}

// Add this to your component props and interface
interface InquiryFormProps {
  defaultServiceId?: string;
}

const InquiryForm = ({ defaultServiceId }: InquiryFormProps) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${apiUrl}/services`);
        if (!response.ok) throw new Error("Failed to fetch services");
        const data = await response.json();
        setServices(data.data);
      } catch (error) {
        console.error("Error fetching services:", error);
        toast.error("Failed to load services. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Update the form initialization to use the default service ID if provided
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: defaultServiceId || "",
      message: "",
      image: undefined,
      video: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("full_name", values.name);
      formData.append("email", values.email);
      formData.append("phone_number", values.phone);
      formData.append("service_id", values.service);
      formData.append("message", values.message);

      if (values.image?.[0]) formData.append("image", values.image[0]);
      if (values.video?.[0]) formData.append("video", values.video[0]);

      const response = await fetch(`${apiUrl}/inquiries`, {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to submit inquiry");
      }
      
      toast.success("Inquiry sent successfully! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error instanceof Error ? error.message : "Failed to submit your inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
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

                {/* New Service Selection Field */}
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Select Service</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="pl-10 bg-white/80">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {loading ? (
                                <SelectItem value="loading" disabled>Loading services...</SelectItem>
                              ) : services.length > 0 ? (
                                services.map((service) => (
                                  <SelectItem key={service.id} value={service.id.toString()}>
                                    {service.service_name}
                                  </SelectItem>
                                ))
                              ) : (
                                <SelectItem value="none" disabled>No services available</SelectItem>
                              )}
                            </SelectContent>
                          </Select>
                          <div className="absolute left-3 top-3 text-gray-400">
                            <CheckCircle className="h-4 w-4" />
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
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Inquiry
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
