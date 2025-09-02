"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export type ProjectFilters = {
  location?: string
  minPercent?: number
  maxPercent?: number
}

type Props = {
  value: ProjectFilters
  onChange: (v: ProjectFilters) => void
}

export function ProjectFiltersModal({ value, onChange }: Props) {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState<ProjectFilters>(value)

  const apply = () => {
    onChange(draft)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-10">Filters</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter projects</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="location">Location</Label>
            <Select
              value={draft.location ?? ""}
              onValueChange={(v) => setDraft((d) => ({ ...d, location: v || undefined }))}
            >
              <SelectTrigger id="location">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any</SelectItem>
                <SelectItem value="Kenya">Kenya</SelectItem>
                <SelectItem value="Rwanda">Rwanda</SelectItem>
                <SelectItem value="Tanzania">Tanzania</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="min">Min funded %</Label>
            <Input
              id="min"
              type="number"
              min={0}
              max={100}
              value={draft.minPercent ?? ""}
              onChange={(e) => setDraft((d) => ({ ...d, minPercent: e.currentTarget.value ? Number(e.currentTarget.value) : undefined }))}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="max">Max funded %</Label>
            <Input
              id="max"
              type="number"
              min={0}
              max={100}
              value={draft.maxPercent ?? ""}
              onChange={(e) => setDraft((d) => ({ ...d, maxPercent: e.currentTarget.value ? Number(e.currentTarget.value) : undefined }))}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={() => setOpen(false)}>Close</Button>
          <Button onClick={apply}>Apply</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}


