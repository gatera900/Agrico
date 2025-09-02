export type Project = {
  id: string
  name: string
  location: string
  image: string
  targetAmount: number
  fundedAmount: number
  farmer: string
  summary: string
}

export const mockProjects: Project[] = [
  {
    id: "maize-nyanza",
    name: "Maize Expansion",
    location: "Nyanza, Kenya",
    image: "/portrait-countryside-worker-posing.jpg",
    targetAmount: 25000,
    fundedAmount: 13800,
    farmer: "Jane Mwangi",
    summary:
      "Scaling sustainable maize production with drip irrigation and soil health monitoring.",
  },
  {
    id: "avocado-rwanda",
    name: "Avocado Orchard Upgrade",
    location: "Northern Province, Rwanda",
    image: "/hands-holding-soil-earth-dirt.jpg",
    targetAmount: 18000,
    fundedAmount: 9200,
    farmer: "Kamanzi Patrick",
    summary: "Cold-chain upgrade to reduce post-harvest losses and increase exports.",
  },
  {
    id: "rice-tanzania",
    name: "Rice Paddy Efficiency",
    location: "Morogoro, Tanzania",
    image: "/agriculture-healthy-food.jpg",
    targetAmount: 30000,
    fundedAmount: 20400,
    farmer: "Asha Juma",
    summary:
      "Solar pumps and field sensors to optimize water usage and improve yields.",
  },
]


