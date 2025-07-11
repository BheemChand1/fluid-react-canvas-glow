import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
const apiUrl = import.meta.env.VITE_API_URL;

const FooterInquiry = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.full_name || !formData.email || !formData.phone_number || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    
    try {
      setLoading(true);
      
      const response = await fetch(`${apiUrl}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }
      
      toast.success("Thank you for your message. We'll be in touch soon!");
      setFormData({
        full_name: '',
        email: '',
        phone_number: '',
        message: ''
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error instanceof Error ? error.message : "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <Send className="h-5 w-5 text-amber-400" />
        Send Inquiry
      </h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input 
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="Your Name" 
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
        />
        <Input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange} 
          placeholder="Your Email" 
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
        />
        <Input 
          type="tel"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange} 
          placeholder="Your Phone Number" 
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
        />
        <Textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message" 
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
        />
        <Button 
          type="submit"
          disabled={loading}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
    </div>
  );
};

export default FooterInquiry;
