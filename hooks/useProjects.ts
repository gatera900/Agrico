"use client"

import { useQuery } from "@tanstack/react-query"
import { mockProjects, type Project } from "@/lib/projects"

export function useProjects() {
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 300))
      return mockProjects
    },
  })
}


