import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mockAgents, mockProperties } from '@/lib/mockData';
import {
  ArrowLeft, CheckCircle, Star, Phone, Mail, Calendar, Home, Clock, MessageSquare
} from 'lucide-react';

const AgentProfile = () => {
  const { id } = useParams();
  const agent = mockAgents.find(a => a.id === id);
  const agentProperties = mockProperties.filter(p => p.agent.id === id);

  if (!agent) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container-main py-20 text-center">
          <h1 className="mb-4 text-2xl font-bold text-foreground">Agent not found</h1>
          <Link to="/agents">
            <Button variant="outline">Back to Agents</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container-main py-8">
        {/* Back Button */}
        <Link to="/agents" className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to agents
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Agent Info Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-border bg-card">
              <CardContent className="p-6">
                {/* Avatar & Basic Info */}
                <div className="mb-6 text-center">
                  <div className="relative mx-auto mb-4 inline-block">
                    <img
                      src={agent.avatar}
                      alt={agent.name}
                      className="h-24 w-24 rounded-full object-cover"
                    />
                    {agent.isVerified && (
                      <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-verified">
                        <CheckCircle className="h-5 w-5 text-accent-foreground" />
                      </div>
                    )}
                  </div>
                  <h1 className="mb-1 text-xl font-bold text-foreground">{agent.name}</h1>
                  {agent.isVerified && (
                    <span className="badge-verified">
                      <CheckCircle className="h-3.5 w-3.5" />
                      Verified Agent
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="mb-6 flex items-center justify-center gap-2">
                  <Star className="h-5 w-5 fill-warning text-warning" />
                  <span className="text-xl font-bold text-foreground">{agent.rating}</span>
                  <span className="text-muted-foreground">({agent.reviews} reviews)</span>
                </div>

                {/* Stats */}
                <div className="mb-6 grid grid-cols-3 gap-4 rounded-xl bg-muted p-4">
                  <div className="text-center">
                    <Home className="mx-auto mb-1 h-5 w-5 text-muted-foreground" />
                    <p className="text-lg font-bold text-foreground">{agent.properties}</p>
                    <p className="text-xs text-muted-foreground">Listings</p>
                  </div>
                  <div className="text-center">
                    <Clock className="mx-auto mb-1 h-5 w-5 text-muted-foreground" />
                    <p className="text-lg font-bold text-foreground">{agent.responseRate}%</p>
                    <p className="text-xs text-muted-foreground">Response</p>
                  </div>
                  <div className="text-center">
                    <Calendar className="mx-auto mb-1 h-5 w-5 text-muted-foreground" />
                    <p className="text-lg font-bold text-foreground">{agent.memberSince}</p>
                    <p className="text-xs text-muted-foreground">Member</p>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-3">
                  <a href={`tel:${agent.phone}`} className="block">
                    <Button variant="default" className="w-full gap-2" size="lg">
                      <Phone className="h-4 w-4" />
                      Call Agent
                    </Button>
                  </a>
                  <a href={`mailto:${agent.email}`} className="block">
                    <Button variant="outline" className="w-full gap-2" size="lg">
                      <Mail className="h-4 w-4" />
                      Send Email
                    </Button>
                  </a>
                  <Button variant="secondary" className="w-full gap-2" size="lg">
                    <MessageSquare className="h-4 w-4" />
                    Send Message
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="mt-6 space-y-3 border-t border-border pt-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{agent.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* About Section */}
            <div className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-foreground">About {agent.name}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {agent.name} is a {agent.isVerified ? 'verified' : ''} real estate agent with{' '}
                {agent.properties} active listings in Lagos. They have been a member of RentProof since{' '}
                {agent.memberSince} and maintain a {agent.responseRate}% response rate to inquiries.
              </p>
            </div>

            {/* Listings Section */}
            <div>
              <h2 className="mb-6 text-xl font-semibold text-foreground">
                Properties by {agent.name} ({agentProperties.length})
              </h2>
              
              {agentProperties.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2">
                  {agentProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl bg-muted p-8 text-center">
                  <p className="text-muted-foreground">No active listings at the moment</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AgentProfile;
