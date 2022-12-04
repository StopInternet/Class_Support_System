from django.views import generic
from django.contrib.auth import authenticate, models, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin,UserPassesTestMixin
from django.views.generic import FormView
from .forms import UserChangeFrom,UserPasswordChangeForm,UserCreationForm ,UserCreateForm
from django.urls import reverse_lazy
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required
from django.shortcuts import render,get_object_or_404,redirect
from django.contrib.auth.views import LoginView, LogoutView

def logoutfunc(request):
    template_name = "index.html"
    logout(request)
    
def logoutfunc(request):
    template_name = "index.html"
    logout(request,template_name)

class OnlyYouMixin(UserPassesTestMixin):
    raise_exception = True
    def beta_func(self):
        user = self.request.user
        return user.pk == self.kwargs['pk'] or user.is_superuser

class IndexView(generic.TemplateView):
    template_name = "index.html"

class TimerMainView(generic.TemplateView):
    template_name= "timer.html"

class TimerDentakuView(generic.TemplateView):
    template_name = "timer_kentei.html"

class TimerAocckagenView(generic.TemplateView):
    template_name = "timer_aocc_kagen.html"

class TimerAocczyouzyoView(generic.TemplateView):
    template_name = "timer_aocc_zyouzyo.html"

class TimerAoccmitoriView(generic.TemplateView):
    template_name = "timer_aocc_mitori.html"

class TimerAoccdenpyouView(generic.TemplateView):
    template_name = "timer_aocc_denpyou.html"

class SekigaeView(generic.TemplateView):
    template_name = "sekigae.html"

class register_studentView(generic.TemplateView):
    template_name = "register_student.html"

class login_Student(generic.TemplateView):
    template_name = "login.html"

#ユーザー情報確認
def profile(request):
    template_name = "profile.html"
    context = {
        'user':request.user
    }
    return render(request,template_name,context)

#新規登録
def register(request):
    form = UserCreateForm(request.POST or None)
    if request.method == "POST" and form.is_valid():
        user = form.save(commit=False)
        user.save()
        return redirect("class_support_app:index")
    context = {
        "form": form,
    }
    return render(request,'profile_register.html',context)

#ログイン情報の変更
@login_required
def change_data(request):
    form = UserChangeFrom(request.POST or None, instance=request.user)
    if request.method == "POST" and form.is_valid():
        form.save()
        return redirect("class_support_app:index")
    
    context = {
        "form": form,
    }
    return render(request,'profile_change.html',context)

@login_required
def change_password(request):
    form = UserPasswordChangeForm(request.user,request.POST or None)
    if request.method == "POST" and form.is_valid():
        form.save()
        return redirect("class_support_app:index")
    context = {
        "form":form,
    }
    return render(request,'profile_password.html',context)