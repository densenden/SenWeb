import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="section-title">
                Build the future,<br />
                while building<br />
                your career.
              </h1>
              <p className="section-subtitle mt-6">
                Studio Sen's Student & Early Talent programs provide structure to help you develop technical skills and make meaningful connections.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="button-primary">
                  See open roles →
                </button>
                <button className="button-secondary">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="horizontal-line" />

      {/* Programs Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-normal mb-12">Find your perfect place</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Program Card 1 */}
            <div className="group">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="/images/new-grads.jpg"
                  alt="New Grads + Early Talent"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm text-gray-500 mb-2">NEW GRADS + EARLY TALENT</h3>
              <p className="text-base">
                We trust our people to solve daring challenges, expansively own outcomes, and bring their skills to make an impact from day one.
              </p>
            </div>

            {/* Program Card 2 */}
            <div className="group">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="/images/internships.jpg"
                  alt="Internships"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm text-gray-500 mb-2">INTERNSHIPS</h3>
              <p className="text-base">
                Our small, hands-on program provides structure to help interns develop technical skills and make meaningful connections within Studio Sen.
              </p>
            </div>

            {/* Program Card 3 */}
            <div className="group">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="/images/accelerate.jpg"
                  alt="Accelerate Internships"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm text-gray-500 mb-2">ACCELERATE INTERNSHIPS</h3>
              <p className="text-base">
                Studio Sen Accelerate is designed to reach students who may not have had prior exposure to technical opportunities in an academic or industry setting.
              </p>
            </div>

            {/* Program Card 4 */}
            <div className="group">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="/images/scholarships.jpg"
                  alt="Scholarships + Programs"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm text-gray-500 mb-2">SCHOLARSHIPS + PROGRAMS</h3>
              <p className="text-base">
                Studio Sen offers support for early talent in a variety of ways, from week-long development programs to scholarship opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 