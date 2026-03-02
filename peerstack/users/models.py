from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    bio = models.TextField(blank=True)
    github_profile = models.URLField(blank=True)
    linkedin_profile = models.URLField(blank=True)

    year = models.IntegerField(blank=True, null=True)
    college = models.CharField(max_length=255, blank=True)
    dept = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.user.username
