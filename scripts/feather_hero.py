import os
import math
from PIL import Image

src_path = r"C:\Users\davis\.gemini\antigravity-ide\brain\0998c49e-e887-45f0-a040-581529fc61a9\hero_homepage_abstract_1783697344607.png"
dest_path = r"c:\Users\davis\Projects\Kovil-AI-V2-Website\public\hero-homepage-circles-v3.png"

if not os.path.exists(src_path):
    print("Source file not found")
    exit(1)

# Open image
img = Image.open(src_path).convert("RGBA")
width, height = img.size
pix = img.load()

# Sample background color at (0, 0)
bg_color = pix[0, 0]
print(f"Sampling background color at (0,0): {bg_color}")

# 1. First pass: Make background pixels transparent based on color distance
tolerance = 45  # higher tolerance to catch vignetting
for y in range(height):
    for x in range(width):
        r, g, b, a = pix[x, y]
        dist = ((r - bg_color[0])**2 + (g - bg_color[1])**2 + (b - bg_color[2])**2)**0.5
        if dist < tolerance:
            pix[x, y] = (r, g, b, 0)

# 2. Second pass: Apply a radial/border fade mask so the edges blend perfectly to 0 alpha
border_fade_width = 120  # pixels from border where fade starts

for y in range(height):
    for x in range(width):
        r, g, b, a = pix[x, y]
        if a == 0:
            continue
            
        # Calculate distance to nearest border
        dist_left = x
        dist_right = width - 1 - x
        dist_top = y
        dist_bottom = height - 1 - y
        
        min_border_dist = min(dist_left, dist_right, dist_top, dist_bottom)
        
        if min_border_dist < border_fade_width:
            # Linear scaling of alpha near borders
            factor = min_border_dist / border_fade_width
            # Smoothstep for better blending
            factor = factor * factor * (3 - 2 * factor)
            new_a = int(a * factor)
            pix[x, y] = (r, g, b, new_a)

img.save(dest_path, "PNG")
print("Feathered transparency image saved successfully to:", dest_path)
