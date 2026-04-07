import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
    title: string
    description: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
    imageUrl?: string
  }

const projects: Project[] = [
    {
      title: "Modern Portfolio",
      description: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design and smooth animations. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, adipisci.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://your-portfolio.vercel.app"
    },
    {
        title: "Modern Portfolio 2",
        description: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design and smooth animations.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
        githubUrl: "https://github.com/yourusername/portfolio",
        liveUrl: "https://your-portfolio.vercel.app"
      },
      {
        title: "Modern Portfolio 3",
        description: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design and smooth animations. Lorem ipsum dolor sit amet consectetur adipisicing elit.adipisicing elit. Dolore, adipisci.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
        githubUrl: "https://github.com/yourusername/portfolio",
        liveUrl: "https://your-portfolio.vercel.app"
      },
  ]

function BlogSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className='text-4xl md:text-5xl font-bold text-center mb-8'>Blogs and News</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col h-full transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className='flex flex-wrap gap-2 mb-4'>
                {
                    project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">{tech}</Badge>
                    ))
                }
                </div>
              {project.description}
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="outline">
                Something
              </Button>
              <Button variant="default">
                👍
              </Button>
              <Button variant="ghost">
                🐱
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default BlogSection