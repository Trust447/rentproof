import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mockProperties } from '@/lib/mockData';
import { 
  Shield, 
  CheckCircle, 
  Lock, 
  Search, 
  Star, 
  Users, 
  ArrowRight,
  Building,
  BadgeCheck,
  Wallet
} from 'lucide-react';

const Landing = () => {
  const featuredProperties = mockProperties.filter(p => p.isVerified).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 opacity-50 bg-black" />
        
        <div className="container-main relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground">
              <Shield className="h-4 w-4" />
              #1 Verified Rental Platform
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl animate-fade-in">
              Rent with{' '}
              <span className="relative">
                Confidence
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="hsl(160, 65%, 40%)" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="mb-10 text-lg text-primary-foreground/80 sm:text-xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Find verified properties and trusted agents in Lagos. Every listing is verified, 
              every payment is protected. Say goodbye to rental scams.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/listings">
                <Button variant="hero" size="xl" className="gap-2">
                  Browse Properties
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/auth?mode=signup&type=agent">
                <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  List Your Property
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b border-border bg-card py-8">
        <div className="container-main">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-verified-bg">
                <CheckCircle className="h-6 w-6 text-verified" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Verified Listings</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-verified-bg">
                <Users className="h-6 w-6 text-verified" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">150+</p>
                <p className="text-sm text-muted-foreground">Trusted Agents</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-verified-bg">
                <Star className="h-6 w-6 text-verified" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">4.8</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-verified-bg">
                <Lock className="h-6 w-6 text-verified" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Secure Payments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container-main">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              How RentProof Works
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We've simplified the rental process to protect you at every step
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border bg-card text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">1. Search & Discover</h3>
                <p className="text-muted-foreground">
                  Browse verified listings with real photos, accurate descriptions, and transparent pricing
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-verified/10">
                  <BadgeCheck className="h-8 w-8 text-verified" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">2. Verify & Connect</h3>
                <p className="text-muted-foreground">
                  Every agent is verified. View their reputation scores and connect with confidence
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card text-center">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-warning/10">
                  <Wallet className="h-8 w-8 text-warning" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">3. Pay Securely</h3>
                <p className="text-muted-foreground">
                  Your payment is held in escrow until you confirm move-in. Full protection, zero risk
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="bg-muted py-20">
        <div className="container-main">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
                Featured Verified Properties
              </h2>
              <p className="text-lg text-muted-foreground">
                Hand-picked listings verified by our team
              </p>
            </div>
            <Link to="/listings">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                Why Lagos Renters Trust RentProof
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                We've helped thousands of people find safe, verified rentals in Lagos. 
                Here's what makes us different:
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-verified-bg">
                    <CheckCircle className="h-5 w-5 text-verified" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Physical Verification</h3>
                    <p className="text-muted-foreground">
                      Our team physically inspects every property before listing
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-verified-bg">
                    <Shield className="h-5 w-5 text-verified" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Agent Background Checks</h3>
                    <p className="text-muted-foreground">
                      All agents undergo identity verification and reference checks
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-verified-bg">
                    <Lock className="h-5 w-5 text-verified" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Escrow Protection</h3>
                    <p className="text-muted-foreground">
                      Your money is protected until you confirm everything is as promised
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-verified-bg">
                    <Building className="h-5 w-5 text-verified" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Dispute Resolution</h3>
                    <p className="text-muted-foreground">
                      Dedicated support team to help resolve any issues
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-verified/20 blur-3xl" />
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-xl">
                <div className="mb-6 flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                    alt="Customer"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">Oluwaseun Adeleke</p>
                    <p className="text-sm text-muted-foreground">Tech Professional, Lagos</p>
                  </div>
                </div>
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-lg text-foreground">
                  "After being scammed twice by fake agents, I found RentProof. The verification 
                  badge gave me peace of mind, and the escrow payment meant my money was safe. 
                  Found my perfect apartment in Lekki within a week!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero py-20">
        <div className="container-main text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to Find Your Perfect Rental?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            Join thousands of Lagos residents who have found safe, verified rentals through RentProof
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/listings">
              <Button variant="hero" size="xl" className="gap-2">
                Start Searching
                <Search className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/auth?mode=signup&type=agent">
              <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                List Your Property
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
