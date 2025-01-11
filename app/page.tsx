export default function Home() {
  return (
    <div className="container mx-auto border h-dvh border-zinc-700 text-zinc-400 bg-zinc-900">
      <h1 className="border-b p-4 text-5xl border-zinc-700 text-zinc-50">Arnav Bharti</h1>
      <section className="border-b p-4 border-zinc-700">
        <h2 className="text-4xl text-zinc-100 pb-2">About</h2>
        <p>
          I enjoy machine learning and building apps. Outside of programming, I
          like Minecraft, Game of Thrones, and Harry Potter.
        </p>
        <ul className="list-disc ml-4">
          <li>Occupation: Student / Software Engineer.</li>
          <li>Location: India</li>
          <li>Education: BE Computer Science at BITS Pilani</li>
        </ul>
      </section>
      <section className="border-b p-4 border-zinc-700">
        <h2 className="text-4xl text-zinc-100 pb-2">Links</h2>
        <ul>
          <li><a href="https://linkedin.com/in/arnavbharti01/" rel="noopener noreferrer" target="_blank" className="underline">LinkedIn</a></li>
          <li><a href="https://github.com/arnavbharti/" rel="noopener noreferrer" target="_blank" className="underline">GitHub</a></li>
          <li><a href="https://x.com/arnavbharti01/" rel="noopener noreferrer" target="_blank" className="underline">X</a></li>
          <li><a href="https://anolpqiqdkwraodz.public.blob.vercel-storage.com/arnav_bharti_resume-Cmrd1ueufQoylVTcUcimIMxD2R4gA0.pdf" rel="noopener noreferrer" target="_blank" className="underline"  >Resume</a></li>
        </ul>
      </section>
      <address className="border-b p-4 border-zinc-700">
        <a href="mailto:f20221585@pilani.bits-pilani.ac.in" className="underline">Email</a>
      </address>
    </div>
  );
}
