import Link from 'next/link';
import { type LucideIcon, MousePointer } from 'lucide-react';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';
import {
  PreviewImages,
} from './page.client';
import {
  KeyboardIcon,
  LayoutIcon,
  PersonStandingIcon,
  RocketIcon,
  TimerIcon,
  CpuIcon,
} from 'lucide-react';

export default function HomePage() {
  const gridColor =
    'color-mix(in oklab, var(--color-fd-primary) 10%, transparent)';

  return (
    <>
      <div
        className="absolute inset-x-0 top-[360px] h-[250px] max-md:hidden"
        style={{
          background: `repeating-linear-gradient(to right, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px), repeating-linear-gradient(to bottom, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px)`,
        }}
      />

      <main className="container relative max-w-[1100px] px-2 py-4 z-[2] lg:py-8">
        <div
          style={{
            background:
              'repeating-linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-fd-primary) 1%, transparent) 500px, transparent 1000px)',
          }}
        >
          <div className="relative">
            <Hero />
          </div>

          <Feedback />
          <Highlights />
        </div>
      </main>

    </>
  );
}

function Hero() {
  return (
    <div className="relative z-[2] flex flex-col border-x border-t bg-fd-card/80 px-6 pt-12 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden max-lg:overflow-hidden">
      <h1 className="mb-8 text-4xl font-medium md:hidden">快速验证代码</h1>
      <h1 className="mb-8 max-w-[600px] text-4xl font-medium max-md:hidden">
        花费更少功夫
        验证你的代码
      </h1>
      <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
        Yoro-HiL 是一个基于 FPGA 的半实物仿真平台，可以帮助你脱离硬件环境的干扰，快速验证你的代码，包括但不限于协议验证、算法验证、性能验证等。
      </p>

      <div className="inline-flex items-center gap-3 max-md:mx-auto">
        <Link
          href="/docs/quickStart"
          className={cn(
            buttonVariants({ size: 'lg', className: 'rounded-full' }),
          )}
        >
          入门指南
        </Link>
      </div>
      <PreviewImages />
    </div>

  )
}

function Feedback() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden border-x border-t px-6 py-8 md:py-16">
      <div
        className="absolute inset-x-0 bottom-0 z-[-1] h-24 opacity-30 duration-1000 animate-in fade-in"
        style={{
          maskImage: 'linear-gradient(to bottom,transparent,white)',
          backgroundImage:
            'linear-gradient(to right, #4ebfff, transparent, #e92a67)',
        }}
      />
      <p className="text-center font-medium text-fd-muted-foreground">
        受到卓越团队及开发者的信任
      </p>

      <div className="mt-6 rounded-xl border bg-gradient-to-b from-secondary p-4 shadow-lg">
        <p className="text-sm font-medium">
          {`"一个令人惊叹的便捷工具，像真正优秀的软件工程师一样工作。"`}
        </p>
        <div className="mt-4 flex flex-row items-center gap-2">
          <Image
            src="https://dogeoss.grtsinry43.com/img/author.jpeg"
            alt="avatar"
            width="32"
            height="32"
            unoptimized
            className="size-8 rounded-full"
          />
          <div>
            <a
              href="https://blog.grtsinry43.com/"
              rel="noreferrer noopener"
              className="text-sm font-medium"
            >
              grtsinry43
            </a>
            <p className="text-xs text-fd-muted-foreground">
              使用代码进入物理世界。
            </p>
          </div>
          {/* <Link
            href="/showcase"
            className={cn(
              buttonVariants({ variant: 'outline', className: 'ml-auto' }),
            )}
          >
            Showcase
          </Link> */}
        </div>
      </div>
    </div>
  );
}

function Highlights(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-full flex flex-row items-start justify-center border-l border-t p-8 pb-2 text-center">
        <h2 className="bg-fd-primary text-fd-primary-foreground px-1 text-2xl font-semibold">
          亮点
        </h2>
        <MousePointer className="-ml-1 mt-8" />
      </div>
      <Highlight icon={TimerIcon} heading="快速上手">
        提供数个案例以快速上手 Yoro-HiL 的使用方法。
      </Highlight>
      <Highlight icon={LayoutIcon} heading="无障碍">
        注重用户经验及可得性。
      </Highlight>
      <Highlight icon={RocketIcon} heading="高速运行">
        可达 1us 的仿真步长。
      </Highlight>
      <Highlight icon={CpuIcon} heading="强大的运算芯片">
        不必开发 Verilog/VHDL ，放心享受 FPGA 的强大，
      </Highlight>
      <Highlight icon={KeyboardIcon} heading="自动化">
        使用便捷的 API 服务器，编写请求将 Yoro-HiL 加入你的自动化测试。
      </Highlight>
      <Highlight icon={PersonStandingIcon} heading="人性化">
        以用户体验为核心， Yoro-HiL 一切功能如臂指使。
      </Highlight>
    </div>
  );
}

function Highlight({
  icon: Icon,
  heading,
  children,
}: {
  icon: LucideIcon;
  heading: ReactNode;
  children: ReactNode;
}): React.ReactElement {
  return (
    <div className="border-l border-t px-6 py-12">
      <div className="mb-4 flex flex-row items-center gap-2 text-fd-muted-foreground">
        <Icon className="size-4" />
        <h2 className="text-sm font-medium">{heading}</h2>
      </div>
      <span className="font-medium">{children}</span>
    </div>
  );
}