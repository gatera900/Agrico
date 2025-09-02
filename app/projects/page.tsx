"use client"

import { useState, useMemo } from "react"
import { useProjects } from "@/hooks/useProjects"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilters, ProjectFiltersModal } from "@/components/project-filters"

export default function ProjectsPage() {
  const { data, isLoading } = useProjects()
  const [filters, setFilters] = useState<ProjectFilters>({})

  const filtered = useMemo(() => {
    if (!data) return []
    return data.filter((p) => {
      const percent = Math.round((p.fundedAmount / p.targetAmount) * 100)
      const matchesLocation = filters.location
        ? p.location.toLowerCase().includes(filters.location.toLowerCase())
        : true
      const matchesMin = filters.minPercent !== undefined ? percent >= filters.minPercent : true
      const matchesMax = filters.maxPercent !== undefined ? percent <= filters.maxPercent : true
      return matchesLocation && matchesMin && matchesMax
    })
  }, [data, filters])

  return (
    <div className="container px-4 py-6 md:py-10">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <ProjectFiltersModal value={filters} onChange={setFilters} />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {filtered.map((p) => (
            <ProjectCard
              key={p.id}
              image={p.image}
              name={p.name}
              location={p.location}
              fundedAmount={p.fundedAmount}
              targetAmount={p.targetAmount}
            />
          ))}
        </div>
      )}
    </div>
  )
}


