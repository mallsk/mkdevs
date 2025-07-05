import { Zap } from "lucide-react"

export function OfferBanner() {
  return (
    <div className="w-full h-8 bg-yellow-400 dark:bg-yellow-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center space-x-2">
          <Zap className="lg:w-5 w-4 h-4 lg:h-5 text-black" />
          <span className="text-black font-semibold lg:p-1 p-1 text-sm lg:text-lg">
            Flat 10% OFF for building projects - Limited Time Offer!
          </span>
          <Zap className="lg:w-5 w-4 h-4 lg:h-5 text-black" />
        </div>
      </div>
    </div>
  )
}
