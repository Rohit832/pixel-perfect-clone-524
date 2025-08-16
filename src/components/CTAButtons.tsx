import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const CTAButtons: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleDownload = async () => {
    setIsDownloading(true);
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
      toast({
        title: "Download Started",
        description: "Your HR deck is being downloaded.",
      });
    }, 1000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pilot Request Submitted",
      description: "We'll contact you within 24 hours to schedule your pilot.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="flex gap-[11px] items-center max-md:flex-col max-md:gap-4 max-md:w-full max-md:max-w-[400px]" aria-label="Call to action buttons">
      <Button
        onClick={handleDownload}
        disabled={isDownloading}
        className="flex w-[331px] h-[63px] flex-col justify-center items-center gap-[8.283px] shrink-0 cursor-pointer px-[14.909px] py-[6.626px] rounded-[41.413px] max-md:w-full max-sm:h-14 bg-[#357369] hover:bg-[#2E564E] text-white"
      >
        <span className="text-white text-center text-xl font-bold tracking-[0.795px] max-sm:text-lg">
          {isDownloading ? 'Downloading...' : 'Download our HR deck'}
        </span>
      </Button>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="flex w-[331px] h-[63px] flex-col justify-center items-center gap-[8.283px] shrink-0 border cursor-pointer bg-white px-[14.909px] py-[6.626px] rounded-[41.413px] border-solid border-black max-md:w-full max-sm:h-14 hover:bg-gray-50"
          >
            <span className="text-black text-center text-xl font-bold tracking-[0.794px] max-sm:text-lg">
              Book a Pilot Now
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Book Your Pilot Session</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll contact you within 24 hours to schedule your pilot session.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name *</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Enter your company name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Additional Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your specific needs or questions"
                rows={3}
              />
            </div>
            <Button type="submit" className="w-full bg-[#357369] hover:bg-[#2E564E]">
              Submit Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTAButtons;
