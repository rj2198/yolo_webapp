from flask import Flask, Response, request
from flask_cors import CORS
from yolo_app import YOLOApp

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

yolo_app = YOLOApp()

@app.route('/start', methods=['GET'])
def start():
    yolo_app.start()
    return "Object detection started"

@app.route('/stop', methods=['GET'])
def stop():
    yolo_app.stop()
    return "Object detection stopped"

@app.route('/video_feed')
def video_feed():
    return Response(yolo_app.generate(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5005, debug=True)
