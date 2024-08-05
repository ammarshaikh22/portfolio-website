import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import Image from "next/image";

export function Gridlayout() {
    return (
        <BentoGrid className="max-w-[1000px] mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    header={item.header}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    );
}
const Skeleton = ({ url, width }: any) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <Image src={url} alt="img" width={width} height={100}/>
    </div>
);
const items = [
    {
        title: "The Music Website",
        header: <Skeleton url="/music.png" width="400"/>,
    },
    {
        title: "The Quiz app",
        header: <Skeleton url="/quiz.png" width="400" />,
    },
    {
        title: "The Johne Demo Wensite",
        header: <Skeleton url="/js.png" width="400"/>,
    },
    {
        title: "The Darna Website",
        header: <Skeleton url="/darna.png" width="700"/>,
    },
    {
        title: "The First Demo Portfolio Website",
        header: <Skeleton url="/firstport.png" width="400"/>,
    },
    {
        title: "The Expense Tracker",
        header: <Skeleton url="/expence.png" width="400"/>,
    },
    {
        title: "The Clone of Linkedin",
        header: <Skeleton url="/linkedin.png" width="700"/>,
    },
];
