from channels.generic.websocket import AsyncWebsocketConsumer

class WebcamConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = "webcam_room"
        self.room_group_name = f"webcam_group_{self.room_name}"

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )


# class WebcamConsumer(AsyncWebsocketConsumer):
#     async def connect(self):
#         await self.accept()

#     async def disconnect(self, close_code):
#         pass

#     async def receive(self, text_data):
#         # Process received video frames (optional)
#         # Send processed video frames back to frontend
#         await self.send(text_data)
