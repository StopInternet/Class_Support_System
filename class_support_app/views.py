from django.views import generic
from django.views.generic import TemplateView ,CreateView
from .forms import data_form_student
from django.shortcuts import render,redirect
from django.contrib.auth import login,authenticate
from django.contrib.auth.models import User
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
    
class Create_account(CreateView):
    def post(self,request,*args,**kwargs):
        form=data_form_student(data=request.POST)
        if form.is_valid():
            form.save()
            class_id = form.cleaned_data.get('class_id')
            students_number = form.cleaned_data.get('students_number')
            name = form.cleaned_data.get('name')
            password = form.cleaned_data.get('password')

            student_user = authenticate(
                class_id= class_id,
                students_number=students_number,
                name=name,
                password=password)
            login(request,student_user)
            return redirect('/')
        return render(request,'register_student.html',{'form':form,})
    
    def get(self,request,*args,**kwargs):
        form = data_form_student(request.POST)
        return render(request,'register_student.html',{'form':form,})
create_account = Create_account.as_view()