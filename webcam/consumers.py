from channels.generic.websocket import AsyncWebsocketConsumer

class WebcamConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        # Process received video frames (optional)
        # Send processed video frames back to frontend
        await self.send(text_data)
