import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const products = [
    { id: 1, name: 'Premium Headphones', price: '¥1,299', stock: 45, status: 'In Stock', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Ergonomic Chair', price: '¥2,499', stock: 12, status: 'Low Stock', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Mechanical Keyboard', price: '¥899', stock: 0, status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1587829741301-3c5828cdccF6?w=500&auto=format&fit=crop&q=60' },
    { id: 4, name: '4K Monitor', price: '¥3,299', stock: 28, status: 'In Stock', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60' },
    { id: 5, name: 'Wireless Mouse', price: '¥299', stock: 156, status: 'In Stock', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60' },
    { id: 6, name: 'USB-C Dock', price: '¥499', stock: 34, status: 'In Stock', image: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=500&auto=format&fit=crop&q=60' },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'In Stock': return 'default';
      case 'Low Stock': return 'secondary';
      case 'Out of Stock': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">产品管理</h2>
            <p className="text-muted-foreground mt-2">管理库存、价格和产品信息。</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> 添加产品
          </Button>
        </div>

        <div className="flex items-center space-x-2 bg-card p-4 rounded-lg border">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="搜索产品..." className="pl-9 w-full md:w-[300px]" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> 筛选
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video w-full overflow-hidden bg-slate-100 relative">
                 <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                   <Badge variant={getStatusColor(product.status) as any} className="shadow-sm">
                    {product.status}
                   </Badge>
                </div>
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-bold text-foreground">{product.price}</span>
                  <span>库存: {product.stock}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Button variant="outline" className="w-full">编辑</Button>
                <Button className="w-full">查看</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;