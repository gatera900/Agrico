"use client"

import { useMemo, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { useProjects } from "@/hooks/useProjects"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export default function ProjectDetailPage() {
  const params = useParams()
  const { data } = useProjects()
  const project = useMemo(() => data?.find((p) => p.id === params?.id), [data, params?.id])

  const [amount, setAmount] = useState(100)

  if (!project) return <div className="container px-4 py-6">Loading...</div>

  const percent = Math.min(100, Math.round((project.fundedAmount / project.targetAmount) * 100))

  return (
    <div className="container px-4 py-6 space-y-4">
      <div className="relative h-56 w-full rounded-lg overflow-hidden">
        <Image src={project.image} alt={project.name} fill className="object-cover" />
      </div>
      <h1 className="text-2xl font-bold">{project.name}</h1>
      <p className="text-muted-foreground">{project.location}</p>
      <div className="space-y-2">
        <Progress value={percent} />
        <div className="flex justify-between text-sm">
          <span>
            {new Intl.NumberFormat().format(project.fundedAmount)} / {new Intl.NumberFormat().format(project.targetAmount)}
          </span>
          <span>{percent}% funded</span>
        </div>
      </div>

      <p className="text-sm">{project.summary}</p>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full h-11">Invest</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Invest in {project.name}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-3">
            <label className="text-sm" htmlFor="amount">Amount (USD)</label>
            <Input id="amount" type="number" min={10} value={amount} onChange={(e) => setAmount(Number(e.currentTarget.value || 0))} />
            <Button className="mt-2">Confirm Investment</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}


