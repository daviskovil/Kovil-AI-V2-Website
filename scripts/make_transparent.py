import os
from PIL import Image

src_path = r"C:\Users\davis\.gemini\antigravity-ide\brain\0998c49e-e887-45f0-a040-581529fc61a9\hero_homepage_3d_1783696791008.png"
dest_path = r"c:\Users\davis\Projects\Kovil-AI-V2-Website\public\hero-homepage-circles-v3.png"

if not os.path.exists(src_path):
    print(f"Source file {src_path} does not exist.")
    exit(1)

# Open image and convert to RGBA
img = Image.open(src_path).convert("RGBA")
datas = img.getdata()

# Sample the background color at top-left corner
bg_color = datas[0]
print(f"Sampled background color at (0,0): {bg_color}")

# Define a tolerance for matching the background color
# Since the background might have slight compression/gradients, we check RGB distance
tolerance = 25  # adjust if needed

new_data = []
for item in datas:
    # Calculate Euclidean distance in RGB space
    dist = ((item[0] - bg_color[0])**2 + (item[1] - bg_color[1])**2 + (item[2] - bg_color[2])**2)**0.5
    if dist < tolerance:
        # Make transparent
        new_data.append((0, 0, 0, 0))
    else:
        new_data.append(item)

img.putdata(new_data)
img.save(dest_path, "PNG")
print(f"Background removed. Saved transparent PNG to: {dest_path}")
