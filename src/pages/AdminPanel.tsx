import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  TrendingUp, 
  Users, 
  Package, 
  DollarSign,
  Eye
} from "lucide-react";
import { useState } from "react";

const stats = [
  {
    title: "Total Orders",
    value: "1,234",
    change: "+12%",
    icon: Package,
    color: "text-primary"
  },
  {
    title: "Revenue",
    value: "₹45,678",
    change: "+8%",
    icon: DollarSign,
    color: "text-success"
  },
  {
    title: "Active Users",
    value: "567",
    change: "+15%",
    icon: Users,
    color: "text-accent"
  },
  {
    title: "Growth",
    value: "23%",
    change: "+5%",
    icon: TrendingUp,
    color: "text-primary-glow"
  }
];

const orders = [
  {
    id: "ORD001",
    customer: "John Doe",
    tiffin: "North Indian Special",
    quantity: 2,
    total: 498,
    status: "Delivered",
    date: "2024-01-15"
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    tiffin: "South Indian Classic",
    quantity: 1,
    total: 199,
    status: "Preparing",
    date: "2024-01-15"
  },
  {
    id: "ORD003",
    customer: "Mike Johnson",
    tiffin: "Healthy Delight",
    quantity: 3,
    total: 897,
    status: "Out for Delivery",
    date: "2024-01-14"
  },
  {
    id: "ORD004",
    customer: "Sarah Wilson",
    tiffin: "Gujarati Thali",
    quantity: 1,
    total: 229,
    status: "Cancelled",
    date: "2024-01-14"
  },
  {
    id: "ORD005",
    customer: "David Brown",
    tiffin: "Executive Special",
    quantity: 2,
    total: 698,
    status: "Delivered",
    date: "2024-01-13"
  }
];

const tiffins = [
  {
    id: 1,
    name: "North Indian Special",
    category: "North Indian",
    price: 249,
    status: "Active",
    stock: 25,
    orders: 156
  },
  {
    id: 2,
    name: "South Indian Classic",
    category: "South Indian",
    price: 199,
    status: "Active",
    stock: 30,
    orders: 134
  },
  {
    id: 3,
    name: "Healthy Delight",
    category: "Healthy",
    price: 299,
    status: "Active",
    stock: 18,
    orders: 89
  },
  {
    id: 4,
    name: "Gujarati Thali",
    category: "Gujarati",
    price: 229,
    status: "Low Stock",
    stock: 5,
    orders: 67
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const AdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'default';
      case 'preparing':
        return 'secondary';
      case 'out for delivery':
        return 'outline';
      case 'cancelled':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const getStockStatus = (stock: number) => {
    if (stock <= 5) return { variant: 'destructive' as const, text: 'Low Stock' };
    if (stock <= 15) return { variant: 'secondary' as const, text: 'Medium' };
    return { variant: 'default' as const, text: 'In Stock' };
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Admin Dashboard
          </div>
          <div className="w-20" />
        </div>
      </motion.nav>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-glow transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-success text-sm">{stat.change} from last month</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-primary/10 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-fit lg:grid-cols-4 bg-muted/50">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="tiffins">Tiffins</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Orders Tab */}
            <TabsContent value="orders" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Orders Management</h2>
                <Button className="bg-gradient-primary shadow-glow">
                  <Plus className="h-4 w-4 mr-2" />
                  New Order
                </Button>
              </div>

              <Card className="p-6 bg-gradient-card shadow-soft">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search orders..." 
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Tiffin</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.tiffin}</TableCell>
                        <TableCell>{order.quantity}</TableCell>
                        <TableCell className="font-semibold">₹{order.total}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusBadgeVariant(order.status)}>
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            {/* Tiffins Tab */}
            <TabsContent value="tiffins" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Tiffin Management</h2>
                <Button className="bg-gradient-primary shadow-glow">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Tiffin
                </Button>
              </div>

              <Card className="p-6 bg-gradient-card shadow-soft">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Orders</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tiffins.map((tiffin) => {
                      const stockStatus = getStockStatus(tiffin.stock);
                      return (
                        <TableRow key={tiffin.id}>
                          <TableCell className="font-medium">{tiffin.name}</TableCell>
                          <TableCell>{tiffin.category}</TableCell>
                          <TableCell className="font-semibold">₹{tiffin.price}</TableCell>
                          <TableCell>
                            <Badge variant={stockStatus.variant}>
                              {tiffin.stock} units
                            </Badge>
                          </TableCell>
                          <TableCell>{tiffin.orders}</TableCell>
                          <TableCell>
                            <Badge variant={tiffin.status === 'Active' ? 'default' : 'secondary'}>
                              {tiffin.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            {/* Customers Tab */}
            <TabsContent value="customers" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Customer Management</h2>
              </div>
              <Card className="p-6 bg-gradient-card shadow-soft">
                <p className="text-center text-muted-foreground py-8">
                  Customer management features coming soon...
                </p>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Analytics & Reports</h2>
              </div>
              <Card className="p-6 bg-gradient-card shadow-soft">
                <p className="text-center text-muted-foreground py-8">
                  Analytics dashboard coming soon...
                </p>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel;