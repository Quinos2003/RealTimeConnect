# RealTimeConnect
develop a real-time video streaming application using Django and Websockets that allows users to stream their webcam video to the backend. It will then be sent back to the front end and displayed on the same page

RealTimeConnect is a Django web application that allows users to start/stop their webcam stream and view the received video from the backend in real-time.

## Features

- User can start/stop the webcam stream.
- User's webcam video is displayed on the page.
- Video received from the backend is displayed on the page.
- Real-time video streaming using WebSockets.
- Simple integration with Django and JavaScript.

## Requirements

- Python 3.x
- Django
- Django Channels

## Installation

1. Clone the repository:

   ```shell
    git clone https://github.com/Quinos2003/RealTimeConnect.git

2. Navigate to the project directory:
    cd RealTimeConnect

3. Create a virtual environment:
    python3 -m venv env

4. Activate the virtual environment:
    source env/bin/activate

5. Install the project dependencies:
    pip install -r requirements.txt

6. Apply database migrations:
    python manage.py migrate

7. Run the development server:
    Run the development server:

8. Access the application in your web browser at http://127.0.0.1:8000/webcam/ .
