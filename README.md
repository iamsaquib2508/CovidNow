# CovidNow
A project to play with Django backend and ReactJS frontend. Default database of Django, sqlite has been used for simplicity.

# Installation
Assuming one has ``pip`` and ``npm`` installed, one can run the following commands to install the dependencies.

(For React)

``cd CovidNow-React/covid-now/``

``npm install axios``

``npm install bootstrap``

``npm start``

``cd ../..``

(For Django)
``cd CovidNow-Django/``

``pip install django``

``pip install django-cors-headers``

``pip install djangorestframework``

``python3 manage.py makemigrations``

``python3 manage.py migrate``

``python3 manage.py runserver``
