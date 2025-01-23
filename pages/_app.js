import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col ">
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
