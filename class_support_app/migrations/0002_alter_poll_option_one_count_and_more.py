# Generated by Django 4.1.2 on 2022-12-07 04:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('class_support_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='poll',
            name='option_one_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='poll',
            name='option_three_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='poll',
            name='option_two_count',
            field=models.IntegerField(default=0),
        ),
    ]
