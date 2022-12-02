from accounts.models import CustomUser
from django import forms
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.models import User
from django.forms import ModelForm
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

class LoginForm(AuthenticationForm):
  def __init__(self,*args,**kwargs):
    super().__init__(*args,**kwargs)
    self.fields['username'].widget.attrs['class'] = 'form-control'
    self.fields['password'].widget.attrs['class'] = 'form-control'
    
class UserCreateForm(UserCreationForm):
  def __init__(self,*args,**kwargs):
    super().__init__(*args,**kwargs)
    self.fields['username'].widget.attrs['class'] = 'form-control'
    self.fields['email'].widget.attrs['class'] = 'form-control'
    self.fields['password1'].widget.attrs['class'] = 'form-control'
    self.fields['password2'].widget.attrs['class'] = 'form-control'
    self.fields['first_name'].widget.attrs['class'] = 'form-control'
    self.fields['last_name'].widget.attrs['class'] = 'form-control'

  class Meta:
    model = CustomUser
    fields = (
      "username",
      "email",
      "password1",
      "password2",
      "first_name",
      "last_name",
    )

  def clean_email(self):
    email = self.cleaned_data["email"]
    try:
      validate_email(email)
    except ValidationError:
      raise ValidationError("正しいメールアドレスを入力してください。")
    
    try:
      CustomUser.objects.get(email=email)
    except CustomUser.DoesNotExist:
      return email
    else:
      raise ValidationError("このメールアドレスは既に使用されています。<br>別のメールアドレスを入力してください。")

class UserChangeFrom(forms.ModelForm):
  first_name = forms.CharField(max_length=30)
  last_name = forms.CharField(max_length=30)

  def __init__(self,*args,**kwargs):
    super().__init__(*args,**kwargs)
    self.user = kwargs.get('instance',None)
    self.fields['username'].widget.attrs['class'] = 'form-control'
    self.fields['first_name'].widget.attrs['class'] = 'form-control'
    self.fields['last_name'].widget.attrs['class'] = 'form-control'
    
  class Meta:
    model = CustomUser
    fields = (
      "username","first_name","last_name"
    )
  
class UserPasswordChangeForm(PasswordChangeForm):
  pass
