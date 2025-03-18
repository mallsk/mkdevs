"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background pl-20 pr-20">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold">
          MKDevs
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        <Button variant="outline" size="sm" className="md:flex">
          Resume
        </Button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container flex flex-col items-center text-center gap-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge className="mb-4">Available for work</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Hi, I am <span className="text-primary">Mallikarjun</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A passionate frontend developer creating beautiful, responsive web experiences
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button asChild size="lg">
            <a href="#contact">Get in touch</a>
          </Button>
          <Button variant="outline" size="lg">
            View my work
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
          <span>Scroll down</span>
          <ArrowDown className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}

function AnimatedSection({ children, id }: { children: React.ReactNode; id?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id={id} ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        {children}
      </motion.div>
    </section>
  )
}

function About() {
  return (
    <AnimatedSection id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="text-muted-foreground">
            I am a frontend developer with a passion for creating beautiful, responsive, and user-friendly websites. With
            over 5 years of experience in web development, I specialize in React, Next.js, and modern CSS frameworks.
          </p>
          <p className="text-muted-foreground">
            My approach combines technical expertise with an eye for design, ensuring that the websites I build are not
            only functional but also visually appealing and intuitive to use.
          </p>
          <div className="pt-4">
            <Button variant="outline" className="gap-2">
              <Mail className="w-4 h-4" />
              Get in touch
            </Button>
          </div>
        </div>
        <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">Your Photo Here</div>
        </div>
      </div>
    </AnimatedSection>
  )
}

function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform built with Next.js and Tailwind CSS.",
      tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description: "A drag-and-drop task management application with user authentication.",
      tags: ["React", "Firebase", "Framer Motion", "TypeScript"],
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description: "A creative portfolio website for a photographer with image gallery.",
      tags: ["Next.js", "GSAP", "Tailwind CSS", "Sanity.io"],
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
      github: "#",
    },
  ]

  return (
    <AnimatedSection id="projects">
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground">
            Here are some of my recent projects. Each one was carefully crafted with attention to detail and user
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link: string;
  github: string;
}
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group">
        <div className="overflow-hidden aspect-video relative">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button asChild variant="outline" size="sm" className="gap-1">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          </Button>
          <Button asChild variant="outline" size="sm" className="gap-1">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

function Skills() {
  const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "TypeScript", level: 70 },
    { name: "Tailwind CSS", level: 85 },
    { name: "UI/UX Design", level: 65 },
    { name: "Git & GitHub", level: 80 },
  ]

  return (
    <AnimatedSection id="skills">
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Skills & Expertise</h2>
          <p className="text-muted-foreground">
            I have worked with a variety of technologies and tools in the web development ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

function SkillBar({ skill, index }: { skill: { name: string; level: number }; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </motion.div>
  )
}

function Contact() {
  return (
    <AnimatedSection id="contact">
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-muted-foreground">Have a project in mind or want to chat? Feel free to reach out!</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>Fill out the form below and I will get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input id="name" className="w-full p-2 rounded-md border bg-background" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 rounded-md border bg-background"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  className="w-full p-2 rounded-md border bg-background"
                  placeholder="What is this regarding?"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-2 rounded-md border bg-background resize-none"
                  placeholder="Your message..."
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  )
}

function Footer() {
  return (
    <footer className="border-t py-8 mt-12">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:your.email@example.com" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}


