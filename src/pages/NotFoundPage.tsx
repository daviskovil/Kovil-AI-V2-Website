'use client'

import { motion } from "motion/react"
import { ArrowRight, Home } from "lucide-react"
import Link from "next/link"
import { Button } from "../components/ui/button"

export default function NotFoundPage() {
  return (
    <>

      <div className="pt-20 min-h-screen bg-background flex items-center">
        <div className="max-w-2xl mx-auto px-6 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="font-mono text-accent text-sm tracking-widest uppercase mb-4">404 — Page not found</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              This page doesn't exist.
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              The page you're looking for may have moved or no longer exists. Let's get you back on track.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button variant="accent" size="lg" className="rounded-full px-8">
                  <Home className="mr-2 h-4 w-4" /> Back to Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  Contact us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
