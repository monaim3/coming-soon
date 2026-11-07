import Image from "next/image";
import NotifyForm from "./NotifyForm";

export default function Home() {
  return (
    <main className="page">
      <div className="speedlines" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      <section className="card">
        <Image
          src="/logo.png"
          alt="Jayma Motors"
          width={1299}
          height={603}
          priority
          className="logo"
        />

        <p className="eyebrow">
          <span className="dot" /> Under Construction
        </p>

        <h1>
          Something fast is <span className="accent">pulling in.</span>
        </h1>

        <p className="lead">
          We&apos;re tuning up our new website. Soon you&apos;ll be able to browse our
          vehicles, book test drives and get in touch — all in one place.
        </p>

        <div className="track" role="progressbar" aria-label="Site build progress" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
          <div className="track-fill" />
        </div>
        <p className="track-label">
          <span>Build progress</span>
          <span>80%</span>
        </p>

        <NotifyForm />
      </section>

      <footer className="footer">© {new Date().getFullYear()} Jayma Motors. All rights reserved.</footer>
    </main>
  );
}
