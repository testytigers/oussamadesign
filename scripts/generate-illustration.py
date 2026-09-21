#!/usr/bin/env python3
"""
Generates a conceptual illustration through Ideogram, in the site's house style.

Scope note: this is for *decorative* art only. Formulas, diagrams and product
screens are never generated — generative models garble digits and invent UI,
and those carry claims a case study has to get exactly right. Those are built
as typeset HTML (see CaseStudyBlocks.astro) or supplied as real screenshots.

The key is read from the environment and never stored in the repo:

    export IDEOGRAM_API_KEY=...
    python3 scripts/generate-illustration.py <output-name> "<subject>"

Output lands in photos-source/site/ as the archived original; optimise and copy
into public/ separately.
"""
import os
import sys
import pathlib
import json
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "photos-source" / "site"
ENDPOINT = "https://api.ideogram.ai/v1/ideogram-v3/generate"

# Matches public/images/intro-illustration: high-contrast manga ink, solid
# blacks, no grey wash, and exactly one green object as the accent.
STYLE = (
    "High contrast black and white manga ink illustration. Bold confident "
    "linework, heavy solid black fills, crisp white background, no grey tones, "
    "no shading gradients, no text, no lettering, no numbers. Editorial "
    "graphic style, clean negative space. Exactly one object is coloured "
    "bright green; everything else is pure black and white."
)


def generate(name: str, subject: str, aspect: str = "16x9") -> pathlib.Path:
    key = os.environ.get("IDEOGRAM_API_KEY")
    if not key:
        sys.exit("IDEOGRAM_API_KEY is not set in the environment.")

    boundary = "----illustration"
    fields = {
        "prompt": f"{subject} {STYLE}",
        "aspect_ratio": aspect,
        "rendering_speed": "QUALITY",
        "magic_prompt": "OFF",
    }
    body = b""
    for k, v in fields.items():
        body += (
            f"--{boundary}\r\nContent-Disposition: form-data; name=\"{k}\"\r\n\r\n{v}\r\n"
        ).encode()
    body += f"--{boundary}--\r\n".encode()

    req = urllib.request.Request(
        ENDPOINT,
        data=body,
        headers={
            "Api-Key": key,
            "Content-Type": f"multipart/form-data; boundary={boundary}",
        },
    )
    with urllib.request.urlopen(req, timeout=180) as resp:
        payload = json.load(resp)

    url = payload["data"][0]["url"]
    OUT.mkdir(parents=True, exist_ok=True)
    dest = OUT / f"{name}.png"
    # The result URL is a signed CDN link that rejects urllib's default agent.
    fetch = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(fetch, timeout=180) as img, open(dest, "wb") as fh:
        fh.write(img.read())
    print(f"  {dest.relative_to(ROOT)}  ({dest.stat().st_size // 1024} KB)")
    return dest


if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    generate(sys.argv[1], sys.argv[2], sys.argv[3] if len(sys.argv) > 3 else "16x9")
