export default function Home() {
  return (
    <main className="container mx-auto mt-28 px-5 flex flex-col">
      <h1 className="text-xl font-bold">Arnav Bharti</h1>
      <p className="mt-2">
        I am an upcoming software engineering intern at Stripe
      </p>
      <AreasOfInterest />
      <Education />
      <Resume />
      <Contacts />
    </main>
  );
}

function AreasOfInterest() {
  return (
    <section>
      <h2 className="mt-2 text-lg font-semibold">Areas of Interest</h2>
      <ul className="list-disc list-inside">
        <li>Web Development</li>
        <li>App Development</li>
        <li>Large Language Models</li>
      </ul>
    </section>
  );
}

function Education() {
  return (
    <section>
      <h2 className="mt-2 text-lg font-semibold">Education</h2>
      <ul className="list-disc list-inside">
        <li>BE in Computer Science, BITS&nbsp;Pilani</li>
        <li>MS in Biology, BITS&nbsp;Pilani</li>
      </ul>
    </section>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline decoration-blue-600 hover:text-blue-800 hover:decoration-blue-800"
    >
      {children}
    </a>
  );
}

function Resume() {
  return (
    <ExternalLink href="https://mbtwhvynklaynfur.public.blob.vercel-storage.com/Arnav%20Bharti%20Resume.pdf">
      Resume
    </ExternalLink>
  );
}

function Contacts() {
  return (
    <address className="not-italic">
      <h2 className="mt-2 text-lg font-semibold">Contact</h2>
      <ul className="list-disc list-inside">
        <li>
          Email:{" "}
          <ExternalLink href="mailto:arnavpublic@icloud.com">
            Personal
          </ExternalLink>{" "}
          |{" "}
          <ExternalLink href="mailto:f20221585@pilani.bits-pilani.ac.in">
            University
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/arnavbharti">
            arnavbharti
          </ExternalLink>{" "}
          on GitHub
        </li>
        <li>
          <ExternalLink href="https://linkedin.com/in/arnavbharti01">
            arnavbharti01
          </ExternalLink>{" "}
          on LinkedIn
        </li>
        <li>
          <ExternalLink href="https://x.com/arnavbharti01">
            arnavbharti01
          </ExternalLink>{" "}
          on X
        </li>
      </ul>
    </address>
  );
}
