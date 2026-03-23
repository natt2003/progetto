import tkinter as tk
from tkinter import messagebox
import threading
import time

def popup():
    root = tk.Tk()
    root.withdraw()  # nasconde la finestra principale

    messagebox.showwarning(
        "⚠️ ATTENZIONE",
        "HAI PRESO UN VIRUS!!!\n\n"
        "Il tuo PC verrà formattato in 10 secondi...\n\n"
        "(tranquillo, è solo uno scherzo 😄)"
    )
    root.destroy()

popup()