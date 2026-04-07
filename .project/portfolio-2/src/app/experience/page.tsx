"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import experience from "@/static/JSON/Experience.json"
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Experience() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <div className="space-y-6">
        {experience['experience'].map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center"> 
          <div className="w-full md:w-1/4 flex items-center justify-center h-full">
            {exp.image && <Image src={exp.image} alt={exp.name} width={200} height={200} className="border-4 m-4 p-2" />}
          </div>
          <Card className="w-full md:w-3/4 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle className="text-2xl">{exp.role}</CardTitle>
                {exp.exp && <Badge variant={'outline'}>{exp.exp}</Badge>}
              </div>
              <CardDescription>
                {exp.name} • {exp.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside mb-4 space-y-2">
                {exp.description && exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="flex justify-between">
              <div className="flex flex-wrap gap-2">
                {exp.badges && exp.badges.map((skill, i) => (
                  <Badge key={i} variant="secondary">{skill.toString()}</Badge>
                ))}
              </div>
              {exp.blogLink && (
                <Button
                  className="default"
                  onClick={() => window.open(exp.blogLink, "_blank")}
                >
                  {exp.blogName || "Read More"}
                </Button>
              )}
              </div>
            </CardContent>
          </Card>
          </div>
        ))}
      </div>
    </main>
  )
}