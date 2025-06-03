import React from "react"
import { cn } from "@/lib/utils"

export function MinimalistServicesList({ 
  title = "Algunes de les situacions tractades a consulta poden ser:",
  services,
  className 
}) {
  return (
    <section className={cn("max-w-4xl mx-auto px-6 bg-white", className)}>
      {title && (
        <h1 className="text-3xl font-light text-gray-800 mb-16 text-center">{title}</h1>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group cursor-pointer"
          >
            <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md bg-white">
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                {service}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}