import { SectionHeading } from "@/components/SectionHeading";
import { useState } from "react";
import hairToolsImage from "@/assets/hair-tools.jpg";
import spaImage from "@/assets/spa-treatment.jpg";
import heroImage from "@/assets/hero-salon.jpg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Using imported images multiple times to simulate a gallery
  const galleryImages = [
    { src: heroImage, category: "Salon Interior", alt: "Luxurious salon interior" },
    { src: spaImage, category: "Spa Services", alt: "Relaxing spa treatment room" },
    { src: hairToolsImage, category: "Hair Styling", alt: "Professional hair styling tools" },
    { src: heroImage, category: "Salon Interior", alt: "Modern salon styling stations" },
    { src: spaImage, category: "Spa Services", alt: "Peaceful spa ambiance" },
    { src: hairToolsImage, category: "Hair Styling", alt: "Premium hair care products" },
    { src: heroImage, category: "Salon Interior", alt: "Elegant salon decor" },
    { src: spaImage, category: "Spa Services", alt: "Massage therapy room" },
    { src: hairToolsImage, category: "Hair Styling", alt: "Hair styling essentials" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
              Our Gallery
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              Explore our beautiful salon, stunning transformations, and happy clients
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-smooth cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
                  <div className="text-white">
                    <p className="font-display font-semibold text-lg">{image.category}</p>
                    <p className="text-sm font-body text-white/80">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Transformations"
            subtitle="See the stunning results our expert team delivers"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold text-center text-foreground">
                Before
              </h3>
              <div className="relative rounded-lg overflow-hidden shadow-soft aspect-square bg-muted flex items-center justify-center">
                <p className="text-muted-foreground font-body">Before Photo</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold text-center text-foreground">
                After
              </h3>
              <div className="relative rounded-lg overflow-hidden shadow-elegant aspect-square">
                <img
                  src={heroImage}
                  alt="After transformation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-primary transition-smooth"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain rounded-lg shadow-elegant"
          />
        </div>
      )}
    </div>
  );
}
