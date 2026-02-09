import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const SettingsPage: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">系统设置</h2>
          <p className="text-muted-foreground mt-2">管理系统偏好设置和账户信息。</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>个人资料</CardTitle>
            <CardDescription>
              更新您的个人信息和电子邮件地址。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">用户名</label>
                <Input defaultValue="Admin User" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">邮箱的</label>
                <Input defaultValue="admin@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">关于我</label>
              <textarea 
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="写一点关于你自己的介绍..."
              />
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button>保存更改</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>通知设置</CardTitle>
            <CardDescription>
              选择您希望接收的通知类型。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <label className="text-base font-medium">邮件通知</label>
                <p className="text-sm text-muted-foreground">
                  接收关于账户活动的每日摘要邮件
                </p>
              </div>
              <Button variant="outline" size="sm">已启用</Button>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <label className="text-base font-medium">安全警报</label>
                <p className="text-sm text-muted-foreground">
                  当检测到异常登录时立即通知我
                </p>
              </div>
              <Button variant="outline" size="sm">已启用</Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-end pb-8">
           <Button variant="destructive">退出登录</Button>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;