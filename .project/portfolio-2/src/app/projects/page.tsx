import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import projects from '@/static/JSON/Projects.json'

export default function Projects() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects["projects"].map((project, index) => (
          <Card key={index} className="flex flex-col h-full transition-all hover:shadow-lg">
            {project.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="object-cover rounded-t-lg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.technologies && project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">{tech.toString()}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              {project.codeLink && (
                <Button variant="outline" asChild>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              )}
              {project.appLink && (
                <Button asChild>
                  <a href={project.appLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>


      {/* small projects */}
      <hr className="my-8"/>
      <h1 className="text-4xl font-bold mb-8">Mini Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects["small-projects"].map((project, index) => (
          <Card key={index} className="flex flex-col h-full transition-all hover:shadow-lg">
            {project.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="object-cover rounded-t-lg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
            </CardContent>
            <CardFooter className="gap-2">
              {project.codeLink && (
                <Button variant="outline" asChild>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
              )}
              {project.appLink && (
                <Button asChild>
                  <a href={project.appLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}