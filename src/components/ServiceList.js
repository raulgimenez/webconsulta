import React from "react"
import { cn } from "@/lib/utils"

export function MinimalistServicesList({ 
  title,
  services,
  className 
}) {
  return (
    <section className={cn("max-w-5xl mx-auto px-6 bg-white", className)}>
      {title && (
        <h1 className="mx-auto max-w-3xl text-3xl font-light leading-tight text-gray-800 mb-12 text-center">
          {title}
        </h1>
      )}
      
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group cursor-pointer"
          >
            <div className="flex h-full items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-verdigris" aria-hidden="true" />
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-900">
                {service}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
