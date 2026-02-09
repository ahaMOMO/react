import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Save, Upload, Info } from 'lucide-react';

const AddProduct = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link to="/products" className="p-2 hover:bg-muted rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 text-muted-foreground" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-foreground">发布新产品</h1>
          <p className="text-muted-foreground mt-1">请填写下方信息以创建新商品条目。</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
            <h3 className="text-lg font-semibold mb-4">基本信息</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">产品名称</label>
                <input 
                  type="text" 
                  placeholder="例如：无线降噪耳机" 
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">产品描述</label>
                <textarea 
                  rows={4}
                  placeholder="请输入详细的产品描述..." 
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
            <h3 className="text-lg font-semibold mb-4">媒体资源</h3>
            <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-muted/30 transition-colors cursor-pointer group">
              <div className="p-3 bg-muted rounded-full mb-3 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <Upload className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
              </div>
              <h4 className="font-medium text-sm">点击或拖拽上传图片</h4>
              <p className="text-xs text-muted-foreground mt-1">支持 PNG, JPG, WEBP 格式，最大 5MB</p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
            <h3 className="text-lg font-semibold mb-4">定价与库存</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">销售价格 (¥)</label>
                <input 
                  type="number" 
                  placeholder="0.00" 
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">成本价 (¥)</label>
                <input 
                  type="number" 
                  placeholder="0.00" 
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">库存数量</label>
                <input 
                  type="number" 
                  placeholder="0" 
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">SKU 编码</label>
                <input 
                  type="text" 
                  placeholder="PROD-001" 
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Organization */}
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
            <h3 className="text-lg font-semibold mb-4">商品状态</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">上架销售</label>
                <input type="checkbox" className="toggle" defaultChecked />
              </div>
              <hr className="border-border" />
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">商品分类</label>
                <select className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none">
                  <option>电子产品</option>
                  <option>办公家具</option>
                  <option>服装鞋帽</option>
                  <option>其他分类</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium">小贴士</h4>
                <p className="text-xs text-muted-foreground mt-1">完善的产品信息有助于提升搜索排名和客户购买转化率。</p>
              </div>
            </div>
          </div>

           <div className="flex gap-3 pt-4">
            <button className="flex-1 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted/50 transition-colors">
              取消
            </button>
            <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-custom">
              <Save className="w-4 h-4" />
              保存发布
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;