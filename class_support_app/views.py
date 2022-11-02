from django.views import generic

class IndexView(generic.TemplateView):
    template_name = "index.html"

class TimerMainView(generic.TemplateView):
    template_name= "timer.html"

class TimerDentakuView(generic.TemplateView):
    template_name = "timer_kentei.html"

class TimerAoccView(generic.TemplateView):
    template_name = "timer_aocc.html"