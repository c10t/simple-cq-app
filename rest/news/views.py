from rest_framework import viewsets
from .models import Story
from .serializer import StorySerializer
# Create your views here.


class StoryViewSet(viewsets.ModelViewSet):
    queryset = Story.objects.all()
    serializer_class = StorySerializer
