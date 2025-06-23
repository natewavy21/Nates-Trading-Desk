// Nate's Trading Desk - Clean Institutional MVP (Phase 1)

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Nate’s Trading Desk</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl">
            A modern investment firm built on innovation, precision, and access to high-performing digital strategies. Welcome to the future of wealth management.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Strategies</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">Alpha Vault</h3>
              <p className="text-gray-600">Access DeFi options, futures, and innovative yield-generation strategies through a high-tech vault model designed for dynamic investors.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Shadow Edge</h3>
              <p className="text-gray-600">High-frequency AI-powered scalping strategies across crypto futures. Designed for high-speed, high-precision performance.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Genesis Pool</h3>
              <p className="text-gray-600">Private exposure to AI, pre-IPO tech, and frontier startups. Early-stage alpha curated for accredited investors.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Atlas Flow</h3>
              <p className="text-gray-600">A stable-growth vault focused on Bitcoin, Ethereum, and long-term trend-based strategies for wealth preservation and appreciation.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Request Access</h2>
          <p className="text-gray-600 mb-4">We currently operate by invitation only. If you're interested in learning more or gaining access to one of our strategies, please submit a request below.</p>
          <a 
            href="https://tally.so/r/wMdrME"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Submit Access Request
          </a>
        </section>

        <footer className="text-sm text-gray-500 border-t pt-8">
          © {new Date().getFullYear()} Nate’s Trading Desk. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
