import os
from django import forms
from django.contrib.auth.forms import UserCreationForm,PasswordChangeForm,AuthenticationForm
from django.contrib.auth.models import User

#ここから見る。

class data_form_student(UserCreationForm):
  def __init__(self, *args,**kwargs):
    super().__init__(*args,**kwargs)

    self.fields['class_id'].widget.attrs['class'] = 'form-control'
    self.fields['student_number'].widget.attrs['class'] = 'form-control'
    self.fields['username'].widget.attrs['class'] = 'form-control'
    self.fields['password'].widget.attrs['class'] = 'form-control'
  
  class Meta:
    model = User
    fields = ("username","password")

