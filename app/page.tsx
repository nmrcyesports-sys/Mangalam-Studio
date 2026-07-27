"use client";
import { motion } from "framer-motion";
import { Camera, Image as ImageIcon, Users, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Home() {
  const phoneNumber = "+917050880507";
  const displayPhone = "+91 70508 80507";

  return (
    <main className="min-h-screen relative pb-16 md:pb-0">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-studio-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="font-playfair text-2xl font-bold text-studio-gold">
            Mangalam Studio
          </div>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-studio-textMuted">
            <a href="#services" className="hover:text-studio-gold transition">Services</a>
            <a href="#portfolio" className="hover:text-studio-gold transition">Portfolio</a>
            <a href="#contact" className="hover:text-studio-gold transition">Contact</a>
          </div>
          <a href={`tel:${phoneNumber}`} className="hidden md:block bg-studio-gold text-studio-black px-6 py-2 font-bold uppercase tracking-wide text-sm hover:bg-studio-goldHover transition">
            Book Now
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2000&auto=format&fit=crop" 
            alt="Wedding Photography Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-studio-black to-transparent"></div>
        </div>
        
        <div className="z-10 text-center px-4 max-w-4xl mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-7xl mb-6 text-white"
          >
            Capturing Dhanbad’s <br/><span className="text-studio-gold italic">Most Beautiful</span> Moments.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-studio-textMuted mb-10 max-w-2xl mx-auto"
          >
            From timeless wedding stories to professional studio portraits, we turn your memories into art. Located in the heart of Dhansar.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            href="#portfolio"
            className="inline-block border border-studio-gold text-studio-gold px-8 py-3 uppercase tracking-widest font-semibold hover:bg-studio-gold hover:text-studio-black transition mr-4"
          >
            View Portfolio
          </motion.a>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 bg-studio-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl text-studio-gold mb-4">Our Services</h2>
            <p className="text-studio-textMuted max-w-2xl mx-auto">Premium photography and printing services tailored to your needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-studio-charcoal p-8 hover:-translate-y-2 transition duration-300 border border-white/5 hover:border-studio-gold/30">
              <Camera className="text-studio-gold w-12 h-12 mb-6" />
              <h3 className="font-playfair text-2xl mb-3">Wedding & Events</h3>
              <p className="text-studio-textMuted text-sm leading-relaxed">Cinematic wedding coverage, pre-wedding shoots, and grand event photography across Jharkhand.</p>
            </div>
            {/* Service 2 */}
            <div className="bg-studio-charcoal p-8 hover:-translate-y-2 transition duration-300 border border-white/5 hover:border-studio-gold/30">
              <Users className="text-studio-gold w-12 h-12 mb-6" />
              <h3 className="font-playfair text-2xl mb-3">Studio Portraits</h3>
              <p className="text-studio-textMuted text-sm leading-relaxed">Professional headshots, family portraits, and instant passport-size photos with perfect lighting.</p>
            </div>
            {/* Service 3 */}
            <div className="bg-studio-charcoal p-8 hover:-translate-y-2 transition duration-300 border border-white/5 hover:border-studio-gold/30">
              <ImageIcon className="text-studio-gold w-12 h-12 mb-6" />
              <h3 className="font-playfair text-2xl mb-3">Album & Printing</h3>
              <p className="text-studio-textMuted text-sm leading-relaxed">High-quality photo printing, custom mug prints, and luxurious photobook album designs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO GALLERY --- */}
      <section id="portfolio" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl text-studio-gold mb-4">Selected Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="overflow-hidden bg-studio-charcoal aspect-square">
              <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80" alt="Wedding" className="w-full h-full object-cover hover:scale-110 transition duration-500 cursor-pointer opacity-80 hover:opacity-100" />
            </div>
            <div className="overflow-hidden bg-studio-charcoal aspect-square">
              <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80" alt="Portrait" className="w-full h-full object-cover hover:scale-110 transition duration-500 cursor-pointer opacity-80 hover:opacity-100" />
            </div>
            <div className="overflow-hidden bg-studio-charcoal aspect-square">
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80" alt="Event" className="w-full h-full object-cover hover:scale-110 transition duration-500 cursor-pointer opacity-80 hover:opacity-100" />
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-studio-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <div>
              <h2 className="font-playfair text-4xl text-studio-gold mb-6">Let's Talk</h2>
              <p className="text-studio-textMuted mb-8">Ready to frame your story? Visit our studio opposite Raj Clinic or drop us a message to check our availability.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-studio-gold w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Studio Address</h4>
                    <p className="text-studio-textMuted text-sm">Joraphatak Road, Opposite Raj Clinic<br/>Dhansar, Dhanbad, Jharkhand 826007</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-studio-gold w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Phone / WhatsApp</h4>
                    <p className="text-studio-textMuted text-sm">{displayPhone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-studio-charcoal p-8 border border-white/10">
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-studio-black border border-white/20 p-3 text-white focus:border-studio-gold outline-none transition" />
                <input type="text" placeholder="Phone Number" className="w-full bg-studio-black border border-white/20 p-3 text-white focus:border-studio-gold outline-none transition" />
                <textarea placeholder="Event Details or Query" rows={4} className="w-full bg-studio-black border border-white/20 p-3 text-white focus:border-studio-gold outline-none transition"></textarea>
                
                <p className="text-xs text-studio-textMuted mb-4">
                  * Note: Advance payments for booking dates can easily be made via Paytm at the studio or online.
                </p>

                <button type="button" className="w-full bg-studio-gold text-studio-black font-bold uppercase tracking-widest py-3 hover:bg-studio-goldHover transition">
                  Send Inquiry
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0a0a0a] py-8 border-t border-white/10 text-center">
        <p className="text-studio-textMuted text-sm">
          &copy; {new Date().getFullYear()} Mangalam Studio Dhanbad. All rights reserved.
        </p>
      </footer>

      {/* --- MOBILE STICKY BOTTOM BAR --- */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-studio-charcoal border-t border-white/10 flex z-50">
        <a href={`tel:${phoneNumber}`} className="flex-1 flex justify-center items-center py-4 bg-studio-gold text-studio-black font-bold uppercase text-sm">
          <Phone className="w-5 h-5 mr-2" /> Call Now
        </a>
        <a href={`https://wa.me/917050880507`} className="flex-1 flex justify-center items-center py-4 text-white hover:text-green-400 uppercase text-sm font-bold bg-[#1E1E1E]">
          <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
        </a>
      </div>

    </main>
  );
}

