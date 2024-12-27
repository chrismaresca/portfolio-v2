import React from "react";
import Link from "next/link";

// Constants
import {
  VENTURES_TITLE,
  // VENTURES_DESC,
  VENTURES,
} from "@/constants";

// Shadcn UI
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Icons
import { Link2 } from "lucide-react";

interface VentureProps {
  id: number;
  title: string;
  subtitle: string;
  href: string;
  target?: string;
  badge?: string;
}

function Venture({ title, subtitle, href, target, badge }: VentureProps) {
  return (
    <Button asChild variant="ghost" className="h-auto w-full justify-start py-4 px-4 group">
      <Link href={href} target={target}>
        <div className="flex w-full flex-col items-start gap-1">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-medium">{title}</span>
              {badge && (
                <Badge variant="secondary" className="text-xs font-normal">
                  {badge}
                </Badge>
              )}
            </div>
            <Link2 className="invisible h-4 w-4 text-muted-foreground group-hover:visible" />
          </div>
          <span className="text-sm text-muted-foreground text-wrap line-clamp-2	pr-4">{subtitle}</span>
        </div>
      </Link>
    </Button>
  );
}

export default function Ventures() {
  return (
    <div>
      <div className="flex flex-col gap-2 !px-4">
        <p className="grid-headtext">{VENTURES_TITLE}</p>
        {/* <p className="grid-subtext">{VENTURES_DESC}</p> */}
      </div>
      <div className="flex flex-col gap-2 pt-3">
        {VENTURES.map((item) => (
          <Venture key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
