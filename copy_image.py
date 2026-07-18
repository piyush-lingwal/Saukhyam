import shutil

src = r"C:\Users\tshet\.gemini\antigravity-ide\brain\35340bc6-3502-4c4f-8041-cd1f380f8a1f\campus_sustainability_bg_1783414087080.png"
dst = r"c:\Users\tshet\Downloads\Trisha saukhyam\public\images\programs\campus-gains-bg.png"

try:
    shutil.copy(src, dst)
    print("Success: Copied image to", dst)
except Exception as e:
    print("Error:", e)
