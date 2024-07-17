import cv2
from collections import defaultdict
from ultralytics import YOLO
import pytesseract
import numpy as np
import threading
import time

class YOLOApp:
    def __init__(self):
        self.model = YOLO('yolov8n.pt')
        self.cap = cv2.VideoCapture(0)
        self.running = False
        self.frame = None
        self.lock = threading.Lock()

    def start(self):
        self.running = True
        self.thread = threading.Thread(target=self.process_frames)
        self.thread.start()

    def stop(self):
        self.running = False
        self.thread.join()
        self.cap.release()

    def process_frames(self):
        while self.running:
            success, frame = self.cap.read()
            if success:
                results = self.model.track(frame, classes=[0, 1, 2, 3, 5, 7], persist=True, tracker="bytetrack.yaml")
                if results[0].boxes is not None:
                    annotated_frame = results[0].plot()
                    with self.lock:
                        self.frame = annotated_frame
            time.sleep(0.03)  # simulate a 30 fps frame rate

    def generate(self):
        while True:
            with self.lock:
                if self.frame is None:
                    continue
                ret, jpeg = cv2.imencode('.jpg', self.frame)
                frame = jpeg.tobytes()
                yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

if __name__ == "__main__":
    yolo_app = YOLOApp()
    yolo_app.start()
    time.sleep(30)
    yolo_app.stop()
