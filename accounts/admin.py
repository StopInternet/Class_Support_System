from django.contrib import admin
from .models import CustomUser

admin.site.register(CustomUser)
admin.site.disable_action('delete_selected')
