from rest_framework import serializers
from .models import Story


class StorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Story
        fields = ('item_id', 'title', 'by', 'url', 'score', 'time', 'created_at')
