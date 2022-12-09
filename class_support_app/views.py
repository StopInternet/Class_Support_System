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
from accounts.models import CustomUser
from django.contrib import messages
from .forms import CreatePollForm
from .models import Poll
from django.http import HttpResponse

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
    messages.success(request,'登録が完了したと思う？')
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

class OnlyYouMixin(UserPassesTestMixin):
    raise_exception = True
    def lock_func(self):
        user = self.request.user
        return user.username == self.kwargs['username'] and user.is_superuser
class UserDeleteView(LoginRequiredMixin,generic.DeleteView):
    model = CustomUser
    template_name = "profile_delete.html"
    def delete(self,request,*args,**kwargs):
        return super().delete(request,*args,**kwargs)

def UserList(request):
    model = CustomUser
    context = {
        "username":model.username
    }
    return render(request,'profile_list.html',context)

def poll_home(request):
    polls = Poll.objects.all()
    context = {
        'polls':polls
    }
    return render(request,'poll_home.html',context)

def poll_create(request):
    if request.method == 'POST':
        form = CreatePollForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('class_support_app:poll_home')
    else:
        form = CreatePollForm()
    context = {
        'form':form
    }
    return render(request,'poll_create.html',context)

def poll_vote(request, poll_id):
    poll = Poll.objects.get(pk=poll_id)
    if request.method == 'POST':
        selected_option = request.POST['poll']
        if selected_option == 'option1':
            poll.option_one_count += 1
        elif selected_option == 'option2':
            poll.option_two_count += 1
        else:
            return HttpResponse(400, 'Invalid form')

        poll.save()

        return redirect('class_support_app:poll_results', poll.id)

    context = {
        'poll' : poll
    }
    return render(request, 'poll_vote.html', context)

def poll_results(request,poll_id):
    poll = Poll.objects.get(pk=poll_id)
    context = {
        'poll':poll
    }
    return render(request,'poll_results.html',context)

