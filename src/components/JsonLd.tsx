/**
 * Renders a JSON-LD structured-data block. Server component so the markup is
 * present in the initial HTML for crawlers.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
