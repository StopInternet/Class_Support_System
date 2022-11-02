from django.urls import path
from . import views

app_name = 'class_support_app'
urlpatterns = [
    path('',views.IndexView.as_view(),name="index"),
    path('timer',views.TimerMainView.as_view(),name="timer"),
    path('timer_kentei',views.TimerDentakuView.as_view(),name="timer_kentei"),
    path('timer_aocc',views.TimerAoccView.as_view(),name="timer_aocc")
]
