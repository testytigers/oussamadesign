#!/usr/bin/env python3
"""
Generates 1200x630 Open Graph cards in the site's own brand.

Why this exists: the site advertised `twitter:card=summary_large_image` while
pointing at a 100x100 avatar. LinkedIn drops images under 200x200 and X ignores
anything below 144x144, so every shared link rendered with no image at all.

Rendered through a headless browser rather than composited, so the cards use the
real Roboto Slab / Open Sans webfonts instead of a
system substitute. Python because playwright is already installed here; adding
the Node binding would mean a second browser download for one script.

    python3 scripts/build-og-images.py
"""
import os
import pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
OUT = PUBLIC / "images" / "og"

C = dict(bg="#0A0F0B", glow="#11482C", text="#EFF5EF",
         muted="#93A199", accent="#4ADE80", border="#23412F")

CARDS = [
    dict(out="home-en", label="Portfolio", title="Hi, I'm Oussama!",
         sub="Sr UX Designer &amp; AI System Builder — 13+ years shipping enterprise products."),
    dict(out="home-fr", label="Portfolio", title="Bonjour, moi c'est Oussama&nbsp;!",
         sub="UX Designer senior &amp; concepteur de systèmes IA — 13+ ans de produits d'entreprise."),

    dict(out="case-study-en", label="Case study",
         title="Centralizing hiring through collaborative scheduling",
         sub="Candidate dropout 40% → 12%. Scheduling 3 days → 15 minutes.",
         shot="images/work/cal-view.png"),
    dict(out="case-study-fr", label="Étude de cas",
         title="Centraliser le recrutement par la planification collaborative",
         sub="Abandon des candidats 40 % → 12 %. Planification 3 jours → 15 minutes.",
         shot="images/work/cal-view.png"),

    dict(out="wiggli-candidate-matching-case-study-en", label="Case study",
         title="Ranking 200 applicants without losing trust",
         sub="A six-pillar matching score, rebuilt so every number opens. Screening −65%."),
    dict(out="wiggli-candidate-matching-case-study-fr", label="Étude de cas",
         title="Classer 200 candidatures sans perdre la confiance",
         sub="Un score à six piliers, reconstruit pour que chaque chiffre s'ouvre. Présélection −65 %."),

    dict(out="events-en", label="Workshops &amp; talks", title="Workshops &amp; talks",
         sub="Hands-on sessions on AI, UX, and the systems behind them."),
    dict(out="events-fr", label="Ateliers &amp; conférences", title="Ateliers &amp; conférences",
         sub="Des sessions pratiques sur l'IA, l'UX et les systèmes qui les font tourner."),

    dict(out="beneath-the-skull-of-ai-en", label="Workshop · Part 1",
         title="Beneath the Skull of AI",
         sub="How an LLM actually works: models, engines, hardware, quantization, context.",
         shot="events/beneath-the-skull-of-ai/the-shrink-ray.webp"),
    dict(out="beneath-the-skull-of-ai-fr", label="Atelier · Partie 1",
         title="Beneath the Skull of AI",
         sub="Le fonctionnement réel d'un LLM : modèles, moteurs, matériel, quantification, contexte.",
         shot="events/beneath-the-skull-of-ai/the-shrink-ray.webp"),

    dict(out="introduction-to-agentic-ai-en", label="Workshop · Part 2",
         title="Introduction to Agentic AI",
         sub="From LLM to agent: the loop, the tools, and why agents fail.",
         shot="events/introduction-to-agentic-ai/whats-the-difference.webp"),
    dict(out="introduction-to-agentic-ai-fr", label="Atelier · Partie 2",
         title="Introduction à l'IA agentique",
         sub="Du LLM à l'agent : la boucle, les outils, et pourquoi les agents échouent.",
         shot="events/introduction-to-agentic-ai/whats-the-difference.webp"),
]


# TILES: listing tiles for the home page (CARDS above are the OG cards). The media slot's aspect ratio swings from
# 0.95 to 1.60 across breakpoints, so everything sits in a centred safe area
# that survives every crop. Used where no product screen is cleared to publish.
TILES = [
    dict(out="matching-card-en", label="Scoring model", foot="Wiggli ATS",
         rows=[("Skills", "40"), ("Functions", "25"), ("Experience", "15"),
               ("Education", "10"), ("Seniority", "5"), ("Languages", "5")]),
    dict(out="matching-card-fr", label="Modèle de scoring", foot="ATS Wiggli",
         rows=[("Compétences", "40"), ("Fonctions", "25"), ("Expérience", "15"),
               ("Formation", "10"), ("Séniorité", "5"), ("Langues", "5")]),
]


def card_html(card):
    rows = "".join(
        f'<li><span class="k">{k}</span><span class="d"></span>'
        f'<span class="v">{v}<i>%</i></span></li>'
        for k, v in card["rows"]
    )
    return f"""<!doctype html>
<html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  * {{ margin:0; padding:0; box-sizing:border-box; }}
  body {{ width:1200px; height:1000px; background:{C['bg']};
         font-family:'Open Sans',sans-serif; display:flex; align-items:center;
         justify-content:center; }}
  .glow {{ position:absolute; inset:0;
          background:radial-gradient(90% 70% at 50% 0%, #14301F 0%, {C['bg']} 70%); }}
  .safe {{ position:relative; width:700px; }}
  .label {{ font-family:'Open Sans',sans-serif; font-size:22px; font-weight:500;
           letter-spacing:0.18em; text-transform:uppercase; color:{C['accent']};
           text-align:center; margin-bottom:54px; }}
  ul {{ list-style:none; }}
  li {{ display:flex; align-items:baseline; gap:16px; padding:19px 0;
       border-bottom:1px solid rgba(255,255,255,0.09); }}
  li:last-child {{ border-bottom:none; }}
  .k {{ font-size:31px; font-weight:400; color:{C['text']}; white-space:nowrap; }}
  .d {{ flex:1; }}
  .v {{ font-family:'Open Sans',sans-serif; font-size:34px; font-weight:500;
       color:{C['accent']}; }}
  .v i {{ font-style:normal; font-size:20px; opacity:0.6; margin-left:3px; }}
  .foot {{ margin-top:54px; text-align:center; font-size:22px; color:{C['muted']}; }}
</style></head>
<body>
  <div class="glow"></div>
  <div class="safe">
    <div class="label">{card['label']}</div>
    <ul>{rows}</ul>
    <div class="foot">{card['foot']}</div>
  </div>
</body></html>"""


def size_for(title):
    n = len(title)
    return "58px" if n > 44 else "70px" if n > 26 else "82px"


def html(card):
    shot = (f'<div class="shot"><img src="{card["shot"]}" alt=""></div>'
            if card.get("shot") else "")
    return f"""<!doctype html>
<html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Roboto+Slab:wght@600;700&display=swap" rel="stylesheet">
<style>
  * {{ margin:0; padding:0; box-sizing:border-box; }}
  body {{ width:1200px; height:630px; background:{C['bg']}; overflow:hidden;
         font-family:'Open Sans',sans-serif; }}
  .glow {{ position:absolute; inset:0;
          background:radial-gradient(70% 80% at 12% 0%, {C['glow']} 0%, rgba(9,27,18,0.55) 42%, {C['bg']} 78%); }}
  .wrap {{ position:relative; height:100%; display:flex; align-items:center;
          gap:56px; padding:70px 76px; }}
  .col {{ flex:1; min-width:0; display:flex; flex-direction:column; height:100%; }}
  .label {{ font-family:'Open Sans',sans-serif; font-size:19px; font-weight:500;
           letter-spacing:0.16em; text-transform:uppercase; color:{C['accent']}; margin-bottom:26px; }}
  h1 {{ font-family:'Roboto Slab',serif; font-weight:700; color:{C['text']};
       font-size:{size_for(card['title'])}; line-height:1.06; letter-spacing:-0.02em; }}
  .sub {{ margin-top:24px; font-size:23px; font-weight:400; line-height:1.5;
         color:{C['muted']}; max-width:24ch; }}
  .rule {{ margin-top:32px; width:88px; height:4px; border-radius:99px; background:{C['accent']}; }}
  .who {{ margin-top:auto; display:flex; align-items:center; gap:16px; }}
  .who img {{ width:52px; height:52px; border-radius:50%; object-fit:cover;
             border:2px solid {C['border']}; }}
  .who b {{ color:{C['text']}; font-size:21px; font-weight:500; display:block; }}
  .who span {{ color:{C['muted']}; font-size:17px; }}
  .shot {{ flex:none; width:392px; height:486px; border-radius:24px; overflow:hidden;
          border:1px solid {C['border']}; background:#10160F;
          box-shadow:0 30px 70px -20px rgba(0,0,0,0.75); }}
  .shot img {{ width:100%; height:100%; object-fit:cover; display:block; }}
</style></head>
<body>
  <div class="glow"></div>
  <div class="wrap">
    <div class="col">
      <div class="label">{card['label']}</div>
      <h1>{card['title']}</h1>
      <div class="sub">{card['sub']}</div>
      <div class="rule"></div>
      <div class="who">
        <img src="images/logo-photo.jpg" alt="">
        <div><b>Oussama Bougnouch</b><span>oussamadesign.github.io</span></div>
      </div>
    </div>
    {shot}
  </div>
</body></html>"""


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    # Written inside public/ so relative asset paths resolve exactly as they do
    # on the real pages, then removed.
    tmp = PUBLIC / "__og-render.html"
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page(viewport={"width": 1200, "height": 630},
                                    device_scale_factor=1)
            for card in CARDS:
                tmp.write_text(html(card), encoding="utf-8")
                page.goto(tmp.as_uri(), wait_until="networkidle")
                page.evaluate("document.fonts.ready")
                dest = OUT / f"{card['out']}.jpg"
                page.screenshot(path=str(dest), type="jpeg", quality=90)
                print(f"  {dest.relative_to(ROOT)}")

            cards_out = PUBLIC / "images" / "work"
            cards_out.mkdir(parents=True, exist_ok=True)
            page.set_viewport_size({"width": 1200, "height": 1000})
            for card in TILES:
                tmp.write_text(card_html(card), encoding="utf-8")
                page.goto(tmp.as_uri(), wait_until="networkidle")
                page.evaluate("document.fonts.ready")
                dest = cards_out / f"{card['out']}.jpg"
                page.screenshot(path=str(dest), type="jpeg", quality=90)
                print(f"  {dest.relative_to(ROOT)}")

            browser.close()
    finally:
        if tmp.exists():
            os.remove(tmp)
    print(f"\n{len(CARDS)} cards -> public/images/og/")


if __name__ == "__main__":
    main()
