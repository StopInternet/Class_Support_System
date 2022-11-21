from django.views import generic
from django.views.generic import TemplateView #テンプレートタグ



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
