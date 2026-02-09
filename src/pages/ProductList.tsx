import React, { useState } from 'react';
import { MoreHorizontal, Plus, Search, Filter, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  image: string;
}

const mockProducts: Product[] = [
  { id: 1, name: "Premium Wireless Headphones", category: "Electronics", price: "¥1,299", stock: 45, status: "In Stock", image: "🎧" },
  { id: 2, name: "Ergonomic Office Chair", category: "Furniture", price: "¥2,499", stock: 12, status: "Low Stock", image: "🪑" },
  { id: 3, name: "Mechanical Keyboard", category: "Electronics", price: "¥899", stock: 0, status: "Out of Stock", image: "⌨️" },
  { id: 4, name: "4K Monitor 27\"", category: "Electronics", price: "¥3,299", stock: 28, status: "In Stock", image: "🖥️" },
  { id: 5, name: "Smart Watch Series 5", category: "Wearables", price: "¥2,199", stock: 65, status: "In Stock", image: "⌚" },
];

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock': return 'bg-emerald-100 text-emerald-700';
      case 'Low Stock': return 'bg-amber-100 text-amber-700';
      case 'Out of Stock': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredProducts = mockProducts.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">产品管理</h1>
          <p className="text-muted-foreground mt-1">管理您的产品库存、价格和详情。</p>
        </div>
        <Link 
          to="/products/add" 
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-custom"
        >
          <Plus className="w-4 h-4" />
          发布产品
        </Link>
      </div>

      <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4 justify-between items-center bg-muted/20">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="搜索产品名称或分类..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-sm w-full sm:w-80 focus:ring-2 focus:ring-primary/20 focus:outline-none"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-background border border-border rounded-lg text-sm font-medium hover:bg-muted/50 transition-colors">
            <Filter className="w-4 h-4 text-muted-foreground" />
            筛选
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-3 font-medium">商品信息</th>
                <th className="px-6 py-3 font-medium">分类</th>
                <th className="px-6 py-3 font-medium">价格</th>
                <th className="px-6 py-3 font-medium">库存</th>
                <th className="px-6 py-3 font-medium">状态</th>
                <th className="px-6 py-3 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-xl">
                        {product.image}
                      </div>
                      <span className="font-medium text-foreground">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{product.category}</td>
                  <td className="px-6 py-4 font-medium">{product.price}</td>
                  <td className="px-6 py-4 text-muted-foreground">{product.stock}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button className="p-1.5 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
                        <Edit className="w-4 h-4" />
                       </button>
                       <button className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors">
                        <Trash2 className="w-4 h-4" />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-border bg-muted/20 text-xs text-muted-foreground text-center">
          显示 {filteredProducts.length} 个结果
        </div>
      </div>
    </div>
  );
};

export default ProductList;