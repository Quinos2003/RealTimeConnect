// Establish WebSocket connection
const socket = new WebSocket('ws://localhost:8000/ws/webcam/');

// Get video elements
const userVideo = document.getElementById('user-video');
const receivedVideo = document.getElementById('received-video');

// Start button event listener
document.getElementById('start-btn').addEventListener('click', () => {
  // Request access to user's webcam
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      // Display user's webcam stream
      userVideo.srcObject = stream;

      // Start sending video frames to the backend
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          // Convert video frame to base64-encoded string
          const reader = new FileReader();
          reader.onloadend = () => {
            // Send the base64-encoded video frame to the backend
            socket.send(reader.result);
          };
          reader.readAsDataURL(event.data);
        }
      };
      mediaRecorder.start(1000 / 30); // Adjust the frame rate as needed (e.g., 30 FPS)
    })
    .catch((error) => {
      console.error('Error accessing webcam:', error);
    });
});

// WebSocket message event listener
socket.addEventListener('message', (event) => {
  // Update received video with the received frames from the backend
  receivedVideo.src = event.data;
});

// Stop button event listener
document.getElementById('stop-btn').addEventListener('click', () => {
  // Close the WebSocket connection
  socket.close();

  // Stop displaying the user's webcam stream
  const userMediaStream = userVideo.srcObject;
  if (userMediaStream) {
    const tracks = userMediaStream.getTracks();
    tracks.forEach((track) => track.stop());
  }

  // Clear the user's webcam stream from the video element
  userVideo.srcObject = null;
});
