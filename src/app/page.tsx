import { Button, Space } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-slate-200">
      <Space direction="vertical">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        
        <Link href="/counter"><Button type="link">Link Button</Button></Link>
      </Space>
    </div>
  );
}
