import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaStackOverflow ,
  FaRegCopyright
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Get In Touch
          </p>

          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-base-content/70 sm:text-base">
            Have an idea, a project, or an opportunity to share? Feel free to
            reach out. I&apos;d love to connect with you!
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-base-300 bg-base-200 p-6 shadow-lg transition-all duration-300 hover:border-primary/40 hover:shadow-xl sm:p-10 md:p-12">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm transition-transform duration-300 hover:scale-110 sm:h-20 sm:w-20">
              <FaEnvelope size={32} />
            </div>
            <h3 className="mt-6 text-2xl font-bold sm:text-3xl">
              Have Something in Mind?
            </h3>
            <p className="mt-3 text-sm leading-7 text-base-content/70 sm:text-base">
              I&apos;m always open to discussing web development, collaborating
              on exciting projects, and exploring new opportunities.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=fariantazwar%40gmail.com&su=Portfolio%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-7 w-full rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-auto sm:px-8"
            >
              <FaPaperPlane size={16} />
              Get in Touch
            </a>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-base-300" />
              <span className="text-xs font-medium uppercase tracking-widest text-base-content/50">
                Or find me on
              </span>
              <div className="h-px flex-1 bg-base-300" />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/farian2006"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-base-300 bg-base-100 text-base-content transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-content sm:h-14 sm:w-14"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/farian-tazwar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-base-300 bg-base-100 text-base-content transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-content sm:h-14 sm:w-14"
              >
                <FaLinkedin size={22} />
              </a>
               <a
                href="https://stackoverflow.com/users/33148244/farian-tazwar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my Stack OverFlow profile"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-base-300 bg-base-100 text-base-content transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-content sm:h-14 sm:w-14"
              >
              <FaStackOverflow size={22}/>

              </a>
             
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-base-content/60">
              <FaMapMarkerAlt className="text-primary" />
              Dhaka , Bangladesh
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
