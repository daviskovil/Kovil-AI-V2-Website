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


# ─────────────────────────────────────────────────────────────────────────────
# IMAGE 5: AI Development Lifecycle
# Visual: horizontal pipeline of 6 stages with connecting arrows
# ─────────────────────────────────────────────────────────────────────────────
def make_ai_dev_lifecycle_image():
    img = Image.new("RGBA", (W, H), DARK_BG)
    draw = ImageDraw.Draw(img)

    gradient_bg(draw, (6, 8, 20), (18, 14, 30))
    draw_circle_glow(img, 600, 200, 500, (99, 102, 241), alpha_max=30)
    draw_circle_glow(img, 100, 550, 200, ORANGE, alpha_max=25)

    draw = ImageDraw.Draw(img)
    draw_grid(draw, alpha=11)

    # ── Headline ──────────────────────────────────────────────────────────
    h1_f  = ImageFont.truetype(FONT_BOLD, 44)
    sub_f = ImageFont.truetype(FONT_REGULAR, 19)
    tag_f = ImageFont.truetype(FONT_BOLD, 13)

    pill = "AI ENGINEERING"
    pw = draw.textbbox((0,0), pill, font=tag_f)[2] + 24
    draw.rounded_rectangle([W//2 - pw//2, 42, W//2 + pw//2, 72],
                            radius=14, fill=(*ORANGE, 50))
    draw.text((W//2, 57), pill, font=tag_f, fill=ORANGE, anchor="mm")

    draw.text((W//2, 108), "The AI Development Lifecycle",
              font=h1_f, fill=WHITE, anchor="mm")
    draw.text((W//2, 152), "6 phases every AI project must pass through — from data to deployment",
              font=sub_f, fill=GREY_DIM, anchor="mm")

    # ── Six stage boxes ───────────────────────────────────────────────────
    stages = [
        ("01", "Data\nCollection",   (59, 130, 246)),
        ("02", "Data\nPrep",         (99, 102, 241)),
        ("03", "Model\nSelection",   (139, 92, 246)),
        ("04", "Training &\nEval",   (168, 85, 247)),
        ("05", "Deployment",         (229, 101, 43)),
        ("06", "Monitor &\nIterate", (239, 68, 68)),
    ]

    n = len(stages)
    box_w  = 152
    box_h  = 170
    gap    = 18
    total  = n * box_w + (n - 1) * gap
    x0     = (W - total) // 2
    y0     = 200

    num_f   = ImageFont.truetype(FONT_BOLD, 13)
    name_f  = ImageFont.truetype(FONT_BOLD, 16)

    for i, (num, name, col) in enumerate(stages):
        bx = x0 + i * (box_w + gap)

        # Card
        card = Image.new("RGBA", (box_w, box_h), (0, 0, 0, 0))
        cd = ImageDraw.Draw(card)
        cd.rounded_rectangle([0, 0, box_w, box_h], radius=12,
                              fill=(*col, 22))
        cd.rounded_rectangle([0, 0, box_w, box_h], radius=12,
                              outline=(*col, 90), width=1)
        img.paste(card, (bx, y0), mask=card)

        draw = ImageDraw.Draw(img)

        # Top accent bar
        draw.rounded_rectangle([bx, y0, bx + box_w, y0 + 4],
                                radius=2, fill=col)

        # Number badge
        draw.text((bx + box_w // 2, y0 + 28), num,
                  font=num_f, fill=col, anchor="mm")

        # Separator line
        draw.line([bx + 20, y0 + 42, bx + box_w - 20, y0 + 42],
                  fill=(*col, 50), width=1)

        # Stage name (multi-line)
        lines = name.split("\n")
        line_h = 26
        text_y = y0 + 68 - (len(lines) - 1) * line_h // 2
        for line in lines:
            draw.text((bx + box_w // 2, text_y), line,
                      font=name_f, fill=WHITE, anchor="mm")
            text_y += line_h

        # Arrow to next (except last)
        if i < n - 1:
            ax = bx + box_w + gap // 2
            ay = y0 + box_h // 2
            draw.line([ax - 6, ay, ax + 6, ay], fill=GREY_DIM, width=2)
            draw.polygon([(ax + 6, ay - 5), (ax + 6, ay + 5), (ax + 14, ay)],
                         fill=GREY_DIM)

    # ── Bottom stat strip ─────────────────────────────────────────────────
    stat_f  = ImageFont.truetype(FONT_BOLD, 22)
    stat_sf = ImageFont.truetype(FONT_REGULAR, 13)
    stats   = [("80%", "of projects skip phases"), ("4–20 wks", "average build time"), ("3×", "cost of skipping eval")]
    stat_y  = y0 + box_h + 36
    sw      = W // len(stats)
    for i, (val, label) in enumerate(stats):
        sx = i * sw + sw // 2
        draw.text((sx, stat_y),      val,   font=stat_f,  fill=ORANGE, anchor="mm")
        draw.text((sx, stat_y + 30), label, font=stat_sf, fill=GREY_DIM, anchor="mm")

    draw.rectangle([0, H - 4, W, H], fill=ORANGE)

    img = img.convert("RGB")
    out = os.path.join(OUT_DIR, "blog-ai-development-lifecycle-v2.jpg")
    img.save(out, "JPEG", quality=92)
    print(f"Saved: {out}")


# ─────────────────────────────────────────────────────────────────────────────
# IMAGE 6: Why AI Projects Fail
# Visual: 5 failure reasons as warning cards on dark red-toned bg
# ─────────────────────────────────────────────────────────────────────────────
def make_why_ai_fails_image():
    img = Image.new("RGBA", (W, H), DARK_BG)
    draw = ImageDraw.Draw(img)

    gradient_bg(draw, (14, 6, 6), (20, 10, 14))
    draw_circle_glow(img, 300, 200, 380, (239, 68, 68),  alpha_max=35)
    draw_circle_glow(img, 950, 450, 300, (229, 101, 43), alpha_max=28)

    draw = ImageDraw.Draw(img)
    draw_grid(draw, alpha=10)

    RED    = (239, 68, 68)
    AMBER  = (245, 158, 11)

    # ── Headline block (left) ─────────────────────────────────────────────
    tag_f = ImageFont.truetype(FONT_BOLD, 13)
    h1_f  = ImageFont.truetype(FONT_BOLD, 52)
    num_f = ImageFont.truetype(FONT_BOLD, 88)
    sub_f = ImageFont.truetype(FONT_REGULAR, 18)

    pill = "AI ENGINEERING"
    pw = draw.textbbox((0,0), pill, font=tag_f)[2] + 24
    draw.rounded_rectangle([56, 60, 56 + pw, 88], radius=14,
                            fill=(*RED, 40))
    draw.text((56 + pw // 2, 74), pill, font=tag_f, fill=RED, anchor="mm")

    # Big 80% number
    draw.text((56, 110), "80%", font=num_f, fill=(*RED, 200))

    draw.text((56, 216), "of AI projects fail", font=h1_f, fill=WHITE)
    draw.text((56, 274), "in production", font=h1_f, fill=WHITE)

    draw.text((56, 334), "Here's exactly why — and how to", font=sub_f, fill=GREY_DIM)
    draw.text((56, 360), "make sure yours doesn't.", font=sub_f, fill=GREY_DIM)

    # ── Failure reason cards (right) ──────────────────────────────────────
    reasons = [
        (RED,   "No clear success metric defined upfront"),
        (AMBER, "Data quality issues discovered late"),
        (AMBER, "Proof-of-concept ≠ production system"),
        (RED,   "No monitoring after deployment"),
        (ORANGE,"Team lacks AI engineering specialisation"),
    ]

    card_x   = 560
    card_w   = 600
    card_h   = 80
    card_gap = 14
    card_y0  = 80

    reason_f = ImageFont.truetype(FONT_BOLD, 17)
    num2_f   = ImageFont.truetype(FONT_BOLD, 20)

    for i, (col, text) in enumerate(reasons):
        cy = card_y0 + i * (card_h + card_gap)

        card = Image.new("RGBA", (card_w, card_h), (0, 0, 0, 0))
        cd = ImageDraw.Draw(card)
        cd.rounded_rectangle([0, 0, card_w, card_h], radius=10,
                              fill=(*col, 18))
        cd.rounded_rectangle([0, 0, card_w, card_h], radius=10,
                              outline=(*col, 70), width=1)
        img.paste(card, (card_x, cy), mask=card)

        draw = ImageDraw.Draw(img)

        # Left accent
        draw.rounded_rectangle([card_x, cy, card_x + 4, cy + card_h],
                                radius=2, fill=col)

        # Number
        draw.text((card_x + 34, cy + card_h // 2),
                  f"#{i+1}", font=num2_f, fill=col, anchor="mm")

        # Separator
        draw.line([card_x + 56, cy + 16, card_x + 56, cy + card_h - 16],
                  fill=(*col, 40), width=1)

        # Text
        draw.text((card_x + 74, cy + card_h // 2),
                  text, font=reason_f, fill=WHITE, anchor="lm")

    # ── Bottom CTA line ───────────────────────────────────────────────────
    cta_f = ImageFont.truetype(FONT_REGULAR, 16)
    draw.text((card_x, card_y0 + len(reasons) * (card_h + card_gap) + 16),
              "Kovil AI · AI Engineering & Production Reliability",
              font=cta_f, fill=GREY_DIM)

    draw.rectangle([0, H - 4, W, H], fill=ORANGE)

    img = img.convert("RGB")
    out = os.path.join(OUT_DIR, "blog-why-ai-projects-fail-v2.jpg")
    img.save(out, "JPEG", quality=92)
    print(f"Saved: {out}")


# ─────────────────────────────────────────────────────────────────────────────
# IMAGE 7: n8n vs Zapier vs Power Automate
# Visual: 3-column comparison cards (green/orange/blue)
# ─────────────────────────────────────────────────────────────────────────────
def make_n8n_vs_zapier_image():
    img = Image.new("RGBA", (W, H), DARK_BG)
    draw = ImageDraw.Draw(img)
    gradient_bg(draw, (6, 14, 10), (16, 12, 26))
    draw_circle_glow(img, 200, 250, 300, (34, 197, 94),  alpha_max=40)
    draw_circle_glow(img, 600, 150, 280, (249, 115, 22), alpha_max=35)
    draw_circle_glow(img, 1000, 300, 300, (59, 130, 246), alpha_max=40)
    draw = ImageDraw.Draw(img)
    draw_grid(draw, alpha=11)

    tools = [
        {
            "name": "n8n",
            "tag": "Developer's Choice",
            "color": (34, 197, 94),
            "x": 40,
            "items": [
                ("Type",    "Self-hosted / Cloud"),
                ("Best for","Developers & DevOps"),
                ("Pricing", "Free self-host / $20+"),
                ("Logic",   "Code nodes + JS/Python"),
                ("Verdict", "Most flexible & powerful"),
            ],
        },
        {
            "name": "Zapier",
            "tag": "Easiest to Start",
            "color": (249, 115, 22),
            "x": 420,
            "items": [
                ("Type",    "Cloud only"),
                ("Best for","Non-technical teams"),
                ("Pricing", "Free → $20–$100+/mo"),
                ("Logic",   "Linear zaps, basic filters"),
                ("Verdict", "Fastest setup, limited scale"),
            ],
        },
        {
            "name": "Power Automate",
            "tag": "Microsoft Ecosystem",
            "color": (59, 130, 246),
            "x": 800,
            "items": [
                ("Type",    "Cloud + Desktop"),
                ("Best for","M365 / Azure shops"),
                ("Pricing", "Included in M365 plans"),
                ("Logic",   "Conditions, loops, AI Builder"),
                ("Verdict", "Best if you're already on M365"),
            ],
        },
    ]

    card_w  = 340
    card_h  = 430
    card_top = 95

    title_f = ImageFont.truetype(FONT_BOLD, 40)
    tag_f   = ImageFont.truetype(FONT_BOLD, 13)
    item_kf = ImageFont.truetype(FONT_REGULAR, 14)
    item_vf = ImageFont.truetype(FONT_BOLD, 15)

    for t in tools:
        cx  = t["x"]
        col = t["color"]

        card = Image.new("RGBA", (card_w, card_h), (0, 0, 0, 0))
        cd = ImageDraw.Draw(card)
        cd.rounded_rectangle([0, 0, card_w, card_h], radius=14, fill=(*col, 20))
        cd.rounded_rectangle([0, 0, card_w, card_h], radius=14, outline=(*col, 85), width=1)
        img.paste(card, (cx, card_top), mask=card)
        draw = ImageDraw.Draw(img)

        draw.rounded_rectangle([cx, card_top, cx + card_w, card_top + 5], radius=3, fill=col)
        draw.text((cx + card_w // 2, card_top + 52), t["name"], font=title_f, fill=WHITE, anchor="mm")

        tw = draw.textbbox((0,0), t["tag"], font=tag_f)[2] + 20
        tx = cx + (card_w - tw) // 2
        draw.rounded_rectangle([tx, card_top + 70, tx + tw, card_top + 92], radius=8, fill=(*col, 45))
        draw.text((tx + tw // 2, card_top + 81), t["tag"], font=tag_f, fill=col, anchor="mm")
        draw.line([cx + 20, card_top + 106, cx + card_w - 20, card_top + 106], fill=(255,255,255,20), width=1)

        for i, (k, v) in enumerate(t["items"]):
            y = card_top + 120 + i * 56
            draw.text((cx + 22, y),      k, font=item_kf, fill=GREY_DIM)
            draw.text((cx + 22, y + 20), v, font=item_vf, fill=WHITE)
            if i < len(t["items"]) - 1:
                draw.line([cx + 16, y + 48, cx + card_w - 16, y + 48], fill=(255,255,255,12), width=1)

    # Footer line
    foot_f = ImageFont.truetype(FONT_BOLD, 20)
    draw.text((W//2, card_top + card_h + 30),
              "Which workflow automation tool is right for your team?",
              font=foot_f, fill=WHITE, anchor="mm")
    draw.rectangle([0, H - 4, W, H], fill=ORANGE)

    img = img.convert("RGB")
    out = os.path.join(OUT_DIR, "blog-n8n-vs-zapier-vs-power-automate-v2.jpg")
    img.save(out, "JPEG", quality=92)
    print(f"Saved: {out}")


# ─────────────────────────────────────────────────────────────────────────────
# IMAGE 8: LLM Chatbot for Business
# Visual: chat bubble interface mockup on dark bg
# ─────────────────────────────────────────────────────────────────────────────
def make_llm_chatbot_image():
    img = Image.new("RGBA", (W, H), DARK_BG)
    draw = ImageDraw.Draw(img)
    gradient_bg(draw, (8, 10, 22), (18, 14, 32))
    draw_circle_glow(img, 750, 300, 400, (99, 102, 241), alpha_max=40)
    draw_circle_glow(img, 150, 500, 220, ORANGE, alpha_max=28)
    draw = ImageDraw.Draw(img)
    draw_grid(draw, alpha=11)

    PURPLE = (99, 102, 241)

    # ── Left: headline ─────────────────────────────────────────────────────
    tag_f = ImageFont.truetype(FONT_BOLD, 13)
    h1_f  = ImageFont.truetype(FONT_BOLD, 50)
    sub_f = ImageFont.truetype(FONT_REGULAR, 18)

    pill = "AI ENGINEERING"
    pw = draw.textbbox((0,0), pill, font=tag_f)[2] + 24
    draw.rounded_rectangle([56, 60, 56+pw, 88], radius=14, fill=(*PURPLE, 50))
    draw.text((56+pw//2, 74), pill, font=tag_f, fill=PURPLE, anchor="mm")

    draw.text((56, 118), "LLM Chatbots", font=h1_f, fill=WHITE)
    draw.text((56, 174), "for Business", font=h1_f, fill=PURPLE)
    draw.text((56, 238), "How to build, deploy and maintain", font=sub_f, fill=GREY_DIM)
    draw.text((56, 265), "a chatbot that actually works.", font=sub_f, fill=GREY_DIM)

    # Stat pills
    stats = [("< 48h", "to first response"), ("Top 1%", "LLM engineers"), ("100%", "IP ownership")]
    sf1 = ImageFont.truetype(FONT_BOLD, 17)
    sf2 = ImageFont.truetype(FONT_REGULAR, 13)
    sy = 320
    for val, label in stats:
        sw = draw.textbbox((0,0), val, font=sf1)[2] + draw.textbbox((0,0), " · " + label, font=sf2)[2] + 28
        draw.rounded_rectangle([56, sy, 56+sw, sy+34], radius=17, fill=(*PURPLE, 25))
        draw.rounded_rectangle([56, sy, 56+sw, sy+34], radius=17, outline=(*PURPLE, 60), width=1)
        vw = draw.textbbox((0,0), val, font=sf1)[2]
        draw.text((70, sy+17), val, font=sf1, fill=WHITE, anchor="lm")
        draw.text((70+vw+6, sy+17), "· "+label, font=sf2, fill=GREY_DIM, anchor="lm")
        sy += 46

    # ── Right: chat bubbles mockup ─────────────────────────────────────────
    chat_x  = 530
    chat_top = 55
    chat_w  = 620
    chat_h  = 560

    # Chat window frame
    frame = Image.new("RGBA", (chat_w, chat_h), (0,0,0,0))
    fd = ImageDraw.Draw(frame)
    fd.rounded_rectangle([0, 0, chat_w, chat_h], radius=18, fill=(255,255,255,10))
    fd.rounded_rectangle([0, 0, chat_w, chat_h], radius=18, outline=(*PURPLE, 70), width=1)
    img.paste(frame, (chat_x, chat_top), mask=frame)
    draw = ImageDraw.Draw(img)

    # Title bar
    draw.rounded_rectangle([chat_x, chat_top, chat_x+chat_w, chat_top+46], radius=18, fill=(*PURPLE, 40))
    title_bar_f = ImageFont.truetype(FONT_BOLD, 14)
    draw.text((chat_x+20, chat_top+23), "● Kovil AI Assistant", font=title_bar_f, fill=WHITE, anchor="lm")
    draw.text((chat_x+chat_w-20, chat_top+23), "Powered by LLM", font=ImageFont.truetype(FONT_REGULAR, 12), fill=GREY_DIM, anchor="rm")

    # Chat messages
    messages = [
        ("user",  "How can AI help my customer support team?"),
        ("bot",   "Great question. An LLM chatbot can handle 60–80%\nof tier-1 support tickets automatically — resolving\npassword resets, FAQs, and order tracking instantly."),
        ("user",  "What about complex issues that need a human?"),
        ("bot",   "The chatbot detects when a query is out-of-scope\nand routes it to your team — with full context\nattached so agents don't start from scratch."),
        ("user",  "How long does it take to build?"),
        ("bot",   "A production-ready chatbot connected to your\nknowledge base typically takes 4–8 weeks."),
    ]

    bub_f  = ImageFont.truetype(FONT_REGULAR, 14)
    bub_bf = ImageFont.truetype(FONT_BOLD, 14)
    my = chat_top + 60
    for role, text in messages:
        lines = text.split("\n")
        line_h = 20
        bh = len(lines) * line_h + 22
        max_bw = int(chat_w * 0.72)

        if role == "user":
            bw = max(min(max_bw, max(draw.textbbox((0,0), l, font=bub_f)[2] for l in lines) + 28), 80)
            bx = chat_x + chat_w - bw - 20
            bubble = Image.new("RGBA", (bw, bh), (0,0,0,0))
            bd = ImageDraw.Draw(bubble)
            bd.rounded_rectangle([0,0,bw,bh], radius=12, fill=(*PURPLE, 180))
            img.paste(bubble, (bx, my), mask=bubble)
            draw = ImageDraw.Draw(img)
            for li, line in enumerate(lines):
                draw.text((bx+14, my+12+li*line_h), line, font=bub_f, fill=WHITE)
        else:
            bw = max(min(max_bw, max(draw.textbbox((0,0), l, font=bub_f)[2] for l in lines) + 28), 80)
            bx = chat_x + 20
            bubble = Image.new("RGBA", (bw, bh), (0,0,0,0))
            bd = ImageDraw.Draw(bubble)
            bd.rounded_rectangle([0,0,bw,bh], radius=12, fill=(255,255,255,15))
            bd.rounded_rectangle([0,0,bw,bh], radius=12, outline=(255,255,255,30), width=1)
            img.paste(bubble, (bx, my), mask=bubble)
            draw = ImageDraw.Draw(img)
            for li, line in enumerate(lines):
                draw.text((bx+14, my+12+li*line_h), line, font=bub_f, fill=WHITE)
        my += bh + 10

    draw.rectangle([0, H-4, W, H], fill=ORANGE)
    img = img.convert("RGB")
    out = os.path.join(OUT_DIR, "blog-llm-chatbot-for-business-v2.jpg")
    img.save(out, "JPEG", quality=92)
    print(f"Saved: {out}")


# ─────────────────────────────────────────────────────────────────────────────
# IMAGE 9: Software Maintenance Time Bomb
# Visual: warning/danger theme — ticking clock + debt counter
# ─────────────────────────────────────────────────────────────────────────────
def make_maintenance_timebomb_image():
    img = Image.new("RGBA", (W, H), DARK_BG)
    draw = ImageDraw.Draw(img)
    gradient_bg(draw, (14, 8, 6), (22, 10, 8))
    RED   = (239, 68, 68)
    AMBER = (245, 158, 11)
    draw_circle_glow(img, 300, 340, 380, RED,   alpha_max=45)
    draw_circle_glow(img, 950, 200, 280, AMBER, alpha_max=30)
    draw = ImageDraw.Draw(img)
    draw_grid(draw, alpha=10)

    tag_f  = ImageFont.truetype(FONT_BOLD, 13)
    h1_f   = ImageFont.truetype(FONT_BOLD, 54)
    h2_f   = ImageFont.truetype(FONT_BOLD, 42)
    sub_f  = ImageFont.truetype(FONT_REGULAR, 18)
    num_f  = ImageFont.truetype(FONT_BOLD, 72)
    item_f = ImageFont.truetype(FONT_BOLD, 17)
    item_sf= ImageFont.truetype(FONT_REGULAR, 14)

    # Left: headline
    pill = "TECH DEBT"
    pw = draw.textbbox((0,0), pill, font=tag_f)[2] + 24
    draw.rounded_rectangle([56, 58, 56+pw, 86], radius=14, fill=(*RED, 40))
    draw.text((56+pw//2, 72), pill, font=tag_f, fill=RED, anchor="mm")

    draw.text((56, 108), "Your Software", font=h1_f, fill=WHITE)
    draw.text((56, 168), "Is a Time Bomb", font=h1_f, fill=RED)
    draw.text((56, 236), "Tech debt compounds silently.", font=sub_f, fill=GREY_DIM)
    draw.text((56, 262), "Here's how to defuse it.", font=sub_f, fill=GREY_DIM)

    # Warning stats left-bottom
    stats = [
        (RED,   "3×", "higher dev cost with heavy tech debt"),
        (AMBER, "40%", "of dev time spent on workarounds"),
        (ORANGE,"23%", "slower feature delivery every year"),
    ]
    sy = 320
    for col, val, label in stats:
        draw.text((56, sy), val, font=ImageFont.truetype(FONT_BOLD, 32), fill=col)
        draw.text((56, sy+38), label, font=item_sf, fill=GREY_DIM)
        sy += 86

    # Right: warning cards
    warnings = [
        (RED,   "⚠", "Outdated dependencies with known CVEs"),
        (RED,   "⚠", "No test coverage on core business logic"),
        (AMBER, "!", "Zero documentation for key modules"),
        (AMBER, "!", "Single developer knows the entire codebase"),
        (ORANGE,"↑", "Bug fix time growing month over month"),
    ]
    cx   = 580
    cw   = 580
    ch   = 72
    cgap = 12
    cy0  = 80
    icon_f = ImageFont.truetype(FONT_BOLD, 22)
    card_f = ImageFont.truetype(FONT_BOLD, 16)

    for i, (col, icon, text) in enumerate(warnings):
        cy = cy0 + i*(ch+cgap)
        card = Image.new("RGBA", (cw, ch), (0,0,0,0))
        cd = ImageDraw.Draw(card)
        cd.rounded_rectangle([0,0,cw,ch], radius=10, fill=(*col, 18))
        cd.rounded_rectangle([0,0,cw,ch], radius=10, outline=(*col, 65), width=1)
        img.paste(card, (cx, cy), mask=card)
        draw = ImageDraw.Draw(img)
        draw.rounded_rectangle([cx, cy, cx+4, cy+ch], radius=2, fill=col)
        draw.text((cx+28, cy+ch//2), icon, font=icon_f, fill=col, anchor="lm")
        draw.line([cx+52, cy+14, cx+52, cy+ch-14], fill=(*col, 40), width=1)
        draw.text((cx+68, cy+ch//2), text, font=card_f, fill=WHITE, anchor="lm")

    foot_f = ImageFont.truetype(FONT_REGULAR, 15)
    draw.text((cx, cy0+len(warnings)*(ch+cgap)+14),
              "Kovil AI · App Rescue & Software Reliability",
              font=foot_f, fill=GREY_DIM)

    draw.rectangle([0, H-4, W, H], fill=ORANGE)
    img = img.convert("RGB")
    out = os.path.join(OUT_DIR, "blog-software-maintenance-time-bomb-v2.jpg")
    img.save(out, "JPEG", quality=92)
    print(f"Saved: {out}")


# ─────────────────────────────────────────────────────────────────────────────
# IMAGE 10: Build an MVP in 4 Weeks
# Visual: 4-week sprint timeline with milestone markers
# ─────────────────────────────────────────────────────────────────────────────
def make_build_mvp_image():
    img = Image.new("RGBA", (W, H), DARK_BG)
    draw = ImageDraw.Draw(img)
    gradient_bg(draw, (6, 14, 16), (16, 12, 26))
    TEAL = (20, 184, 166)
    draw_circle_glow(img, 600, 220, 450, TEAL,   alpha_max=30)
    draw_circle_glow(img, 100, 550, 200, ORANGE, alpha_max=28)
    draw = ImageDraw.Draw(img)
    draw_grid(draw, alpha=11)

    tag_f  = ImageFont.truetype(FONT_BOLD, 13)
    h1_f   = ImageFont.truetype(FONT_BOLD, 54)
    sub_f  = ImageFont.truetype(FONT_REGULAR, 18)
    wk_f   = ImageFont.truetype(FONT_BOLD, 15)
    item_f = ImageFont.truetype(FONT_REGULAR, 14)
    stat_f = ImageFont.truetype(FONT_BOLD, 28)
    stat_sf= ImageFont.truetype(FONT_REGULAR, 13)

    # Headline
    pill = "MVP SPRINT"
    pw = draw.textbbox((0,0), pill, font=tag_f)[2] + 24
    draw.rounded_rectangle([W//2-pw//2, 38, W//2+pw//2, 66], radius=14, fill=(*TEAL, 50))
    draw.text((W//2, 52), pill, font=tag_f, fill=TEAL, anchor="mm")
    draw.text((W//2, 104), "Build Your MVP in 4 Weeks", font=h1_f, fill=WHITE, anchor="mm")
    draw.text((W//2, 152), "Fixed scope · Fixed price · Production-ready on day 28",
              font=sub_f, fill=GREY_DIM, anchor="mm")

    # 4-week lane
    weeks = [
        ("Week 1", "Discovery & Design",   ["Requirements", "Architecture", "UI wireframes"]),
        ("Week 2", "Core Build",           ["Backend APIs", "Database setup", "Auth & security"]),
        ("Week 3", "Integration & Test",   ["Frontend build", "API integration", "QA testing"]),
        ("Week 4", "Deploy & Launch",      ["Staging review", "Production deploy", "Handover docs"]),
    ]

    n    = len(weeks)
    bw   = 248
    bh   = 220
    gap  = 20
    tot  = n*bw + (n-1)*gap
    x0   = (W - tot) // 2
    y0   = 190

    cols = [TEAL, (99,102,241), (168,85,247), ORANGE]

    for i, (wk, title, items) in enumerate(weeks):
        bx  = x0 + i*(bw+gap)
        col = cols[i]

        card = Image.new("RGBA", (bw, bh), (0,0,0,0))
        cd = ImageDraw.Draw(card)
        cd.rounded_rectangle([0,0,bw,bh], radius=12, fill=(*col, 20))
        cd.rounded_rectangle([0,0,bw,bh], radius=12, outline=(*col, 85), width=1)
        img.paste(card, (bx, y0), mask=card)
        draw = ImageDraw.Draw(img)

        draw.rounded_rectangle([bx, y0, bx+bw, y0+5], radius=3, fill=col)
        draw.text((bx+bw//2, y0+26), wk,   font=wk_f, fill=col,   anchor="mm")
        draw.text((bx+bw//2, y0+50), title, font=wk_f, fill=WHITE, anchor="mm")
        draw.line([bx+16, y0+66, bx+bw-16, y0+66], fill=(255,255,255,20), width=1)

        for j, item in enumerate(items):
            iy = y0 + 82 + j*42
            # Tick circle
            tc = Image.new("RGBA", (W, H), (0,0,0,0))
            td = ImageDraw.Draw(tc)
            td.ellipse([bx+18, iy+1, bx+32, iy+15], fill=(*col, 60))
            img.paste(tc, mask=tc)
            draw = ImageDraw.Draw(img)
            draw.text((bx+25, iy+8), "✓", font=ImageFont.truetype(FONT_BOLD, 10), fill=WHITE, anchor="mm")
            draw.text((bx+40, iy+8), item, font=item_f, fill=GREY_LT, anchor="lm")

        # Arrow
        if i < n-1:
            ax = bx + bw + gap//2
            ay = y0 + bh//2
            draw.polygon([(ax-8, ay-6),(ax-8, ay+6),(ax+4, ay)], fill=GREY_DIM)

    # Stats row
    stats = [("4 weeks", "from kick-off to launch"), ("Fixed price", "no hourly surprises"), ("Top 1%", "vetted engineers")]
    sy = y0 + bh + 36
    sw = W // len(stats)
    for i, (val, label) in enumerate(stats):
        sx = i*sw + sw//2
        draw.text((sx, sy),    val,   font=stat_f,  fill=TEAL,    anchor="mm")
        draw.text((sx, sy+36), label, font=stat_sf, fill=GREY_DIM, anchor="mm")

    draw.rectangle([0, H-4, W, H], fill=ORANGE)
    img = img.convert("RGB")
    out = os.path.join(OUT_DIR, "blog-build-mvp-4-weeks-v2.jpg")
    img.save(out, "JPEG", quality=92)
    print(f"Saved: {out}")


# ─────────────────────────────────────────────────────────────────────────────
# IMAGE 11: What Is AI Integration
# Visual: hub-and-spoke — AI in centre connecting to business systems
# ─────────────────────────────────────────────────────────────────────────────
def make_ai_integration_image():
    img = Image.new("RGBA", (W, H), DARK_BG)
    draw = ImageDraw.Draw(img)
    gradient_bg(draw, (6, 8, 20), (18, 12, 28))
    INDIGO = (99, 102, 241)
    draw_circle_glow(img, W//2, H//2+40, 350, INDIGO, alpha_max=35)
    draw_circle_glow(img, 100, 100, 200, ORANGE, alpha_max=22)
    draw = ImageDraw.Draw(img)
    draw_grid(draw, alpha=11)

    tag_f  = ImageFont.truetype(FONT_BOLD, 13)
    h1_f   = ImageFont.truetype(FONT_BOLD, 46)
    sub_f  = ImageFont.truetype(FONT_REGULAR, 17)
    node_f = ImageFont.truetype(FONT_BOLD, 14)
    hub_f  = ImageFont.truetype(FONT_BOLD, 18)

    # Headline top
    pill = "AI INTEGRATION"
    pw = draw.textbbox((0,0), pill, font=tag_f)[2] + 24
    draw.rounded_rectangle([W//2-pw//2, 36, W//2+pw//2, 64], radius=14, fill=(*INDIGO, 50))
    draw.text((W//2, 50), pill, font=tag_f, fill=INDIGO, anchor="mm")
    draw.text((W//2, 102), "Connect AI to Your Business Stack", font=h1_f, fill=WHITE, anchor="mm")
    draw.text((W//2, 148), "No rip-and-replace — targeted integrations that save real time",
              font=sub_f, fill=GREY_DIM, anchor="mm")

    # Hub-and-spoke diagram
    cx, cy = W//2, 390
    hub_r  = 58
    spoke_r = 200

    # Spokes
    import math as _math
    nodes = [
        ("CRM",       (229, 101,  43), 270),
        ("ERP",       ( 59, 130, 246),  330),
        ("Data Lake", ( 34, 197,  94),   30),
        ("APIs",      (168,  85, 247),   90),
        ("Slack / Email",(245,158, 11), 150),
        ("Web App",   (239,  68,  68),  210),
    ]

    for name, col, angle_deg in nodes:
        rad = _math.radians(angle_deg)
        nx  = int(cx + spoke_r * _math.cos(rad))
        ny  = int(cy + spoke_r * _math.sin(rad))

        # Dashed line (draw short segments)
        steps = 8
        for s in range(steps):
            t0 = s / steps
            t1 = (s + 0.5) / steps
            x0l = int(cx + (nx-cx)*t0)
            y0l = int(cy + (ny-cy)*t0)
            x1l = int(cx + (nx-cx)*t1)
            y1l = int(cy + (ny-cy)*t1)
            draw.line([x0l, y0l, x1l, y1l], fill=(*col, 70), width=2)

        # Node circle
        nr = 38
        nc = Image.new("RGBA", (W, H), (0,0,0,0))
        nd = ImageDraw.Draw(nc)
        nd.ellipse([nx-nr, ny-nr, nx+nr, ny+nr], fill=(*col, 30))
        nd.ellipse([nx-nr, ny-nr, nx+nr, ny+nr], outline=(*col, 120), width=2)
        img.paste(nc, mask=nc)
        draw = ImageDraw.Draw(img)
        draw.text((nx, ny), name, font=node_f, fill=WHITE, anchor="mm")

    # Centre hub
    hub_bg = Image.new("RGBA", (W, H), (0,0,0,0))
    hd = ImageDraw.Draw(hub_bg)
    hd.ellipse([cx-hub_r, cy-hub_r, cx+hub_r, cy+hub_r], fill=(*INDIGO, 200))
    hd.ellipse([cx-hub_r, cy-hub_r, cx+hub_r, cy+hub_r], outline=(*INDIGO, 255), width=2)
    img.paste(hub_bg, mask=hub_bg)
    draw = ImageDraw.Draw(img)
    draw.text((cx, cy-10), "AI",     font=hub_f, fill=WHITE, anchor="mm")
    draw.text((cx, cy+12), "Layer",  font=ImageFont.truetype(FONT_REGULAR, 13), fill=GREY_LT, anchor="mm")

    draw.rectangle([0, H-4, W, H], fill=ORANGE)
    img = img.convert("RGB")
    out = os.path.join(OUT_DIR, "blog-what-is-ai-integration-v2.jpg")
    img.save(out, "JPEG", quality=92)
    print(f"Saved: {out}")


# ─────────────────────────────────────────────────────────────────────────────
# IMAGE 12: Real Cost of Building an MVP in 2026
# Visual: cost breakdown by option (agency vs freelancer vs Kovil)
# ─────────────────────────────────────────────────────────────────────────────
def make_real_cost_mvp_image():
    img = Image.new("RGBA", (W, H), DARK_BG)
    draw = ImageDraw.Draw(img)
    gradient_bg(draw, (8, 10, 20), (20, 14, 28))
    draw_circle_glow(img, 900, 180, 320, ORANGE, alpha_max=38)
    draw_circle_glow(img, 150, 500, 240, (59, 130, 246), alpha_max=28)
    draw = ImageDraw.Draw(img)
    draw_grid(draw, alpha=11)

    tag_f  = ImageFont.truetype(FONT_BOLD, 13)
    h1_f   = ImageFont.truetype(FONT_BOLD, 48)
    sub_f  = ImageFont.truetype(FONT_REGULAR, 18)
    row_f  = ImageFont.truetype(FONT_BOLD, 17)
    row_sf = ImageFont.truetype(FONT_REGULAR, 15)

    # Headline left
    pill = "MVP ECONOMICS"
    pw = draw.textbbox((0,0), pill, font=tag_f)[2] + 24
    draw.rounded_rectangle([56, 58, 56+pw, 86], radius=14, fill=(*ORANGE, 50))
    draw.text((56+pw//2, 72), pill, font=tag_f, fill=ORANGE, anchor="mm")
    draw.text((56, 114), "The Real Cost of", font=h1_f, fill=WHITE)
    draw.text((56, 168), "Building an MVP", font=h1_f, fill=WHITE)
    draw.text((56, 222), "in 2026", font=h1_f, fill=ORANGE)
    draw.text((56, 290), "What agencies won't tell you —", font=sub_f, fill=GREY_DIM)
    draw.text((56, 316), "and how to budget right.", font=sub_f, fill=GREY_DIM)

    # Comparison table right
    options = [
        # label, cost, time, risk, color, highlight
        ("US Agency",      "$120k–$250k",  "4–9 months",  "High overhead",        (239,68,68),    False),
        ("Offshore Agency","$40k–$100k",   "3–7 months",  "Quality risk",         (245,158,11),   False),
        ("Freelancers",    "$30k–$80k",    "3–6 months",  "Coordination cost",    (99,102,241),   False),
        ("Kovil AI",       "$25k–$70k",    "4 weeks",     "Fixed scope & price",  ORANGE,         True),
    ]

    tx   = 550
    tw   = 620
    th   = 88
    tgap = 12
    ty0  = 68

    hdr_f = ImageFont.truetype(FONT_BOLD, 12)
    # Column headers
    cols_x = [tx+16, tx+220, tx+350, tx+480]
    hdrs   = ["Option", "Cost", "Timeline", "Risk"]
    for hx, hdr in zip(cols_x, hdrs):
        draw.text((hx, ty0), hdr, font=hdr_f, fill=GREY_DIM)
    ty0 += 22

    for i, (label, cost, time, risk, col, hl) in enumerate(options):
        ty = ty0 + i*(th+tgap)
        card = Image.new("RGBA", (tw, th), (0,0,0,0))
        cd = ImageDraw.Draw(card)
        bg_a = 35 if hl else 15
        cd.rounded_rectangle([0,0,tw,th], radius=10, fill=(*col, bg_a))
        cd.rounded_rectangle([0,0,tw,th], radius=10, outline=(*col, 80 if hl else 50), width=2 if hl else 1)
        img.paste(card, (tx, ty), mask=card)
        draw = ImageDraw.Draw(img)
        draw.rounded_rectangle([tx, ty, tx+4, ty+th], radius=2, fill=col)

        txt_col = WHITE if hl else GREY_LT
        draw.text((tx+16, ty+th//2), label, font=row_f if hl else row_sf, fill=txt_col, anchor="lm")
        draw.text((tx+220, ty+th//2), cost,  font=row_f if hl else row_sf, fill=txt_col, anchor="lm")
        draw.text((tx+350, ty+th//2), time,  font=row_f if hl else row_sf, fill=txt_col, anchor="lm")
        draw.text((tx+480, ty+th//2), risk,  font=row_sf, fill=GREY_LT if not hl else col, anchor="lm")

        if hl:
            badge_f = ImageFont.truetype(FONT_BOLD, 11)
            draw.text((tx+tw-14, ty+14), "BEST VALUE", font=badge_f, fill=col, anchor="rm")

    draw.rectangle([0, H-4, W, H], fill=ORANGE)
    img = img.convert("RGB")
    out = os.path.join(OUT_DIR, "blog-real-cost-building-mvp-2026-v2.jpg")
    img.save(out, "JPEG", quality=92)
    print(f"Saved: {out}")


# ─────────────────────────────────────────────────────────────────────────────
# IMAGE 13: AI Automation for NYC Ad & Marketing Agencies
# Visual: NYC skyline silhouette + automation workflow on dark bg
# ─────────────────────────────────────────────────────────────────────────────
def make_nyc_agencies_image():
    img = Image.new("RGBA", (W, H), DARK_BG)
    draw = ImageDraw.Draw(img)
    gradient_bg(draw, (6, 8, 18), (16, 10, 24))
    VIOLET = (124, 58, 237)
    draw_circle_glow(img, 600, 150, 400, VIOLET, alpha_max=30)
    draw_circle_glow(img, 100, 400, 250, ORANGE, alpha_max=28)
    draw = ImageDraw.Draw(img)
    draw_grid(draw, alpha=10)

    tag_f  = ImageFont.truetype(FONT_BOLD, 13)
    h1_f   = ImageFont.truetype(FONT_BOLD, 52)
    sub_f  = ImageFont.truetype(FONT_REGULAR, 18)
    loc_f  = ImageFont.truetype(FONT_BOLD, 20)
    item_f = ImageFont.truetype(FONT_BOLD, 16)
    item_sf= ImageFont.truetype(FONT_REGULAR, 14)

    # NYC skyline silhouette (simple block buildings)
    skyline_y = H - 60
    buildings = [
        (0,   80, 40),
        (38,  120, 45),
        (80,  60,  35),
        (113, 150, 50),
        (160, 90,  42),
        (200, 180, 55),
        (252, 80,  38),
        (288, 130, 48),
        (333, 70,  40),
        (370, 160, 52),
        (420, 100, 45),
        (460, 200, 60),
        (515, 90,  42),
        (554, 140, 50),
        (600, 110, 45),
        (640, 80,  38),
        (675, 170, 55),
        (726, 60,  35),
        (758, 130, 48),
    ]
    for bx, bh_b, bw_b in buildings:
        draw.rectangle([bx, skyline_y-bh_b, bx+bw_b, skyline_y],
                       fill=(255,255,255,12))
        # Windows
        for wy in range(skyline_y-bh_b+8, skyline_y-8, 16):
            for wx in range(bx+5, bx+bw_b-5, 10):
                if (wx + wy) % 3 != 0:
                    draw.rectangle([wx, wy, wx+5, wy+8], fill=(*ORANGE, 60))

    # Headline left
    pill = "NYC · AI AUTOMATION"
    pw = draw.textbbox((0,0), pill, font=tag_f)[2] + 24
    draw.rounded_rectangle([56, 54, 56+pw, 82], radius=14, fill=(*ORANGE, 50))
    draw.text((56+pw//2, 68), pill, font=tag_f, fill=ORANGE, anchor="mm")

    draw.text((56, 108), "AI Automation", font=h1_f, fill=WHITE)
    draw.text((56, 164), "for NYC Ad &", font=h1_f, fill=WHITE)
    draw.text((56, 220), "Marketing Agencies", font=ImageFont.truetype(FONT_BOLD, 40), fill=ORANGE)
    draw.text((56, 278), "Replace your most time-consuming manual", font=sub_f, fill=GREY_DIM)
    draw.text((56, 304), "workflows — starting this week.", font=sub_f, fill=GREY_DIM)

    # Right: 5 automation wins
    wins = [
        (ORANGE, "Campaign performance reporting — automated"),
        (VIOLET, "Creative brief generation from minimal inputs"),
        (ORANGE, "Competitive media intelligence at scale"),
        (VIOLET, "AI-powered new business outreach"),
        (ORANGE, "Geo-targeted content at agency speed"),
    ]
    wx0  = 620
    ww   = 540
    wh   = 72
    wgap = 12
    wy0  = 70

    for i, (col, text) in enumerate(wins):
        wy = wy0 + i*(wh+wgap)
        card = Image.new("RGBA", (ww, wh), (0,0,0,0))
        cd = ImageDraw.Draw(card)
        cd.rounded_rectangle([0,0,ww,wh], radius=10, fill=(*col, 18))
        cd.rounded_rectangle([0,0,ww,wh], radius=10, outline=(*col, 65), width=1)
        img.paste(card, (wx0, wy), mask=card)
        draw = ImageDraw.Draw(img)
        draw.rounded_rectangle([wx0, wy, wx0+4, wy+wh], radius=2, fill=col)
        draw.text((wx0+22, wy+wh//2-10), f"#{i+1}", font=ImageFont.truetype(FONT_BOLD, 13), fill=col, anchor="lm")
        draw.text((wx0+52, wy+wh//2), text, font=item_f, fill=WHITE, anchor="lm")

    foot_f = ImageFont.truetype(FONT_REGULAR, 14)
    draw.text((wx0, wy0+len(wins)*(wh+wgap)+14),
              "Kovil AI · NYC Agency AI Automation",
              font=foot_f, fill=GREY_DIM)

    draw.rectangle([0, H-4, W, H], fill=ORANGE)
    img = img.convert("RGB")
    out = os.path.join(OUT_DIR, "blog-ai-automation-nyc-agencies-v2.jpg")
    img.save(out, "JPEG", quality=92)
    print(f"Saved: {out}")


if __name__ == "__main__":
    make_cost_image()
    make_llm_comparison_image()
    make_rag_vs_finetuning_image()
    make_agents_vs_chatbots_image()
    make_ai_dev_lifecycle_image()
    make_why_ai_fails_image()
    make_n8n_vs_zapier_image()
    make_llm_chatbot_image()
    make_maintenance_timebomb_image()
    make_build_mvp_image()
    make_ai_integration_image()
    make_real_cost_mvp_image()
    make_nyc_agencies_image()
    print("Done.")
