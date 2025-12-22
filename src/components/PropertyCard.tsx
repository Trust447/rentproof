import { Link } from 'react-router-dom';
import { Property, formatPrice } from '@/lib/mockData';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Bed, Bath, CheckCircle, Clock } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const priceLabel = property.priceType === 'night' ? '/night' : property.priceType === 'month' ? '/month' : '/year';

  return (
    <Link to={`/property/${property.id}`}>
      <Card className="card-hover overflow-hidden border-border bg-card">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
          />
          
          {/* Verification Badge */}
          <div className="absolute left-3 top-3">
            {property.isVerified ? (
              <span className="badge-verified">
                <CheckCircle className="h-3.5 w-3.5" />
                Verified
              </span>
            ) : (
              <span className="badge-pending">
                <Clock className="h-3.5 w-3.5" />
                Pending
              </span>
            )}
          </div>

          {/* Property Type */}
          <div className="absolute right-3 top-3">
            <Badge variant="secondary" className="bg-card/90 text-foreground backdrop-blur-sm">
              {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
            </Badge>
          </div>
        </div>

        <CardContent className="p-4">
          {/* Price */}
          <div className="mb-2 flex items-baseline gap-1">
            <span className="text-xl font-bold text-foreground">{formatPrice(property.price)}</span>
            <span className="text-sm text-muted-foreground">{priceLabel}</span>
          </div>

          {/* Title */}
          <h3 className="mb-2 line-clamp-1 text-base font-semibold text-foreground">
            {property.title}
          </h3>

          {/* Location */}
          <div className="mb-3 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="line-clamp-1">{property.location}</span>
          </div>

          {/* Details */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1.5">
                <Bed className="h-4 w-4" />
                <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Bath className="h-4 w-4" />
              <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
            </div>
          </div>

          {/* Agent Preview */}
          <div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
            <img
              src={property.agent.avatar}
              alt={property.agent.name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-medium text-foreground">{property.agent.name}</p>
              {property.agent.isVerified && (
                <p className="text-xs text-verified">Verified Agent</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
