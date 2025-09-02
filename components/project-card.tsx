"use client";

import Image from "next/image";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

type Props = {
  image: string;
  name: string;
  location: string;
  fundedAmount: number;
  targetAmount: number;
};

export function ProjectCard({
  image,
  name,
  location,
  fundedAmount,
  targetAmount,
}: Props) {
  const percent = Math.min(
    100,
    Math.round((fundedAmount / targetAmount) * 100)
  );
  return (
    <Link
      href={`/projects/${encodeURIComponent(
        name.toLowerCase().replace(/\s+/g, "-")
      )}`}
      className="block"
    >
      <Card className="w-full max-w-[360px] overflow-hidden">
        <div className="relative h-40 w-full">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <CardHeader>
          <CardTitle className="text-lg">{name}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" /> {location}
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <Progress value={percent} />
          <div className="flex justify-between text-sm">
            <span>
              {new Intl.NumberFormat().format(fundedAmount)} /{" "}
              {new Intl.NumberFormat().format(targetAmount)}
            </span>
            <span>{percent}%</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
