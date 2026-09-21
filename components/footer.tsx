export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} MS Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
