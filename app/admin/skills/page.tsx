"use client"

import { DashboardShell } from "@/app/components/cms/dashboard-shell"
import { Card, CardContent } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Plus, MoreVertical, Trash, Edit2, Code, Server, Wrench, Palette } from "lucide-react"
import { initialData, type Skill } from "@/lib/data"
import { useState } from "react"
import { SkillDialog } from "@/app/components/cms/skill-dialog"
import { Progress } from "@/app/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu"

const categoryIcons = {
  Frontend: Code,
  Backend: Server,
  Tools: Wrench,
  Design: Palette,
}

export default function SkillsAdminPage() {
  const [skills, setSkills] = useState<Skill[]>(initialData.skills)
  const [editingSkill, setEditingSkill] = useState<Skill | undefined>(undefined)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSave = (skill: Skill) => {
    setSkills((prev) => {
      const index = prev.findIndex((s) => s.id === skill.id)
      if (index > -1) {
        const newSkills = [...prev]
        newSkills[index] = skill
        return newSkills
      }
      return [...prev, skill]
    })
  }

  const handleDelete = (id: string) => {
    setSkills((prev) => prev.filter((s) => s.id !== id))
  }

  const categories = ["Frontend", "Backend", "Tools", "Design"] as const

  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Skills</h1>
          <p className="text-muted-foreground">Manage your technical arsenal and proficiencies.</p>
        </div>
        <Button
          className="gap-2"
          onClick={() => {
            setEditingSkill(undefined)
            setIsDialogOpen(true)
          }}
        >
          <Plus className="w-4 h-4" />
          Add Skill
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {categories.map((category) => {
          const Icon = categoryIcons[category]
          const categorySkills = skills.filter((s) => s.category === category)

          return (
            <div key={category} className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-semibold border-b border-border/50 pb-2">
                <Icon className="w-5 h-5 text-primary" />
                <h2>{category}</h2>
                <span className="text-xs text-muted-foreground ml-auto">{categorySkills.length} skills</span>
              </div>

              <div className="space-y-3">
                {categorySkills.length > 0 ? (
                  categorySkills.map((skill) => (
                    <Card key={skill.id} className="bg-card/30 border-border/40 hover:border-primary/30 transition-all">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.proficiency}%</span>
                          </div>
                          <Progress value={skill.proficiency} className="h-1.5" />
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-card border-border/50">
                            <DropdownMenuItem
                              onClick={() => {
                                setEditingSkill(skill)
                                setIsDialogOpen(true)
                              }}
                              className="gap-2"
                            >
                              <Edit2 className="w-4 h-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleDelete(skill.id)}
                              className="gap-2 text-destructive focus:text-destructive"
                            >
                              <Trash className="w-4 h-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="h-24 flex items-center justify-center border border-dashed rounded-lg border-border/50 text-muted-foreground text-sm">
                    No {category} skills added yet.
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <SkillDialog
        key={editingSkill?.id || "new"}
        skill={editingSkill}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSave={handleSave}
      />
    </DashboardShell>
  )
}
