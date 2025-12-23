import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Search, BadgeCheck, Wallet, Shield, CheckCircle, Lock, Users, Building, ArrowRight
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Search Verified Listings',
      description: 'Browse our curated selection of verified properties. Every listing has been physically inspected and the photos are guaranteed to be accurate.',
      icon: Search,
      color: 'bg-primary/10 text-primary',
    },
    {
      number: '02',
      title: 'Connect with Verified Agents',
      description: 'All agents on RentProof undergo thorough background checks. View their ratings, reviews, and response rates before reaching out.',
      icon: BadgeCheck,
      color: 'bg-verified/10 text-verified',
    },
    {
      number: '03',
      title: 'Book with Escrow Protection',
      description: 'When you are ready, reserve the property through our secure escrow system. Your money is protected until you confirm everything is as promised.',
      icon: Wallet,
      color: 'bg-warning/10 text-warning',
    },
    {
      number: '04',
      title: 'Move In with Confidence',
      description: 'Inspect the property, confirm it matches the listing, and release the payment. If there are any issues, our support team is here to help.',
      icon: Shield,
      color: 'bg-primary/10 text-primary',
    },
  ];

  const benefits = [
    {
      title: 'Physical Verification',
      description: 'Our team visits every property before it goes live. What you see is what you get.',
      icon: Building,
    },
    {
      title: 'Agent Background Checks',
      description: 'Every agent is verified with ID, references, and professional credentials.',
      icon: Users,
    },
    {
      title: 'Escrow Protection',
      description: 'Your payment is held securely until you confirm the property meets expectations.',
      icon: Lock,
    },
    {
      title: 'Dispute Resolution',
      description: 'Our dedicated support team helps resolve any issues quickly and fairly.',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="gradient-hero py-20">
        <div className="container-main text-center">
          <h1 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
            How RentProof Works
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            We have reimagined the rental experience in Lagos. Here is how we keep you safe at every step.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-main">
          <div className="grid gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="mb-4 text-5xl font-bold text-muted-foreground/20">{step.number}</div>
                  <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">{step.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                <div className="flex items-center justify-center lg:w-1/2">
                  <div className={`flex h-40 w-40 items-center justify-center rounded-3xl ${step.color}`}>
                    <step.icon className="h-20 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container-main">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Why RentProof is Different
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We do not just list properties - we verify everything to protect you from scams.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-verified-bg">
                    <benefit.icon className="h-7 w-7 text-verified" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-hero py-20">
        <div className="container-main text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to Find Your Home?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            Join thousands of Lagos residents who have found safe, verified rentals through RentProof
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/listings">
              <Button variant="hero" size="xl" className="gap-2">
                Browse Properties
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/auth?mode=signup">
              <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
