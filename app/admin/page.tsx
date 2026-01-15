"use client"

import { DashboardShell } from "@/app/components/cms/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Plus, MoreVertical, Star, Eye, Calendar, ArrowUpRight, Trash, Edit2 } from "lucide-react"
import { initialData, type Project } from "@/lib/data"
import { ProjectDialog } from "@/app/components/cms/project-dialog"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu"

export default function AdminPage() {
  const [projects, setProjects] = useState<Project[]>(initialData.projects)
  const [editingProject, setEditingProject] = useState<Project | undefined>(undefined)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSave = (project: Project) => {
    setProjects((prev) => {
      const index = prev.findIndex((p) => p.id === project.id)
      if (index > -1) {
        const newProjects = [...prev]
        newProjects[index] = project
        return newProjects
      }
      return [...prev, project]
    })
  }

  const handleDelete = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Recents</h1>
          <p className="text-muted-foreground">Manage your latest portfolio work and updates.</p>
        </div>
        <Button
          className="gap-2"
          onClick={() => {
            setEditingProject(undefined)
            setIsDialogOpen(true)
          }}
        >
          <Plus className="w-4 h-4" />
          Add Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg"
          >
            <div className="aspect-video relative overflow-hidden bg-muted">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="secondary" size="icon" className="h-8 w-8 glass">
                  <Star className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <CardHeader className="p-4 space-y-1">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold truncate pr-2">{project.title}</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-card border-border/50">
                    <DropdownMenuItem
                      onClick={() => {
                        setEditingProject(project)
                        setIsDialogOpen(true)
                      }}
                      className="gap-2"
                    >
                      <Edit2 className="w-4 h-4" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(project.id)}
                      className="gap-2 text-destructive focus:text-destructive"
                    >
                      <Trash className="w-4 h-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardDescription className="line-clamp-2 text-xs">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex items-center justify-between border-t border-border/30 mt-2">
              <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" /> 2.4k
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> 2 days ago
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2 text-xs gap-1 hover:text-primary"
                onClick={() => {
                  setEditingProject(project)
                  setIsDialogOpen(true)
                }}
              >
                Edit <ArrowUpRight className="w-3 h-3" />
              </Button>
            </CardContent>
          </Card>
        ))}

        <Card
          onClick={() => {
            setEditingProject(undefined)
            setIsDialogOpen(true)
          }}
          className="flex flex-col items-center justify-center border-dashed border-2 border-border/50 bg-transparent hover:bg-muted/10 transition-colors cursor-pointer min-h-[280px]"
        >
          <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mb-4">
            <Plus className="w-6 h-6 text-muted-foreground" />
          </div>
          <p className="font-medium text-muted-foreground text-sm">Create new project</p>
        </Card>
      </div>

      <ProjectDialog
        key={editingProject?.id || "new"}
        project={editingProject}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSave={handleSave}
      />

      <div className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight">Active Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Site Visitors", value: "12.8k", trend: "+12%" },
            { label: "Project Views", value: "4.2k", trend: "+5%" },
            { label: "Form Leads", value: "24", trend: "+18%" },
            { label: "Avg. Engagement", value: "4m 2s", trend: "-2%" },
          ].map((stat) => (
            <Card key={stat.label} className="bg-card/30 border-border/40 backdrop-blur-md">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                </div>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${stat.trend.startsWith("+") ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"}`}
                >
                  {stat.trend}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardShell>
  )
}
