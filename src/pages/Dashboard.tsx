import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';
import {
  Plus, Home, Eye, MessageSquare, Clock, CheckCircle, Settings, User
} from 'lucide-react';

const Dashboard = () => {
  const [addPropertyOpen, setAddPropertyOpen] = useState(false);
  const [propertyData, setPropertyData] = useState({
    title: '',
    location: '',
    area: '',
    price: '',
    priceType: 'year',
    type: 'apartment',
    bedrooms: '',
    bathrooms: '',
    description: '',
    amenities: '',
  });

  const stats = [
    { label: 'Active Listings', value: '3', icon: Home, color: 'text-primary' },
    { label: 'Total Views', value: '1,247', icon: Eye, color: 'text-verified' },
    { label: 'Inquiries', value: '23', icon: MessageSquare, color: 'text-warning' },
    { label: 'Pending Verification', value: '1', icon: Clock, color: 'text-muted-foreground' },
  ];

  const myListings = [
    { id: '1', title: 'Modern 3-Bedroom Apartment in Lekki Phase 1', status: 'verified', views: 523, inquiries: 12 },
    { id: '2', title: 'Cozy Studio in Victoria Island', status: 'verified', views: 412, inquiries: 8 },
    { id: '3', title: 'Spacious 4-Bedroom Duplex in Ikeja GRA', status: 'pending', views: 312, inquiries: 3 },
  ];

  const handleAddProperty = (e: React.FormEvent) => {
    e.preventDefault();
    setAddPropertyOpen(false);
    toast.success('Property submitted for verification!', {
      description: 'Our team will review and verify your listing within 24-48 hours.',
    });
    setPropertyData({
      title: '',
      location: '',
      area: '',
      price: '',
      priceType: 'year',
      type: 'apartment',
      bedrooms: '',
      bathrooms: '',
      description: '',
      amenities: '',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isLoggedIn={true} userType="agent" />

      <main className="container-main py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="mb-1 text-2xl font-bold text-foreground sm:text-3xl">
              Agent Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage your properties and view performance
            </p>
          </div>
          
          <Dialog open={addPropertyOpen} onOpenChange={setAddPropertyOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2" size="lg">
                <Plus className="h-5 w-5" />
                Add Property
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Add New Property</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddProperty} className="space-y-4">
                <div className="space-y-2">
                  <Label>Property Title</Label>
                  <Input
                    placeholder="e.g., Modern 3-Bedroom Apartment in Lekki"
                    value={propertyData.title}
                    onChange={(e) => setPropertyData({ ...propertyData, title: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Property Type</Label>
                    <Select value={propertyData.type} onValueChange={(v) => setPropertyData({ ...propertyData, type: v })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="duplex">Duplex</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Area</Label>
                    <Select value={propertyData.area} onValueChange={(v) => setPropertyData({ ...propertyData, area: v })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Lekki">Lekki</SelectItem>
                        <SelectItem value="Victoria Island">Victoria Island</SelectItem>
                        <SelectItem value="Ikoyi">Ikoyi</SelectItem>
                        <SelectItem value="Ikeja">Ikeja</SelectItem>
                        <SelectItem value="Yaba">Yaba</SelectItem>
                        <SelectItem value="Surulere">Surulere</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Full Address</Label>
                  <Input
                    placeholder="Full property address"
                    value={propertyData.location}
                    onChange={(e) => setPropertyData({ ...propertyData, location: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Price (₦)</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={propertyData.price}
                      onChange={(e) => setPropertyData({ ...propertyData, price: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Price Type</Label>
                    <Select value={propertyData.priceType} onValueChange={(v) => setPropertyData({ ...propertyData, priceType: v })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="year">Per Year</SelectItem>
                        <SelectItem value="month">Per Month</SelectItem>
                        <SelectItem value="night">Per Night</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Bedrooms</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={propertyData.bedrooms}
                      onChange={(e) => setPropertyData({ ...propertyData, bedrooms: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    placeholder="Describe your property..."
                    value={propertyData.description}
                    onChange={(e) => setPropertyData({ ...propertyData, description: e.target.value })}
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Amenities (comma separated)</Label>
                  <Input
                    placeholder="e.g., 24/7 Power, Swimming Pool, Gym"
                    value={propertyData.amenities}
                    onChange={(e) => setPropertyData({ ...propertyData, amenities: e.target.value })}
                  />
                </div>

                <div className="rounded-lg bg-muted p-3 text-sm text-muted-foreground">
                  <Clock className="mb-1 inline h-4 w-4" /> Your property will be reviewed and verified within 24-48 hours before appearing in listings.
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit for Verification
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-border bg-card">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* My Listings */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>My Listings</span>
              <Link to="/listings">
                <Button variant="ghost" size="sm">View All</Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {myListings.map((listing) => (
                <div
                  key={listing.id}
                  className="flex flex-col gap-4 rounded-lg border border-border p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <h3 className="font-medium text-foreground">{listing.title}</h3>
                      {listing.status === 'verified' ? (
                        <span className="badge-verified">
                          <CheckCircle className="h-3 w-3" />
                          Verified
                        </span>
                      ) : (
                        <span className="badge-pending">
                          <Clock className="h-3 w-3" />
                          Pending
                        </span>
                      )}
                    </div>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" /> {listing.views} views
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" /> {listing.inquiries} inquiries
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Link to={`/property/${listing.id}`}>
                      <Button variant="secondary" size="sm">View</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Card className="card-hover border-border bg-card">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Edit Profile</h3>
                <p className="text-sm text-muted-foreground">Update your information</p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover border-border bg-card">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-verified/10">
                <CheckCircle className="h-5 w-5 text-verified" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Verification Status</h3>
                <p className="text-sm text-verified">Verified Agent</p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover border-border bg-card">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Settings className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Settings</h3>
                <p className="text-sm text-muted-foreground">Manage preferences</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
