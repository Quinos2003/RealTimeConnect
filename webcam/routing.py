# from django.urls import re_path
# from .consumers import MyConsumer

# websocket_urlpatterns = [
#     re_path(r'ws/my-consumer/$', MyConsumer.as_asgi()),
# ]
from django.urls import re_path
from webcam.consumers import WebcamConsumer

websocket_urlpatterns = [
    re_path(r'ws/webcam/$', WebcamConsumer.as_asgi()),
]