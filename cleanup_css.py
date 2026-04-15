filepath = r'e:\Saukhyam\saukhyam-website\src\app\page.module.css'

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Remove lines 1158 to 1606 (1-indexed), i.e. indices 1157 to 1605
start_idx = 1157
end_idx = 1606

new_lines = lines[:start_idx] + lines[end_idx:]

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"Done. Removed {end_idx - start_idx} lines. New total: {len(new_lines)}")
