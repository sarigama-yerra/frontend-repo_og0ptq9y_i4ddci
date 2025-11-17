import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="get-started" className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Hire and get hired the new way</h3>
        <p className="mt-3 text-gray-600">Start with one global profile or one company workspace. The rest is automated.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">I'm a candidate <ArrowRight className="ml-2 h-4 w-4" /></a>
          <a href="#" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black">I'm a recruiter <ArrowRight className="ml-2 h-4 w-4" /></a>
        </div>
        <p className="mt-4 text-xs text-gray-500">No credit card required • Free to start</p>
      </div>
    </section>
  )
}
