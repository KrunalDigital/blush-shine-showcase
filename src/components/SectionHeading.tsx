interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`space-y-3 mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
