import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-white text-[#0A2F66] py-16 px-4 md:px-20 min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold tracking-wide">GET IN TOUCH</h2>

        <div className="mt-6 space-y-2 text-sm text-gray-600">
          <p className="flex justify-center items-center gap-2">
            <Phone size={16} /> Phone: +2 (02) 2737 6756
          </p>
          <p className="flex justify-center items-center gap-2">
            <Mail size={16} /> Email:{" "}
            <a
              href="mailto:support@aimockinterview.com"
              className="text-blue-600 underline"
            >
              support@aimockinterview.com
            </a>
          </p>
          <p className="flex justify-center items-center gap-2 text-center px-4">
            <MapPin size={16} /> Address: 123 AI Street, Tech City, 12345
          </p>
        </div>
      </div>

      {/* Contact Form Card */}
      <div className="bg-white border border-blue-100 text-[#0A2F66] rounded-xl shadow-md max-w-5xl mx-auto p-10">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input placeholder="YOUR NAME *" className="border-blue-300 focus:ring-blue-500" />
          <Textarea
            placeholder="YOUR MESSAGE *"
            className="md:row-span-3 border-blue-300 focus:ring-blue-500"
          />
          <Input placeholder="YOUR EMAIL *" className="border-blue-300 focus:ring-blue-500" />
          <Input placeholder="PHONE *" className="border-blue-300 focus:ring-blue-500" />
          <div className="md:col-span-2 flex justify-center">
            <Button
              type="submit"
              className="bg-[#007BFF] hover:bg-blue-700 px-10 text-white text-lg mt-4 transition"
            >
              SEND MESSAGE
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
