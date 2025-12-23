import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Shield, User, LogOut } from 'lucide-react';

interface NavbarProps {
  isLoggedIn?: boolean;
  userType?: 'tenant' | 'agent';
  onLogout?: () => void;
}

const Navbar = ({ isLoggedIn = false, userType, onLogout }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout?.();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container-main">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <div className="flex h-32 w-32 items-center justify-center">
              <img src="/Rentproof.png" alt="Rentproof logo" className=""/>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <Link to="/listings" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Browse Listings
            </Link>
            <Link to="/agents" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Verified Agents
            </Link>
            <Link to="/how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              How It Works
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            {isLoggedIn ? (
              <>
                {userType === 'agent' && (
                  <Link to="/dashboard">
                    <Button variant="ghost" size="sm">
                      Dashboard
                    </Button>
                  </Link>
                )}
                <Button variant="ghost" size="sm" className="gap-2" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="ghost" size="sm">
                    Log in
                  </Button>
                </Link>
                <Link to="/auth?mode=signup">
                  <Button size="sm">Get Started</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-4 pt-8">
                <Link 
                  to="/listings" 
                  className="text-lg font-medium text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Browse Listings
                </Link>
                <Link 
                  to="/agents" 
                  className="text-lg font-medium text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Verified Agents
                </Link>
                <Link 
                  to="/how-it-works" 
                  className="text-lg font-medium text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  How It Works
                </Link>
                
                <div className="my-4 h-px bg-border" />
                
                {isLoggedIn ? (
                  <>
                    {userType === 'agent' && (
                      <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                        <Button variant="outline" className="w-full">
                          Dashboard
                        </Button>
                      </Link>
                    )}
                    <Button variant="ghost" className="w-full justify-start gap-2" onClick={handleLogout}>
                      <LogOut className="h-4 w-4" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/auth" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">
                        Log in
                      </Button>
                    </Link>
                    <Link to="/auth?mode=signup" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
