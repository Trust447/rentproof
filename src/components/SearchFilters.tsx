import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { areas, propertyTypes, priceRanges } from '@/lib/mockData';

interface SearchFiltersProps {
  onSearch: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  query: string;
  area: string;
  type: string;
  priceRange: { min: number; max: number };
  verifiedOnly: boolean;
}

const SearchFilters = ({ onSearch }: SearchFiltersProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    area: 'All Areas',
    type: 'All Types',
    priceRange: { min: 0, max: Infinity },
    verifiedOnly: false,
  });

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  const clearFilters = () => {
    const defaultFilters: SearchFilters = {
      query: '',
      area: 'All Areas',
      type: 'All Types',
      priceRange: { min: 0, max: Infinity },
      verifiedOnly: false,
    };
    setFilters(defaultFilters);
    onSearch(defaultFilters);
  };

  const hasActiveFilters = 
    filters.area !== 'All Areas' || 
    filters.type !== 'All Types' || 
    filters.priceRange.max !== Infinity ||
    filters.verifiedOnly;

  return (
    <div className="space-y-4">
      {/* Main Search Bar */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by location, property type..."
            value={filters.query}
            onChange={(e) => handleFilterChange('query', e.target.value)}
            className="h-12 pl-10 text-base"
          />
        </div>
        <Button
          variant={showFilters ? 'default' : 'outline'}
          size="lg"
          className="gap-2"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {hasActiveFilters && (
            <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-verified text-xs text-accent-foreground">
              !
            </span>
          )}
        </Button>
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="animate-slide-up rounded-xl border border-border bg-card p-4">
          <div className="flex flex-wrap gap-4">
            {/* Area Filter */}
            <div className="min-w-[180px] flex-1">
              <label className="mb-2 block text-sm font-medium text-foreground">Area</label>
              <Select value={filters.area} onValueChange={(value) => handleFilterChange('area', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {areas.map((area) => (
                    <SelectItem key={area} value={area}>
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Property Type Filter */}
            <div className="min-w-[180px] flex-1">
              <label className="mb-2 block text-sm font-medium text-foreground">Property Type</label>
              <Select value={filters.type} onValueChange={(value) => handleFilterChange('type', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range Filter */}
            <div className="min-w-[180px] flex-1">
              <label className="mb-2 block text-sm font-medium text-foreground">Price Range</label>
              <Select
                value={priceRanges.find(r => r.min === filters.priceRange.min && r.max === filters.priceRange.max)?.label || 'Any Price'}
                onValueChange={(value) => {
                  const range = priceRanges.find(r => r.label === value);
                  if (range) handleFilterChange('priceRange', { min: range.min, max: range.max });
                }}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range.label} value={range.label}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Verified Only Toggle */}
            <div className="flex min-w-[180px] flex-1 flex-col justify-end">
              <Button
                variant={filters.verifiedOnly ? 'verified' : 'outline'}
                onClick={() => handleFilterChange('verifiedOnly', !filters.verifiedOnly)}
                className="h-10"
              >
                Verified Only
              </Button>
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <div className="mt-4 flex justify-end">
              <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1.5 text-muted-foreground">
                <X className="h-4 w-4" />
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
