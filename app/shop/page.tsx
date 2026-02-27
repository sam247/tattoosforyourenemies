export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-12 text-center text-3xl font-bold uppercase tracking-tight text-black drop-shadow-[0_0_20px_rgba(0,0,0,0.06)] md:text-4xl">
        Shop
      </h1>
      <div className="mx-auto max-w-md rounded-lg border border-black/20 bg-gray-50 p-12 text-center">
        <p className="text-lg text-gray-600">
          Shop coming soon. Follow us on{" "}
          <a
            href="https://instagram.com/tattoosforyourenemies"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-black underline transition-opacity hover:opacity-70"
          >
            Instagram
          </a>{" "}
          for updates.
        </p>
      </div>
    </div>
  );
}
