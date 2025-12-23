import { Link } from 'react-router-dom';
import { Agent } from '@/lib/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Star, Home, Clock } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard = ({ agent }: AgentCardProps) => {
  return (
    <Link to={`/agent/${agent.id}`}>
      <Card className="card-hover border-border bg-card">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="relative">
              <img
                src={agent.avatar}
                alt={agent.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              {agent.isVerified && (
                <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-verified">
                  <CheckCircle className="h-4 w-4 text-accent-foreground" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{agent.name}</h3>
                  {agent.isVerified && (
                    <p className="text-sm text-verified">Verified Agent</p>
                  )}
                </div>
                <div className="flex items-center gap-1 rounded-full bg-warning-bg px-2 py-1">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="text-sm font-semibold text-foreground">{agent.rating}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground">
                    <Home className="h-4 w-4" />
                  </div>
                  <p className="mt-1 text-lg font-semibold text-foreground">{agent.properties}</p>
                  <p className="text-xs text-muted-foreground">Properties</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground">
                    <Star className="h-4 w-4" />
                  </div>
                  <p className="mt-1 text-lg font-semibold text-foreground">{agent.reviews}</p>
                  <p className="text-xs text-muted-foreground">Reviews</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                  </div>
                  <p className="mt-1 text-lg font-semibold text-foreground">{agent.responseRate}%</p>
                  <p className="text-xs text-muted-foreground">Response</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AgentCard;
