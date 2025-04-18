
import { Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const FooterInquiry = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <Send className="h-5 w-5 text-amber-400" />
        Send Inquiry
      </h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input 
          type="email" 
          placeholder="Your Email" 
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
        />
        <Textarea 
          placeholder="Your Message" 
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
        />
        <Button 
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default FooterInquiry;
