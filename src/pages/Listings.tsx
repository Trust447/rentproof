import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import SearchFilters, { SearchFilters as FilterType } from '@/components/SearchFilters';
import { mockProperties } from '@/lib/mockData';

const Listings = () => {
  const [filters, setFilters] = useState<FilterType>({
    query: '',
    area: 'All Areas',
    type: 'All Types',
    priceRange: { min: 0, max: Infinity },
    verifiedOnly: false,
  });

  const filteredProperties = useMemo(() => {
    return mockProperties.filter((property) => {
      // Query filter
      if (filters.query) {
        const query = filters.query.toLowerCase();
        const matchesQuery = 
          property.title.toLowerCase().includes(query) ||
          property.location.toLowerCase().includes(query) ||
          property.type.toLowerCase().includes(query);
        if (!matchesQuery) return false;
      }

      // Area filter
      if (filters.area !== 'All Areas' && property.area !== filters.area) {
        return false;
      }

      // Type filter
      if (filters.type !== 'All Types' && property.type.toLowerCase() !== filters.type.toLowerCase()) {
        return false;
      }

      // Price filter
      const annualPrice = property.priceType === 'month' 
        ? property.price * 12 
        : property.priceType === 'night' 
          ? property.price * 365 
          : property.price;
      
      if (annualPrice < filters.priceRange.min || annualPrice > filters.priceRange.max) {
        return false;
      }

      // Verified filter
      if (filters.verifiedOnly && !property.isVerified) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container-main py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
            Find Your Perfect Rental
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse verified properties across Lagos
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8">
          <SearchFilters onSearch={setFilters} />
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredProperties.length}</span> properties
          </p>
        </div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">No properties found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search filters to find more properties
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Listings;
