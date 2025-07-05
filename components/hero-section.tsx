import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code, Rocket, Zap } from "lucide-react"

export function HeroSection() {
  const technologies = ["React", "Next.js", "TypeScript", "Express", "Python", "AWS", "PostgreSQL","MySQL", "MongoDB","Java","BlockChain"]

  return (
    <section className="w-full py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-black dark:text-white">
              We'll Give You Projects
              <span className="block text-gray-600 dark:text-gray-400">ASAP</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Get high-quality, production-ready projects built with the latest technologies. Fast delivery, live demos,
              and complete documentation included.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-4 py-2 text-sm border-gray-200 dark:border-gray-700 bg-white dark:bg-black"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-8 py-4 text-lg"
            >
              <Rocket className="w-5 h-5 mr-2" />
              View Live Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-200 dark:border-gray-700 px-8 py-4 text-lg bg-transparent"
            >
              <Code className="w-5 h-5 mr-2" />
              See Code Samples
            </Button>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-black dark:bg-white rounded-lg mx-auto flex items-center justify-center">
                <Zap className="w-6 h-6 text-white dark:text-black" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">Projects delivered within 1 week</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-black dark:bg-white rounded-lg mx-auto flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-white dark:text-black" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Live Demos</h3>
              <p className="text-gray-600 dark:text-gray-400">Every Full stack projects comes with a live demo link</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-black dark:bg-white rounded-lg mx-auto flex items-center justify-center">
                <Code className="w-6 h-6 text-white dark:text-black" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Modern Tech</h3>
              <p className="text-gray-600 dark:text-gray-400">Built with the latest technologies and best practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
