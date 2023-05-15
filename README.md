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

## Usage
Click the "Start" button to grant access to your webcam.
Your webcam video will be displayed in the first video element.
The received video from the backend will be displayed in the second video element.
Click the "Stop" button to stop the webcam stream.
## Directory Structure
The directory structure of the project is as follows:

RealTimeConnect/          # Main project directory

  ├── RealTimeConnect/     # Django project settings and configuration
  
  ├── webcam/              # Django app directory
  
  │   ├── templates/       # HTML template files
  
  │   ├── static/          # Static files (JavaScript, CSS, images)
  
  │   ├── consumers.py     # Django Channels WebSocket consumer
  
  │   ├── routing.py       # WebSocket routing configuration
  
  │   ├── views.py         # Django views for the webcam app
  
  │   └── urls.py          # URL configuration for the webcam app
  
  ├── README.md            # Project README file
  
  └── requirements.txt     # Project dependencies
  
## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
