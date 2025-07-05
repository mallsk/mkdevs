import { ExternalLink, Github, Code, Database, Cpu, Link } from "lucide-react"
import Java from "./logos/java"
import Codes from "./logos/code"
import Python from "./logos/python"
import Blockchain from "./logos/blockchain"

export default function ProjectsList() {
  const projectCategories = [
    {
      title: "FullStack",
      icon:<Codes />,
      description: "Complete web applications with frontend and backend",
      projects: [
        "E-commerce Platform",
        "Social Media Dashboard",
        "Task Management System",
        "Real Estate Portal",
        "Learning Management System",
        "Hotel Booking Platform",
      ],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Java",
      icon: <Java />,
      description: "Enterprise applications and microservices",
      projects: [
        "Banking Management System",
        "Inventory Management Tool",
        "Employee Portal System",
        "Library Management System",
        "Hospital Management System",
        "School Administration System",
      ],
      gradient: "from-orange-500 to-orange-100",
    },
    {
      title: "Python",
      icon: <Python />,
      description: "Data science, AI/ML, and automation projects",
      projects: [
        "AI Chatbot Application",
        "Data Analytics Dashboard",
        "Machine Learning Model",
        "Web Scraping Tool",
        "Automation Scripts",
        "Image Recognition System",
      ],
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Blockchain",
      icon: <Blockchain />,
      description: "Decentralized applications and smart contracts",
      projects: [
        "NFT Marketplace",
        "DeFi Trading Platform",
        "Cryptocurrency Wallet",
        "Smart Contract System",
        "Token Staking Platform",
        "Decentralized Voting App",
      ],
      gradient: "from-yellow-300 to-yello-900",
    },
  ]

  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-black dark:text-white">Project Categories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our diverse portfolio across different technology stacks. Each project comes with source code and
              live demo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectCategories.map((category, index) => {
              return (
                <div key={index} className="relative group">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Card Content */}
                  <div className="relative p-8 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-xl transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center`}
                      >
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black dark:text-white">{category.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
                      </div>
                    </div>

                    {/* Projects List */}
                    <div className="space-y-3 mb-6">
                      {category.projects.map((project, projectIndex) => (
                        <div
                          key={projectIndex}
                          className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                        >
                          <span className="text-black dark:text-white font-medium">{project}</span>
                          {/* <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                              <ExternalLink className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                              <Github className="w-3 h-3" />
                            </Button>
                          </div> */}
                        </div>
                      ))}
                    </div>

                    {/* View All Button
                    <Button
                      className={`w-full bg-gradient-to-r ${category.gradient} text-white hover:opacity-90 transition-opacity duration-200`}
                    >
                      View All {category.title} Projects
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button> */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
