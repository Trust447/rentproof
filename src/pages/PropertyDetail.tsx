import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { mockProperties, formatPrice } from '@/lib/mockData';
import { toast } from 'sonner';
import {
  MapPin, Bed, Bath, CheckCircle, Clock, Star, Phone, Mail,
  Shield, ArrowLeft, Calendar, ChevronLeft, ChevronRight, Lock
} from 'lucide-react';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = mockProperties.find(p => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    moveInDate: '',
    message: '',
  });

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="container-main py-20 text-center">
          <h1 className="mb-4 text-2xl font-bold text-foreground">Property not found</h1>
          <Link to="/listings">
            <Button variant="outline">Back to Listings</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const priceLabel = property.priceType === 'night' ? '/night' : property.priceType === 'month' ? '/month' : '/year';

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingOpen(false);
    toast.success('Booking request submitted!', {
      description: 'The agent will contact you within 24 hours. Your payment will be held in escrow.',
    });
    setBookingData({ name: '', email: '', phone: '', moveInDate: '', message: '' });
  };

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % property.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container-main py-8">
        {/* Back Button */}
        <Link to="/listings" className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to listings
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative mb-6 overflow-hidden rounded-2xl">
              <div className="aspect-[16/10]">
                <img
                  src={property.images[currentImage]}
                  alt={property.title}
                  className="h-full w-full object-cover"
                />
              </div>
              
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-foreground shadow-lg transition hover:bg-card"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-foreground shadow-lg transition hover:bg-card"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {property.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`h-2 w-2 rounded-full transition ${
                          i === currentImage ? 'bg-primary-foreground' : 'bg-primary-foreground/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Verification Badge */}
              <div className="absolute left-4 top-4">
                {property.isVerified ? (
                  <span className="badge-verified">
                    <CheckCircle className="h-4 w-4" />
                    Verified Property
                  </span>
                ) : (
                  <span className="badge-pending">
                    <Clock className="h-4 w-4" />
                    Pending Verification
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {property.images.length > 1 && (
              <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`flex-shrink-0 overflow-hidden rounded-lg ${
                      i === currentImage ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <img src={img} alt="" className="h-20 w-28 object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Property Info */}
            <div className="mb-8">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-foreground">{formatPrice(property.price)}</div>
                  <div className="text-muted-foreground">{priceLabel}</div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mb-6 flex flex-wrap gap-6 rounded-xl bg-muted p-4">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">Available {property.availableFrom}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="mb-3 text-xl font-semibold text-foreground">About this property</h2>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="mb-4 text-xl font-semibold text-foreground">Amenities</h2>
                <div className="flex flex-wrap gap-3">
                  {property.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Card */}
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2 rounded-lg bg-verified-bg p-3">
                    <Shield className="h-5 w-5 text-verified" />
                    <span className="text-sm font-medium text-verified">Escrow Protected Booking</span>
                  </div>

                  <div className="mb-6">
                    <div className="text-3xl font-bold text-foreground">{formatPrice(property.price)}</div>
                    <div className="text-muted-foreground">{priceLabel}</div>
                  </div>

                  <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full" size="lg">
                        <Lock className="mr-2 h-4 w-4" />
                        Reserve with Escrow
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Book This Property</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleBooking} className="space-y-4">
                        <Input
                          placeholder="Your full name"
                          value={bookingData.name}
                          onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                          required
                        />
                        <Input
                          type="email"
                          placeholder="Email address"
                          value={bookingData.email}
                          onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                          required
                        />
                        <Input
                          type="tel"
                          placeholder="Phone number"
                          value={bookingData.phone}
                          onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                          required
                        />
                        <Input
                          type="date"
                          placeholder="Preferred move-in date"
                          value={bookingData.moveInDate}
                          onChange={(e) => setBookingData({ ...bookingData, moveInDate: e.target.value })}
                          required
                        />
                        <Textarea
                          placeholder="Any message for the agent?"
                          value={bookingData.message}
                          onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                        />
                        
                        <div className="rounded-lg bg-muted p-3 text-sm text-muted-foreground">
                          <Lock className="mb-1 inline h-4 w-4 text-verified" /> Your payment will be held in escrow until you confirm move-in
                        </div>

                        <Button type="submit" className="w-full" size="lg">
                          Submit Booking Request
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    You won't be charged yet
                  </p>
                </CardContent>
              </Card>

              {/* Agent Card */}
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold text-foreground">Listed by</h3>
                  
                  <Link to={`/agent/${property.agent.id}`} className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={property.agent.avatar}
                        alt={property.agent.name}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      {property.agent.isVerified && (
                        <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-verified">
                          <CheckCircle className="h-3 w-3 text-accent-foreground" />
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{property.agent.name}</p>
                      {property.agent.isVerified && (
                        <p className="text-sm text-verified">Verified Agent</p>
                      )}
                    </div>
                  </Link>

                  <div className="my-4 flex items-center gap-2">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="font-semibold text-foreground">{property.agent.rating}</span>
                    <span className="text-muted-foreground">({property.agent.reviews} reviews)</span>
                  </div>

                  <div className="space-y-2">
                    <a
                      href={`tel:${property.agent.phone}`}
                      className="flex items-center gap-3 rounded-lg border border-border p-3 text-foreground transition hover:bg-muted"
                    >
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      {property.agent.phone}
                    </a>
                    <a
                      href={`mailto:${property.agent.email}`}
                      className="flex items-center gap-3 rounded-lg border border-border p-3 text-foreground transition hover:bg-muted"
                    >
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      {property.agent.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
