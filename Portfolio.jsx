import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="p-6 space-y-10 max-w-5xl mx-auto">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-4xl font-bold text-center">
        Souvik Dey – Creative Portfolio
      </motion.h1>

      <section className="grid md:grid-cols-2 gap-6">
        <Card><CardContent>
          <h2 className="text-xl font-semibold mb-2">Product Posters</h2>
          <p className="text-sm mb-2">Brand-aligned visuals for promotions and advertising.</p>
          <Button variant="link" asChild><a href="https://drive.google.com/drive/folders/1l7ywK33x0t84GOU5PInKPTsBNcbN-zfD?usp=sharing" target="_blank">View Gallery</a></Button>
        </CardContent></Card>

        <Card><CardContent>
          <h2 className="text-xl font-semibold mb-2">Photo Manipulation</h2>
          <p className="text-sm mb-2">Creative edits showing surreal and artistic compositions.</p>
          <Button variant="link" asChild><a href="https://drive.google.com/drive/folders/1OHBVGzCbnAabAYc35-Vyq8PVk7HeeD0G?usp=sharing" target="_blank">View Gallery</a></Button>
        </CardContent></Card>

        <Card><CardContent>
          <h2 className="text-xl font-semibold mb-2">Email Campaigns</h2>
          <p className="text-sm mb-2">Visually engaging and structured email designs for brands.</p>
          <Button variant="link" asChild><a href="https://drive.google.com/drive/folders/1rO4q8PvWa3YrIOMfRNNf7NMaJeO2moKp?usp=sharing" target="_blank">View Samples</a></Button>
        </CardContent></Card>

        <Card><CardContent>
          <h2 className="text-xl font-semibold mb-2">Videography & Editing</h2>
          <p className="text-sm mb-2">Storytelling through high-quality visuals and transitions.</p>
          <Button variant="link" asChild><a href="https://drive.google.com/drive/folders/1eWvA16BAOwcyiFyW5pd9FtZwPFYF0zH3?usp=sharing" target="_blank">Watch Now</a></Button>
        </CardContent></Card>

        <Card><CardContent>
          <h2 className="text-xl font-semibold mb-2">Animation</h2>
          <p className="text-sm mb-2">Creative motion graphics and animated elements for content.</p>
          <Button variant="link" asChild><a href="https://drive.google.com/drive/folders/1Hc0pWhBiGbKpAphb-k3I3anT8CgPTHLM?usp=sharing" target="_blank">View Work</a></Button>
        </CardContent></Card>

        <Card><CardContent>
          <h2 className="text-xl font-semibold mb-2">Portrait Photography</h2>
          <p className="text-sm mb-2">Professional portraits capturing essence and emotion.</p>
          <Button variant="link" asChild><a href="https://drive.google.com/drive/folders/1sC2m-YhR1Fj-qA69X9XCEf8VMMNjOi6W?usp=sharing" target="_blank">See Portraits</a></Button>
        </CardContent></Card>
      </section>
    </div>
  );
}
