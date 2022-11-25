from django.urls import path
from . import views

app_name = 'class_support_app'
urlpatterns = [
    path('',views.IndexView.as_view(),name="index"),
    path('timer',views.TimerMainView.as_view(),name="timer"),
    path('timer_kentei',views.TimerDentakuView.as_view(),name="timer_kentei"),
    path('timer_aocc_kagen',views.TimerAocckagenView.as_view(),name="timer_aocc_kagen"),
    path('timer_aocc_zyouzyo',views.TimerAocczyouzyoView.as_view(),name="timer_aocc_zyouzyo"),
    path('timer_aocc_mitori',views.TimerAoccmitoriView.as_view(),name="timer_aocc_mitori"),
    path('timer_aocc_denpyou',views.TimerAoccdenpyouView.as_view(),name="timer_aocc_denpyou"),
    path('sekigae',views.SekigaeView.as_view(),name="sekigae"),
    path('register_student',views.register_studentView.as_view(),name="register_student"),
]
