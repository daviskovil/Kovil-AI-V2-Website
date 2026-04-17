"""
Generate hero images for blog posts.
Style: dark gradient background, orange Kovil accent, clean typography.
Output size: 1200 x 675 (16:9)
"""
from PIL import Image, ImageDraw, ImageFont
import os, math

OUT_DIR = r"C:\Users\davis\Projects\Kovil-AI-V2-Website\public"
FONT_BOLD   = r"C:\Windows\Fonts\arialbd.ttf"
FONT_REGULAR = r"C:\Windows\Fonts\arial.ttf"

W, H = 1200, 675

# Kovil brand colours
DARK_BG   = (10, 10, 14)
MID_BG    = (20, 20, 28)
ORANGE    = (229, 101, 43)       # Kovil orange
ORANGE_DIM = (180, 78, 30)
WHITE     = (255, 255, 255)
GREY_LT   = (200, 200, 210)
GREY_DIM  = (120, 120, 135)


def gradient_bg(draw, color_left, color_right):
    """Horizontal gradient fill."""
    for x in range(W):
        t = x / W
        r = int(color_left[0] + (color_right[0] - color_left[0]) * t)
        g = int(color_left[1] + (color_right[1] - color_left[1]) * t)
        b = int(color_left[2] + (color_right[2] - color_left[2]) * t)
        draw.line([(x, 0), (x, H)], fill=(r, g, b))


def draw_grid(draw, alpha=18):
    """Subtle dot-grid pattern."""
    step = 40
    for x in range(0, W, step):
        for y in range(0, H, step):
            draw.ellipse([x-1, y-1, x+1, y+1], fill=(255, 255, 255, alpha))


def draw_circle_glow(img, cx, cy, radius, color, alpha_max=60):
    """Soft radial glow using compositing."""
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    steps = 30
    for i in range(steps, 0, -1):
        r = int(radius * i / steps)
        a = int(alpha_max * (1 - i / steps) ** 0.5)
        gd.ellipse([cx - r, cy - r, cx + r, cy + r],
                   fill=(color[0], color[1], color[2], a))
    img.paste(glow, mask=glow)


def wrap_text(text, font, max_width, draw):
    """Wrap text to fit within max_width."""
    words = text.split()
    lines = []
    current = []
    for word in words:
        test = " ".join(current + [word])
        bbox = draw.textbbox((0, 0), test, font=font)
        if bbox[2] - bbox[0] <= max_width:
            current.append(word)
        else:
            if current:
                lines.append(" ".join(current))
            current = [word]
    if current:
        lines.append(" ".join(current))
    return lines


# ─────────────────────────────────────────────────────────────────────────────
# IMAGE 1: How Much Does an AI Project Cost in 2026?
# Visual: cost breakdown bars / price tags on dark bg
# ─────────────────────────────────────────────────────────────────────────────
def make_cost_image():
    img = Image.new("RGBA", (W, H), DARK_BG)
    draw = ImageDraw.Draw(img)

    # Background gradient (dark navy → slightly lighter)
    gradient_bg(draw, (8, 8, 18), (22, 18, 32))

    # Glow accents
    draw_circle_glow(img, 900, 150, 320, ORANGE, alpha_max=45)
    draw_circle_glow(img, 100, 550, 240, (80, 60, 200), alpha_max=30)

    draw = ImageDraw.Draw(img)

    # Dot grid
    draw_grid(draw, alpha=14)

    # ── Cost bars (visual element) ──────────────────────────────────────────
    bar_data = [
        ("AI Chatbot",    0.25, "$8k–$60k"),
        ("RAG System",    0.40, "$20k–$70k"),
        ("AI Agent",      0.55, "$30k–$80k"),
        ("Multi-Agent",   0.85, "$60k–$200k+"),
        ("Custom ML",     1.00, "$60k–$250k+"),
    ]
    bar_x = 680
    bar_y_start = 120
    bar_height = 28
    bar_gap = 18
    bar_max_w = 420
    label_font = ImageFont.truetype(FONT_REGULAR, 16)
    val_font   = ImageFont.truetype(FONT_BOLD, 16)

    for i, (label, pct, value) in enumerate(bar_data):
        y = bar_y_start + i * (bar_height + bar_gap)
        bw = int(bar_max_w * pct)

        # Bar track
        draw.rounded_rectangle([bar_x, y, bar_x + bar_max_w, y + bar_height],
                                radius=4, fill=(255, 255, 255, 15))
        # Filled bar
        bar_color = (
            int(ORANGE[0] * 0.6 + 229 * 0.4 * pct),
            int(ORANGE[1] * 0.4 + 80 * 0.6 * (1 - pct)),
            int(ORANGE[2] * (1 - pct * 0.5)),
        )
        draw.rounded_rectangle([bar_x, y, bar_x + bw, y + bar_height],
                                radius=4, fill=ORANGE if pct >= 0.9 else bar_color)

        # Label left of bar
        draw.text((bar_x - 10, y + 6), label, font=label_font, fill=GREY_LT, anchor="ra")
        # Value right of bar
        draw.text((bar_x + bar_max_w + 10, y + 6), value, font=val_font,
                  fill=WHITE if pct >= 0.9 else GREY_LT, anchor="la")

    # ── Category pill ─────────────────────────────────────────────────────
    pill_font = ImageFont.truetype(FONT_BOLD, 13)
    pill_text = "AI ENGINEERING"
    pw = draw.textbbox((0, 0), pill_text, font=pill_font)[2] + 24
    draw.rounded_rectangle([56, 80, 56 + pw, 80 + 30], radius=15,
                            fill=(229, 101, 43, 50))
    draw.text((56 + pw // 2, 95), pill_text, font=pill_font,
              fill=ORANGE, anchor="mm")

    # ── Headline ──────────────────────────────────────────────────────────
    h1_font = ImageFont.truetype(FONT_BOLD, 52)
    h1_lines = ["How Much Does an", "AI Project Cost?", "Full 2026 Breakdown"]
    y = 128
    for line in h1_lines:
        draw.text((56, y), line, font=h1_font, fill=WHITE)
        y += 62

    # ── Sub-line ──────────────────────────────────────────────────────────
    sub_font = ImageFont.truetype(FONT_REGULAR, 20)
    draw.text((56, y + 8), "Chatbots · RAG · Agents · Custom ML",
              font=sub_font, fill=GREY_DIM)

    # ── Bottom brand strip ────────────────────────────────────────────────
    draw.rectangle([0, H - 4, W, H], fill=ORANGE)

    img = img.convert("RGB")
    out = os.path.join(OUT_DIR, "blog-how-much-does-an-ai-project-cost.jpg")
    img.save(out, "JPEG", quality=92)
    print(f"Saved: {out}")


# ─────────────────────────────────────────────────────────────────────────────
# IMAGE 2: GPT-4o vs Claude vs Gemini
# Visual: three model cards side-by-side on dark bg
# ─────────────────────────────────────────────────────────────────────────────
def make_llm_comparison_image():
    img = Image.new("RGBA", (W, H), DARK_BG)
    draw = ImageDraw.Draw(img)

    gradient_bg(draw, (6, 6, 16), (18, 14, 30))

    # Glows — one per model colour
    draw_circle_glow(img, 250, 250, 280, (16, 163, 127), alpha_max=40)   # GPT green
    draw_circle_glow(img, 600, 200, 260, (229, 101, 43),  alpha_max=35)   # Claude orange
    draw_circle_glow(img, 950, 300, 280, (66, 133, 244),  alpha_max=40)   # Gemini blue

    draw = ImageDraw.Draw(img)
    draw_grid(draw, alpha=12)

    # ── Three model cards ─────────────────────────────────────────────────
    models = [
        {
            "name": "GPT-4o",
            "maker": "OpenAI",
            "badge": "Ecosystem Leader",
            "stats": [("Context", "128k"), ("Best for", "Integrations"), ("Pricing", "$$")],
            "color": (16, 163, 127),
            "x": 56,
        },
        {
            "name": "Claude",
            "maker": "Anthropic",
            "badge": "Reasoning Leader",
            "stats": [("Context", "200k"), ("Best for", "Coding"), ("Pricing", "$$$")],
            "color": (229, 101, 43),
            "x": 430,
        },
        {
            "name": "Gemini",
            "maker": "Google",
            "badge": "Cost Leader",
            "stats": [("Context", "1M"), ("Best for", "Volume"), ("Pricing", "$")],
            "color": (66, 133, 244),
            "x": 804,
        },
    ]

    card_w = 340
    card_top = 90
    card_h = 460
    name_font  = ImageFont.truetype(FONT_BOLD, 38)
    maker_font = ImageFont.truetype(FONT_REGULAR, 16)
    badge_font = ImageFont.truetype(FONT_BOLD, 13)
    stat_key_f = ImageFont.truetype(FONT_REGULAR, 15)
    stat_val_f = ImageFont.truetype(FONT_BOLD, 15)

    for m in models:
        cx = m["x"]
        color = m["color"]

        # Card background
        card_img = Image.new("RGBA", (card_w, card_h), (0, 0, 0, 0))
        cd = ImageDraw.Draw(card_img)
        cd.rounded_rectangle([0, 0, card_w, card_h], radius=16,
                              fill=(255, 255, 255, 12))
        cd.rounded_rectangle([0, 0, card_w, card_h], radius=16,
                              outline=(*color, 80), width=1)
        img.paste(card_img, (cx, card_top), mask=card_img)

        draw = ImageDraw.Draw(img)

        # Coloured top accent bar
        draw.rounded_rectangle([cx, card_top, cx + card_w, card_top + 5],
                                radius=3, fill=color)

        # Model name
        draw.text((cx + card_w // 2, card_top + 55), m["name"],
                  font=name_font, fill=WHITE, anchor="mm")

        # Maker
        draw.text((cx + card_w // 2, card_top + 92), m["maker"],
                  font=maker_font, fill=GREY_DIM, anchor="mm")

        # Badge pill
        btext = m["badge"]
        bw = draw.textbbox((0, 0), btext, font=badge_font)[2] + 20
        bx = cx + (card_w - bw) // 2
        draw.rounded_rectangle([bx, card_top + 110, bx + bw, card_top + 134],
                                radius=10, fill=(*color, 40))
        draw.text((bx + bw // 2, card_top + 122), btext,
                  font=badge_font, fill=color, anchor="mm")

        # Divider
        draw.line([cx + 20, card_top + 155, cx + card_w - 20, card_top + 155],
                  fill=(255, 255, 255, 25), width=1)

        # Stats
        for si, (key, val) in enumerate(m["stats"]):
            sy = card_top + 175 + si * 62
            draw.text((cx + 28, sy), key, font=stat_key_f, fill=GREY_DIM)
            draw.text((cx + 28, sy + 22), val, font=stat_val_f, fill=WHITE)
            if si < len(m["stats"]) - 1:
                draw.line([cx + 20, sy + 52, cx + card_w - 20, sy + 52],
                          fill=(255, 255, 255, 15), width=1)

    # ── Headline above cards ───────────────────────────────────────────────
    # (fits under the card area)
    foot_font = ImageFont.truetype(FONT_BOLD, 22)
    foot_sub  = ImageFont.truetype(FONT_REGULAR, 17)
    draw.text((W // 2, card_top + card_h + 28),
              "Which AI model should your business build on?",
              font=foot_font, fill=WHITE, anchor="mm")
    draw.text((W // 2, card_top + card_h + 56),
              "Honest comparison — pricing, accuracy, ecosystems — for 2026",
              font=foot_sub, fill=GREY_DIM, anchor="mm")

    # Bottom brand strip
    draw.rectangle([0, H - 4, W, H], fill=ORANGE)

    img = img.convert("RGB")
    out = os.path.join(OUT_DIR, "blog-gpt4o-vs-claude-vs-gemini.jpg")
    img.save(out, "JPEG", quality=92)
    print(f"Saved: {out}")


# ─────────────────────────────────────────────────────────────────────────────
# IMAGE 3: RAG vs Fine-Tuning
# Visual: two-column split — RAG on left, Fine-Tuning on right, VS divider
# ─────────────────────────────────────────────────────────────────────────────
def make_rag_vs_finetuning_image():
    img = Image.new("RGBA", (W, H), DARK_BG)
    draw = ImageDraw.Draw(img)

    gradient_bg(draw, (8, 10, 24), (20, 12, 28))

    # Two-tone side glows
    draw_circle_glow(img, 220, 300, 340, (59, 130, 246), alpha_max=50)   # blue left
    draw_circle_glow(img, 980, 300, 340, (229, 101, 43),  alpha_max=50)  # orange right

    draw = ImageDraw.Draw(img)
    draw_grid(draw, alpha=12)

    col_pad = 60
    col_w   = 490
    col_top = 90
    col_h   = 460

    # ── Left card: RAG ─────────────────────────────────────────────────────
    rag_col = (59, 130, 246)   # blue
    lcard = Image.new("RGBA", (col_w, col_h), (0, 0, 0, 0))
    lcd = ImageDraw.Draw(lcard)
    lcd.rounded_rectangle([0, 0, col_w, col_h], radius=14,
                          fill=(59, 130, 246, 18))
    lcd.rounded_rectangle([0, 0, col_w, col_h], radius=14,
                          outline=(59, 130, 246, 90), width=1)
    img.paste(lcard, (col_pad, col_top), mask=lcard)
    draw = ImageDraw.Draw(img)

    draw.rounded_rectangle([col_pad, col_top, col_pad + col_w, col_top + 5],
                            radius=3, fill=rag_col)

    title_f = ImageFont.truetype(FONT_BOLD, 42)
    body_f  = ImageFont.truetype(FONT_REGULAR, 16)
    tag_f   = ImageFont.truetype(FONT_BOLD, 13)
    item_f  = ImageFont.truetype(FONT_BOLD, 15)
    item_sf = ImageFont.truetype(FONT_REGULAR, 14)

    draw.text((col_pad + col_w // 2, col_top + 58), "RAG",
              font=title_f, fill=WHITE, anchor="mm")
    draw.text((col_pad + col_w // 2, col_top + 92),
              "Retrieval-Augmented Generation",
              font=body_f, fill=GREY_DIM, anchor="mm")

    # Tag
    tag = "No Retraining"
    tw = draw.textbbox((0,0), tag, font=tag_f)[2] + 20
    tx = col_pad + (col_w - tw) // 2
    draw.rounded_rectangle([tx, col_top + 110, tx + tw, col_top + 132],
                            radius=8, fill=(*rag_col, 50))
    draw.text((tx + tw // 2, col_top + 121), tag, font=tag_f,
              fill=rag_col, anchor="mm")

    draw.line([col_pad + 20, col_top + 148, col_pad + col_w - 20, col_top + 148],
              fill=(255,255,255,20), width=1)

    rag_items = [
        ("Use case",   "Dynamic or fast-changing data"),
        ("How",        "Query → retrieve docs → generate"),
        ("Training",   "None required"),
        ("Best for",   "Chatbots, search, Q&A systems"),
        ("Cost",       "Lower — no GPU training needed"),
    ]
    for i, (k, v) in enumerate(rag_items):
        y = col_top + 165 + i * 56
        draw.text((col_pad + 28, y), k, font=item_sf, fill=GREY_DIM)
        draw.text((col_pad + 28, y + 20), v, font=item_f, fill=WHITE)
        if i < len(rag_items) - 1:
            draw.line([col_pad + 20, y + 48, col_pad + col_w - 20, y + 48],
                      fill=(255,255,255,12), width=1)

    # ── Right card: Fine-Tuning ─────────────────────────────────────────────
    ft_col  = ORANGE
    rx      = W - col_pad - col_w
    rcard = Image.new("RGBA", (col_w, col_h), (0, 0, 0, 0))
    rcd = ImageDraw.Draw(rcard)
    rcd.rounded_rectangle([0, 0, col_w, col_h], radius=14,
                          fill=(229, 101, 43, 18))
    rcd.rounded_rectangle([0, 0, col_w, col_h], radius=14,
                          outline=(229, 101, 43, 90), width=1)
    img.paste(rcard, (rx, col_top), mask=rcard)
    draw = ImageDraw.Draw(img)

    draw.rounded_rectangle([rx, col_top, rx + col_w, col_top + 5],
                            radius=3, fill=ft_col)

    draw.text((rx + col_w // 2, col_top + 58), "Fine-Tuning",
              font=title_f, fill=WHITE, anchor="mm")
    draw.text((rx + col_w // 2, col_top + 92),
              "Model Weight Adjustment",
              font=body_f, fill=GREY_DIM, anchor="mm")

    tag2 = "Custom Model"
    tw2 = draw.textbbox((0,0), tag2, font=tag_f)[2] + 20
    tx2 = rx + (col_w - tw2) // 2
    draw.rounded_rectangle([tx2, col_top + 110, tx2 + tw2, col_top + 132],
                            radius=8, fill=(*ft_col, 50))
    draw.text((tx2 + tw2 // 2, col_top + 121), tag2, font=tag_f,
              fill=ft_col, anchor="mm")

    draw.line([rx + 20, col_top + 148, rx + col_w - 20, col_top + 148],
              fill=(255,255,255,20), width=1)

    ft_items = [
        ("Use case",   "Stable, specialised domain tasks"),
        ("How",        "Retrain on your labelled dataset"),
        ("Training",   "Required — GPU hours + data"),
        ("Best for",   "Classification, tone, style tasks"),
        ("Cost",       "Higher — training + infra costs"),
    ]
    for i, (k, v) in enumerate(ft_items):
        y = col_top + 165 + i * 56
        draw.text((rx + 28, y), k, font=item_sf, fill=GREY_DIM)
        draw.text((rx + 28, y + 20), v, font=item_f, fill=WHITE)
        if i < len(ft_items) - 1:
            draw.line([rx + 20, y + 48, rx + col_w - 20, y + 48],
                      fill=(255,255,255,12), width=1)

    # ── VS badge in centre ─────────────────────────────────────────────────
    cx_mid = W // 2
    cy_mid = col_top + col_h // 2
    vs_r = 38
    vs_bg = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    vd = ImageDraw.Draw(vs_bg)
    vd.ellipse([cx_mid - vs_r, cy_mid - vs_r, cx_mid + vs_r, cy_mid + vs_r],
               fill=(229, 101, 43, 220))
    img.paste(vs_bg, mask=vs_bg)
    draw = ImageDraw.Draw(img)
    vs_f = ImageFont.truetype(FONT_BOLD, 26)
    draw.text((cx_mid, cy_mid), "VS", font=vs_f, fill=WHITE, anchor="mm")

    # Bottom strip
    draw.rectangle([0, H - 4, W, H], fill=ORANGE)

    img = img.convert("RGB")
    out = os.path.join(OUT_DIR, "blog-rag-vs-fine-tuning-v2.jpg")
    img.save(out, "JPEG", quality=92)
    print(f"Saved: {out}")


# ─────────────────────────────────────────────────────────────────────────────
# IMAGE 4: AI Agents vs AI Chatbots
# Visual: two panels — Chatbot (reactive) vs Agent (proactive/multi-step)
# ─────────────────────────────────────────────────────────────────────────────
def make_agents_vs_chatbots_image():
    img = Image.new("RGBA", (W, H), DARK_BG)
    draw = ImageDraw.Draw(img)

    gradient_bg(draw, (6, 12, 22), (18, 10, 26))

    draw_circle_glow(img, 180, 280, 300, (139, 92, 246), alpha_max=45)  # purple left (chatbot)
    draw_circle_glow(img, 1020, 280, 300, (16, 185, 129), alpha_max=45) # green right (agent)

    draw = ImageDraw.Draw(img)
    draw_grid(draw, alpha=11)

    col_pad = 60
    col_w   = 490
    col_top = 90
    col_h   = 480

    title_f = ImageFont.truetype(FONT_BOLD, 42)
    sub_f   = ImageFont.truetype(FONT_REGULAR, 16)
    tag_f   = ImageFont.truetype(FONT_BOLD, 13)
    item_f  = ImageFont.truetype(FONT_BOLD, 15)
    item_sf = ImageFont.truetype(FONT_REGULAR, 14)

    sides = [
        {
            "label": "AI Chatbot",
            "sub":   "Reactive — responds to prompts",
            "tag":   "Single Turn",
            "color": (139, 92, 246),
            "x":     col_pad,
            "items": [
                ("Behaviour",  "Responds to one message at a time"),
                ("Memory",     "Limited or session-only"),
                ("Actions",    "Text output only"),
                ("Best for",   "Support, FAQ, conversations"),
                ("Example",    "\"What's your return policy?\""),
            ],
        },
        {
            "label": "AI Agent",
            "sub":   "Proactive — plans and executes",
            "tag":   "Multi-Step",
            "color": (16, 185, 129),
            "x":     W - col_pad - col_w,
            "items": [
                ("Behaviour",  "Plans, decides, acts autonomously"),
                ("Memory",     "Persistent across steps & sessions"),
                ("Actions",    "Calls APIs, writes code, sends email"),
                ("Best for",   "Workflows, automation, research"),
                ("Example",    "\"Qualify this lead and book a call\""),
            ],
        },
    ]

    for s in sides:
        cx = s["x"]
        col = s["color"]

        card = Image.new("RGBA", (col_w, col_h), (0, 0, 0, 0))
        cd = ImageDraw.Draw(card)
        cd.rounded_rectangle([0, 0, col_w, col_h], radius=14,
                              fill=(*col, 18))
        cd.rounded_rectangle([0, 0, col_w, col_h], radius=14,
                              outline=(*col, 85), width=1)
        img.paste(card, (cx, col_top), mask=card)

        draw = ImageDraw.Draw(img)
        draw.rounded_rectangle([cx, col_top, cx + col_w, col_top + 5],
                                radius=3, fill=col)

        draw.text((cx + col_w // 2, col_top + 58), s["label"],
                  font=title_f, fill=WHITE, anchor="mm")
        draw.text((cx + col_w // 2, col_top + 92), s["sub"],
                  font=sub_f, fill=GREY_DIM, anchor="mm")

        tw = draw.textbbox((0,0), s["tag"], font=tag_f)[2] + 20
        tx = cx + (col_w - tw) // 2
        draw.rounded_rectangle([tx, col_top + 110, tx + tw, col_top + 132],
                                radius=8, fill=(*col, 50))
        draw.text((tx + tw // 2, col_top + 121), s["tag"],
                  font=tag_f, fill=col, anchor="mm")

        draw.line([cx + 20, col_top + 148, cx + col_w - 20, col_top + 148],
                  fill=(255,255,255,20), width=1)

        for i, (k, v) in enumerate(s["items"]):
            y = col_top + 165 + i * 58
            draw.text((cx + 28, y),      k, font=item_sf, fill=GREY_DIM)
            draw.text((cx + 28, y + 20), v, font=item_f,  fill=WHITE)
            if i < len(s["items"]) - 1:
                draw.line([cx + 20, y + 50, cx + col_w - 20, y + 50],
                          fill=(255,255,255,12), width=1)

    # VS badge
    cx_mid = W // 2
    cy_mid = col_top + col_h // 2
    vs_r   = 38
    vs_bg  = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    vd     = ImageDraw.Draw(vs_bg)
    vd.ellipse([cx_mid - vs_r, cy_mid - vs_r, cx_mid + vs_r, cy_mid + vs_r],
               fill=(229, 101, 43, 220))
    img.paste(vs_bg, mask=vs_bg)
    draw = ImageDraw.Draw(img)
    vs_f = ImageFont.truetype(FONT_BOLD, 26)
    draw.text((cx_mid, cy_mid), "VS", font=vs_f, fill=WHITE, anchor="mm")

    # Bottom strip
    draw.rectangle([0, H - 4, W, H], fill=ORANGE)

    img = img.convert("RGB")
    out = os.path.join(OUT_DIR, "blog-ai-agents-vs-chatbots-v2.jpg")
    img.save(out, "JPEG", quality=92)
    print(f"Saved: {out}")


if __name__ == "__main__":
    make_cost_image()
    make_llm_comparison_image()
    make_rag_vs_finetuning_image()
    make_agents_vs_chatbots_image()
    print("Done.")
