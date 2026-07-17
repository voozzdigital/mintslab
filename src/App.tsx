/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Portfolio from './components/Portfolio';
import DataDriven from './components/DataDriven';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="w-full min-h-screen bg-[#050510] text-[#ffffff] selection:bg-indigo-500/30">
      <Hero />
      <Methodology />
      <Portfolio />
      <DataDriven />
      <Footer />
    </main>
  );
}
