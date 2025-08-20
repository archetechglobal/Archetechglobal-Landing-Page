import React from 'react'

export const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-400">Who We Are</h2>
                <p className="text-muted-foreground md:text-xl">
                  ArcheTech is a team of passionate technologists dedicated to helping businesses leverage the power of
                  modern technology. We believe in creating solutions that are not only technically excellent but also
                  user-friendly and scalable.
                </p>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower businesses with innovative technology solutions that drive growth and efficiency.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the leading technology partner for businesses seeking to thrive in the digital age.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-full w-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-3xl" />
                  <div className="relative h-full w-full rounded-lg border bg-card p-8 shadow-lg gradient-border">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4 text-center">
                        <div className="text-3xl font-bold">2+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4 text-center">
                        <div className="text-3xl font-bold">50+</div>
                        <div className="text-sm text-muted-foreground">Projects Completed</div>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4 text-center">
                        <div className="text-3xl font-bold">10+</div>
                        <div className="text-sm text-muted-foreground">Happy Clients</div>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4 text-center">
                        <div className="text-3xl font-bold">10+</div>
                        <div className="text-sm text-muted-foreground">Team Members</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
