import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AgentCard from '@/components/AgentCard';
import { Button } from '@/components/ui/button';
import { mockAgents } from '@/lib/mockData';
import { CheckCircle } from 'lucide-react';

const Agents = () => {
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);

  const filteredAgents = showVerifiedOnly 
    ? mockAgents.filter(a => a.isVerified) 
    : mockAgents;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container-main py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
            Verified Agents
          </h1>
          <p className="text-lg text-muted-foreground">
            Connect with trusted, verified real estate agents in Lagos
          </p>
        </div>

        {/* Filter */}
        <div className="mb-8">
          <Button
            variant={showVerifiedOnly ? 'verified' : 'outline'}
            onClick={() => setShowVerifiedOnly(!showVerifiedOnly)}
            className="gap-2"
          >
            <CheckCircle className="h-4 w-4" />
            Verified Only
          </Button>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredAgents.length}</span> agents
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Agents;
