# Generated by Django 4.1.2 on 2022-12-07 05:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('class_support_app', '0002_alter_poll_option_one_count_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='poll',
            name='option_three',
        ),
        migrations.RemoveField(
            model_name='poll',
            name='option_three_count',
        ),
    ]