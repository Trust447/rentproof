import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-main py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-38 w-38 items-center justify-center">
                <img src="/Rentproof.png" alt="" />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Nigeria's trusted rental verification platform. Find verified properties and agents in Lagos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/listings" className="text-sm text-muted-foreground hover:text-foreground">
                  Browse Listings
                </Link>
              </li>
              <li>
                <Link to="/agents" className="text-sm text-muted-foreground hover:text-foreground">
                  Verified Agents
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/auth?mode=signup&type=agent" className="text-sm text-muted-foreground hover:text-foreground">
                  List Your Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Safety Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                support@rentproof.ng
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                +234 814 833 1104
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} RentProof. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Powered by Trusted Ideas
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Facebook
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Twitter
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
