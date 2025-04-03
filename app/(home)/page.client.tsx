'use client';

import {
    useState,
} from 'react';
import { cn } from '@/lib/cn';
import Image from 'next/image';
import { cva } from 'class-variance-authority';


const previewButtonVariants = cva(
    'w-20 h-9 text-sm font-medium transition-colors rounded-full',
    {
        variants: {
            active: {
                true: 'text-fd-primary-foreground',
                false: 'text-fd-muted-foreground',
            },
        },
    },
);
export function PreviewImages() {
    const [active, setActive] = useState(0);

    return (
        <div className="mt-12 -mb-40 min-w-[800px] lg:-mb-18 xl:min-w-[1100px] xl:-mx-24">
            <div className="absolute flex flex-row left-1/2 -translate-1/2 bottom-4 z-[2] p-1 rounded-full bg-fd-card border shadow-xl dark:shadow-fd-background">
                <div
                    role="none"
                    className="absolute bg-fd-primary rounded-full w-20 h-9 transition-transform z-[-1]"
                    style={{
                        transform: `translateX(calc(var(--spacing) * 20 * ${active}))`,
                    }}
                />
                <button
                    className={cn(previewButtonVariants({ active: active === 0 }))}
                    onClick={() => setActive(0)}
                >
                    桌面应用
                </button>
                <button
                    className={cn(previewButtonVariants({ active: active === 1 }))}
                    onClick={() => setActive(1)}
                >
                    硬件设备
                </button>
                <button
                    className={cn(previewButtonVariants({ active: active === 2 }))}
                    onClick={() => setActive(2)}
                >
                    文档
                </button>
            </div>
            {active === 0 && (
                <Image
                    src='/home/topdesk.png'
                    alt="preview"
                    priority
                    width={800} // 指定宽度
                    height={600} // 指定高度
                    layout="intrinsic"
                    className={cn(
                        'w-full select-none duration-1000 animate-in fade-in slide-in-from-bottom-12 dark:[mask-image:linear-gradient(to_bottom,white_70%,transparent_90%)]',
                        active !== 0 && 'hidden',
                    )}
                />
            )}
            {active === 1 && (
                <Image
                    src='/home/depdesk.png'
                    alt="preview"
                    priority
                    width={800} // 指定宽度
                    height={600} // 指定高度
                    layout="intrinsic"
                    className={cn(
                        'w-full select-none duration-1000 animate-in fade-in slide-in-from-bottom-12 dark:[mask-image:linear-gradient(to_bottom,white_70%,transparent_90%)]',
                        active !== 1 && 'hidden',
                    )}
                />
            )}
            {active === 2 && (
                <Image
                    src='/home/docdesk.png'
                    alt="preview"
                    priority
                    width={800} // 指定宽度
                    height={600} // 指定高度
                    layout="intrinsic"
                    className={cn(
                        'w-full select-none duration-1000 animate-in fade-in slide-in-from-bottom-12 dark:[mask-image:linear-gradient(to_bottom,white_70%,transparent_90%)]',
                        active !== 2 && 'hidden',
                    )}
                />
            )}
        </div>
    );
}
