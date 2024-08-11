# Usa una imagen base de Python

FROM python:3.9

# Establece el directorio de trabajo
WORKDIR app

# Copia el archivo de requisitos y lo instala
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copia el código del proyecto
COPY . .

# Expone el puerto en el que Django escuchará
EXPOSE 8000

# Comando para ejecutar el servidor de desarrollo de Django
CMD [python, manage.py, runserver, 0.0.0.08000]