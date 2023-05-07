from django.shortcuts import render

def webcam_view(request):
    return render(request, 'webcam/webcam.html')
