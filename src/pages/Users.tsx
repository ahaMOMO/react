import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, Plus, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UsersPage: React.FC = () => {
  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', lastActive: '2 min ago' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Active', lastActive: '1 hr ago' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Viewer', status: 'Inactive', lastActive: '2 days ago' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Editor', status: 'Active', lastActive: '5 min ago' },
    { id: 5, name: 'Evan Wright', email: 'evan@example.com', role: 'Viewer', status: 'Inactive', lastActive: '1 week ago' },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">用户管理</h2>
            <p className="text-muted-foreground mt-2">管理系统访问权限和用户角色。</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> 新增用户
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>所有用户</CardTitle>
                <CardDescription>当前系统共有 {users.length} 名注册用户</CardDescription>
              </div>
              <div className="w-[250px]">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="搜索用户..." className="pl-9" />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 border-b">
                  <tr>
                    <th className="px-6 py-3 font-medium text-muted-foreground">用户</th>
                    <th className="px-6 py-3 font-medium text-muted-foreground">角色</th>
                    <th className="px-6 py-3 font-medium text-muted-foreground">状态</th>
                    <th className="px-6 py-3 font-medium text-muted-foreground">最后活跃</th>
                    <th className="px-6 py-3 font-medium text-muted-foreground text-right">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b last:border-0 hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-xs text-muted-foreground">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="outline">{user.role}</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                          {user.status === 'Active' ? '活跃' : '离线'}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {user.lastActive}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default UsersPage;