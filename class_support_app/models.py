from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from accounts.models import CustomUser

GENDER_CHOICES = (
    ("女性","女性"),
    ("男性","男性")
)

class Profile(models.Model):
    user = models.OneToOneField(CustomUser,
    on_delete=models.CASCADE)
    gender = models.CharField(
        "性別",max_length=2,choices=GENDER_CHOICES,blank=True)
    numbers = models.CharField(
        "生徒番号",max_length=9,blank=True
    )
    class Meta:
        verbose_name_plural = 'Student_List'
    
    def __str__(self):
        return self.user