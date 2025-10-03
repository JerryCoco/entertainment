import { Film, Music, Gamepad2, Tv, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerLinks = {
    Entertainment: [
      { name: "Movies", href: "#movies" },
      { name: "TV Shows", href: "#tv" },
      { name: "Music", href: "#music" },
      { name: "Gaming", href: "#gaming" }
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
      { name: "Contact", href: "#contact" }
    ],
    Support: [
      { name: "Help Center", href: "#help" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#facebook" },
    { name: "Twitter", icon: Twitter, href: "#twitter" },
    { name: "Instagram", icon: Instagram, href: "#instagram" },
    { name: "YouTube", icon: Youtube, href: "#youtube" }
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-primary flex items-center justify-center">
                <Film className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold gradient-text">EntertainHub</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your ultimate destination for entertainment news, reviews, and insights across movies, TV, music, gaming, and celebrity culture.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background/50 border-border/50"
                />
                <Button size="sm" className="hero-gradient">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-semibold text-foreground">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10 hover:text-primary"
                      asChild
                    >
                      <a href={social.href} aria-label={social.name}>
                        <IconComponent className="h-4 w-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>&copy; 2024 EntertainHub. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;