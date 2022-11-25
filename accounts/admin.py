from django.contrib import admin
from .models import CustomUser
from import_export.admin import ImportExportMixin
from import_export import resources

# Register your models here.
admin.site.register(CustomUser)

class UserResource(resources.ModelResource):
  class Meta:
    model = CustomUser

@admin.register(CustomUser)
class UserAdmin(ImportExportMixin,admin.ModelAdmin):
  resource_class = UserResource