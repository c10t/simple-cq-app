from django.db import models

# Create your models here.


class Story(models.Model):
    item_id = models.IntegerField()
    title = models.TextField()
    by = models.TextField()
    time = models.IntegerField()
    score = models.IntegerField()
    url = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
