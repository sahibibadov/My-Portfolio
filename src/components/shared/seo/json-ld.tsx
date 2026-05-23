type JsonLdData = Record<string, unknown> | Record<string, unknown>[];

const LSEP_RE = new RegExp("\\u2028", "g");
const PSEP_RE = new RegExp("\\u2029", "g");

const escapeJsonForScript = (raw: string) =>
  raw
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(LSEP_RE, "\\u2028")
    .replace(PSEP_RE, "\\u2029");

const deriveId = (data: JsonLdData) => {
  const first = Array.isArray(data) ? data[0] : data;
  const id = first?.["@id"];
  const type = first?.["@type"];
  if (typeof id === "string") return `jsonld-${id}`;
  if (typeof type === "string") return `jsonld-${type}`;
  return undefined;
};

export function JsonLd({ data, id }: { data: JsonLdData; id?: string }) {
  return (
    <script
      id={id ?? deriveId(data)}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: escapeJsonForScript(JSON.stringify(data)) }}
    />
  );
}
