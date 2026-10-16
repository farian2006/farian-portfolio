const AboutMe = () => {
  return (
    <section id="aboutMe" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-14">
          
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="card border border-base-300 bg-base-200 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:col-span-2">
            <div className="card-body p-5 sm:p-8 lg:p-10">
              <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                A Little About Myself
              </h3>

              <div className="space-y-4 text-sm leading-7 text-base-content/80 sm:text-base sm:leading-8">
                <p>
                  I am currently pursuing a BSc in Computer Science and
                  Engineering at BRAC University, with a growing interest in
                  Full-Stack Web Development, JavaScript, and app
                  development. As an aspiring developer, I am continuously
                  learning new technologies, exploring modern development tools,
                  and strengthening my programming and problem-solving skills. I
                  enjoy learning by building projects and turning ideas into
                  practical, user-friendly digital solutions.
                </p>

                <p>
                  Originally from Patuakhali, I have been actively involved in
                  social and volunteer organizations throughout my academic
                  journey. During my SSC and HSC years, I served as Joint
                  Secretary of PGC Science Club and as a General Member of
                  Patuakhali Youth Club, Red Crescent Society, and National
                  Children&apos;s Task Force.
                </p>

                <p>
                  Currently, I serve as General Secretary of Patuakhali
                  Volunteers and as an Events Member of the BRAC University
                  Esports Club. These roles have helped me develop leadership,
                  teamwork, communication, and organizational skills while
                  contributing to my community.
                </p>

                <p>
                  My goal is to strengthen my technical expertise, gain
                  practical experience in software development, and grow into a
                  skilled developer while continuing to make a positive impact
                  through social work and community involvement.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="card border border-base-300 bg-base-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl">
              <div className="card-body p-5 sm:p-6">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl text-primary">
                  💻
                </div>

                <h3 className="card-title text-lg">Technical Interests</h3>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="badge badge-outline">
                    Full-Stack Development
                  </span>
                  <span className="badge badge-outline">JavaScript</span>
                  <span className="badge badge-outline">React</span>
                  <span className="badge badge-outline">Next.js</span>
                </div>
              </div>
            </div>

            <div className="card border border-base-300 bg-base-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl">
              <div className="card-body p-5 sm:p-6">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl text-primary">
                  🤝
                </div>

                <h3 className="card-title text-lg">Leadership & Community</h3>

                <p className="text-sm leading-6 text-base-content/70">
                  Volunteering, event management, teamwork, and community
                  engagement.
                </p>

                <a
                  href="#voluenteer"
                  className="mt-2 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:opacity-75"
                >
                  Explore My Activities <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
